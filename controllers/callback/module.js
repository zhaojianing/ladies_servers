const db = require('../../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('./schema');
// 自动创建表
// Article.sync({force: false});

class ArticleModel {

    static async getcallback(id) {
        return await Article.findAll({
            where: {
                'vo_id': id
            }
        })
    }
    // 添加 回复评论
    static async createCall(data) {
        return await Article.create({
            img: data.img || '', // 图片
            vo_id: data.vo_id, // 被评论的id
            name: data.name, // 评论者名称
            vo_name: data.vo_name, // 被评论者名称
            comments: data.comments, // 评论内容
            getv: data.getv || '',  // 浏览器版本号
            createdAt: data.createdAt,
            updatedAt: data.createdAt,
        })
    }
    // 查询评论
    static async getCall(id) {
        return await Article.findAll({ 'where': { 'vo_id': id } })
    }
}

module.exports = ArticleModel