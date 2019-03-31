const ArticleModel = require('./module')
const handleError = require('../../util/error')

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getArticle(ctx) {
        let page = ctx.params.page;
        if (page) {
            try{
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(page);
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
    static async watchAdd(ctx) {
        let watch = ctx.params.page;
        let id = watch.split('-')[0];
        let num = watch.split('-')[1];
        if (watch) {
            try{
                // 查询文章详情模型
                let data = await ArticleModel.watchAddLength(id,num);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '观看人数加1成功',
                    data: 'ok'
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
