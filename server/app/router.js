'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  // 1. 页面路由
  router.get('/', controller.site.index);
  router.get('/site/*', controller.site.index);
  router.post('/api/getuserList', controller.user.getUserList);

  // user model 
  router.post('/api/user/createUser', controller.user.create);
  router.post('/api/user/modify', controller.user.modifyUser);
  router.post('/api/user/list', controller.user.getUserList);
  router.post('/api/user/delete', controller.user.deleteUser);
  router.post('/api/cmp/user/list', controller.user.getCmpUserList);

  router.get('/api/user/list', controller.post.getUserList);
  router.get('/api/user/postlist', controller.post.getUserPostList);
  // login && logout

  router.post('/api/login', controller.auth.login);

  router.get('/api/logout', controller.auth.logout)

  // post 
  router.post('/api/post/create', controller.post.create);

  router.post('/api/post/update', controller.post.update);

  router.post('/api/post/list', controller.post.list);

  router.post('/api/post/content',  controller.post.content);

  // monitor
  router.post('/api/moniter/webpack', controller.webpackMoniter.uploadError)
  
  // change page bg color
  router.get('/api/bgcolor/list', controller.bgColor.getColorList);

};
