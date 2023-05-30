"use strict";
const Controller = require("egg").Controller;

class UserController extends Controller {
    async create() {
        const { ctx } = this;

        try {
            const body = ctx.request.body;
            const { name, age } = body;
            const hasUser = await ctx.model.User.findOne({
                where: {
                    name,
                    age,
                }
            });
            if (hasUser) {
                ctx.JsonResponse.error("you has sign up, please go to login");
            } else {
                const res = await ctx.model.User.create(body);
                ctx.JsonResponse.success(res);
            }
        } catch (e) {
            ctx.JsonResponse.error("Internal", 404);
            console.error(e);
        }
    }
    async getCmpUserList() {
        const { ctx } = this;
        try {
            const { page = 1, pageSize, filterOption } = ctx.request.body;
            console.log(ctx.request.body);
            const limit = pageSize || 6;
            const offset = (page - 1) * limit;
            const where = {};
            if (filterOption && filterOption.name) {
                where.name = filterOption.name;
            }
            if (filterOption && filterOption.age) {
                where.age = filterOption.age;
            }
            const userList = await ctx.model.User.findAll({
                attributes: ["name", "id", "age", "avatar", "order"],
                order: [["order", "ASC"]],
                where,
                limit,
                offset
            });
            const total = await ctx.model.User.count({
                where
            });
            ctx.JsonResponse.success({data: userList, count: total, page  });
        } catch (e) {
            console.error(e);
            ctx.JsonResponse.error(e.message);
        }
    }
    async getUserList() {
        const { ctx } = this;
        try {
            const { page, name, age } = ctx.request.body;
            console.log(name, age, "------------");
            const limit = 6;
            const offset = (page - 1) * limit;
            const where = {};
            if (name) {
                where.name = name;
            }
            if (age) {
                where.age = age;
            }
            console.log(where, "-------where");
            const userList = await ctx.model.User.findAll({
                attributes: ["name", "id", "age", "avatar"],
                where,
                limit,
                offset
            });
            const total = await ctx.model.User.count({
                where
            });
            ctx.JsonResponse.success({ userList, total, page });
        } catch (e) {
            console.error(e);
            ctx.JsonResponse.error(e.message);
        }
    }
    async modifyUser() {
        const { ctx } = this;
        try {
            const { id, name, age, avatar } = ctx.request.body;
            const res = await ctx.model.User.update({
                name, age, avatar
            }, {
                where: {
                    id,
                }
            });
            ctx.JsonResponse.success(res);
        } catch (error) {
            ctx.JsonResponse.error(error.message);
        }
    }
    async deleteUser() {
        const { ctx } = this;
        try {
            console.log("destory----");
            const { id } = ctx.request.body;
            const res = await ctx.model.User.destroy({
                where: {
                    id,
                }
            });
            ctx.JsonResponse.success(res);
        } catch (error) {
            ctx.JsonResponse.error(error.message);
        }
    }
}

module.exports = UserController;
