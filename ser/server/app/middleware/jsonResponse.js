module.exports = (app) => {

    return async function requireAuth(ctx, next) {
        try {
            ctx.JsonResponse = {
                success(data = []) {
                    ctx.set('Content-Type', 'application/json');
                    ctx.body = {
                        code: 0,
                        message: '成功',
                        data: data
                    };
                },
                error(code, message, data = []) {
                    const body = { code, message, data };
                    ctx.logger.error(body);
                    ctx.set('Content-Type', 'application/json');
                    ctx.body = body;
                }
            }
            await next();
        } catch (e) {
            console.error(e);
        }
    };
};
