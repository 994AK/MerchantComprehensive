const jsonwebtoken = require('jsonwebtoken');
module.exports = options => {
  return async (ctx, next) => {
    try {
      const { authorization = '' } = ctx.request.header;
      const token = authorization.replace('Bearer', '');
      ctx.state.user = jsonwebtoken.verify(token, ctx.app.config.jwt.secret);

      await next();
    } catch (err) {
      ctx.status = 401;
    }
    // await next();
  };
};
