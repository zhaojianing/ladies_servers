const ArticleModel = require('./module')
const handleError = require('../../util/error')
const handleEmail = require('../../util/sendEmail')

class articleController {
    // 获取评论留言
    static async vcmId(ctx) {
        let id = ctx.params.page;
        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.vcmId(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '评论查询成功',
                    data: data
                }
            } catch (err) {
                handleError.catchError(ctx, err, '查询失败')
            }
        } else {
            handleError.responseError(ctx, 'search page? eat ?')
        }
    }

    // 获取id 对应 回复 邮箱信息
    static async getEmail(ctx) {
        let id = ctx.params.page;
        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getEmail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查看邮箱成功',
                    data: data
                }
            } catch (err) {
                handleError.catchError(ctx, err, '查询失败')
            }
        } else {
            handleError.responseError(ctx, 'search page? eat ?')
        }
    }

    // 添加留言
    static async createVcm(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.name // 阁下昵称
            && req.content // 评论内容
            && req.article_id // 文章id
            && req.version // 浏览器版本
            && req.createdAt // 创建时间
            && req.email // 创建时间
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createArticle(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.vcmId(ret.id);

                // 发送邮件
                handleEmail.sendEm('zjn1030@iCloud.com','来自'+req.name+'的评论','评论内容：'+req.content);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建留言成功',
                    data
                }

            } catch (err) {
                handleError.catchError(ctx, err, '创建留言失败')
            }
        } else {
            handleError.responseError(ctx, 'search page? eat ?')
        }

    }
    // 更新评论总数
    static async updateVcm(ctx) {
        // 接收客服端
        let watch = ctx.params.page;
        let id = watch.split('-')[0];
        let num = watch.split('-')[1];
        if (watch) {
            try {
                // 创建文章模型
                const data = await ArticleModel.updateVcm(id, num);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新回复成功',
                    data
                }

            } catch (err) {
                handleError.catchError(ctx, err, '更新回复失败')
            }
        } else {
            handleError.responseError(ctx, 'search page? eat ?')
        }

    }
}

module.exports = articleController
