'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    try {
      console.log("------ create post");
      const { ctx } = this;
      const data = ctx.request.body;
      const createdRes = ctx.model.Post.create(data);
      ctx.JsonResponse.success(createdRes);
    } catch (e) {
      console.error(e)
    }
  };
  async update() {
    try {
      const { ctx } = this;
      const data = ctx.request.body;
      console.log("------ update post", data.id, data.data);
      const updateRes = ctx.model.Post.update({...data.data, author_name: data.data.authorName}, {
        where: {
          id: data.id
        }
      });
      ctx.JsonResponse.success(updateRes);
    } catch (e) {
      console.error(e)
    }
  };
  async list() {
    const { ctx } = this;
    const { pageIndex, categoryId, isMobile } = ctx.request.body;
    
    const limit = isMobile ? 1000 : 6;
    const page = pageIndex || 1;
    const offset = (page - 1) * limit;
    const where = categoryId ? { category: categoryId } : null;
    console.log('where--', where);
    const total = await ctx.model.Post.count({where});
    console.log(total, '--');
    const data = await ctx.model.Post.findAll({
      where,
      limit,
      offset,
    });
    ctx.JsonResponse.success({list: data, total});
  }

  async content() {
    const { ctx } = this;
    try {
      const { id } = ctx.request.body;
      console.log('--id', typeof id === 'string', typeof id)
      const res = await ctx.model.Post.findOne({
        where: {
          id,
        }
      })
      ctx.JsonResponse.success(res);
    } catch (e) {
      console.error(e);
      ctx.JsonResponse.error(e);
    }

  }
  async getUserList () {
    const { ctx } = this;
    try {
      const userList = await ctx.model.Post.findAll({
        attributes: ['author_name']
      })
      const list = [];
      for (let i of userList) {
        i.author_name && !list.includes(i.author_name) && list.push(i.author_name); 
      }
      
      ctx.JsonResponse.success(list);
    } catch (e) {
      console.error(e);
      ctx.JsonResponse.error(e);
    }
  }

  async getUserPostList () {
    const { ctx } = this;
    const {author_name} = ctx.query;
    try {
      const userPostList = await ctx.model.Post.findAll({
          where: {
            author_name,
          }
      })
      
      ctx.JsonResponse.success(userPostList);
    } catch (e) {
      console.error(e);
      ctx.JsonResponse.error(e);
    }
  }
}

module.exports = PostController;
