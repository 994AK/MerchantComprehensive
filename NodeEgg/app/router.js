'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const auto = app.middleware.user();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user/iii', auto, controller.user.index);
  router.post('/api/user/condition', auto, controller.user.conditionQuery);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/register', controller.user.register);
  router.get('/api/user/formalist', auto, controller.user.formalist);
  router.post('/api/user/submit', auto, controller.user.submitForm);
  router.post('/api/user/upload', auto, controller.upload.upload);
  router.post('/api/user/excel', auto, controller.user.excel);
  router.post('/api/user/update', auto, controller.user.updateData);

};
