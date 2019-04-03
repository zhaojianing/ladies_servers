const ArticleModel = require('./module')
const handleError = require('../../util/error')

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    // 获取首页信息
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
    // 增加观看人数
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
    // 查询评论人数
    static async watchComment(ctx) {
        let id = ctx.params.page;
        if (id) {
            try{
                // 查询文章详情模型
                let data = await ArticleModel.watchComment(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询评论成功',
                    data: data
                }
            } catch(err) {
                handleError.catchError(ctx,err,'查询失败')
            }
        } else {
            handleError.responseError(ctx,'search page? eat ?')
        }
    }
    // 更新评论人数
    static async updataComment(ctx) {
        let watch = ctx.params.page;
        let id = watch.split('-')[0];
        let num = watch.split('-')[1];
        if (id) {
            try{
                // 查询文章详情模型
                let data = await ArticleModel.updataComment(id,num);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新评论成功',
                    data: data
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
