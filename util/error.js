
// 处理 mysql 处理失败类
class handleError {
    static async catchError(ctx,err,msg) {
        ctx.response.status = 412;
        ctx.body = {
            code: 200,
            msg: msg,
            data: err
        }
    }
    static async responseError(ctx,msg) {
        ctx.response.status = 416;
        ctx.body = {
            code: 200,
            msg: msg,
        }
    }
}

module.exports = handleError
