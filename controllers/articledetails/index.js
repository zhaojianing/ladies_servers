const ArticleModel = require('./module')
const handleError = require('../../util/error')

class articleController {
    /**
     * 查询文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getArticle(ctx) {
        let id = ctx.params.page;
        if (id) {
            try{
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            } catch(err) {
                handleError.catchError(ctx,err,'查询失败')
            }
        } else {
            handleError.responseError(ctx,'search page? eat ?')
        }
    }
}

module.exports = articleController
