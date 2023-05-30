module.exports = () => {
    return async function auth(ctx, next) {
        let { url } = ctx.request;
        const user = ctx.session.user;
        if (!url.includes("/api/login") && !user) {
            console.log("require auth--------");
            ctx.body = "no auth, please login";
        } else {
            await next();
        }
        
    };
  };