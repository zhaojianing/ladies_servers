const ArticleModel = require('./module')
const handleError = require('../../util/error')
const handleEmail = require('../../util/sendEmail')

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
    // 获取callemail
    static async getcallEmail(ctx) {
        let id = ctx.params.page;
        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getcallEmail(id);
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
    
    static async createCall(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.vo_id // 被评论id
            && req.name // 评论者名称
            && req.vo_name // 被评论者名称
            && req.getv // 浏览器版本
            && req.comments // 评论内容
            && req.vo_email // 邮箱
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createCall(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.getCall(ret.vo_id);
                
                // 发送邮件
                handleEmail.sendEm(req.vo_email,'您好'+req.vo_name+'来自'+req.name+'的留言','评论内容：'+req.comments);

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

module.exports = callback