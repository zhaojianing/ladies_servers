const ArticleModel = require('./module')
const handleError = require('../../util/error')

class message {
    // 获取回复信息
    static async getMessage(ctx) {
        let page = ctx.params.page;
        if (page) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getMessage(page);
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
    static async createMessage(ctx) {
        let req = ctx.request.body;
        if (req.name // 阁下昵称
            && req.content // 评论内容
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createMessage(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.getMessage(1);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建留言成功',
                    data
                }

            } catch (err) {
                handleError.catchError(ctx,err,'创建留言失败')
            }
        } else {
            handleError.responseError(ctx,'search page? eat ?')
        }
    }
}

module.exports = message