const ArticleModel = require('./module')
const handleError = require('../../util/error')

class callback {
    // 获取回复信息
    static async getcallback(ctx) {
        let id = ctx.params.page;
        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getcallback(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查看评论成功',
                    data: data
                }
            } catch (err) {
                handleError.catchError(ctx, err, '查询失败')
            }
        } else {
            handleError.responseError(ctx, 'search page? eat ?')
        }
    }
}

module.exports = callback