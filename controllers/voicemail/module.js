const db = require('../../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('./schema');
// 自动创建表
// Article.sync({force: false});

class ArticleModel {
    static async vcmId(id) {
        return await Article.findAll({'where':{'article_id':id},'order': [['createdAt', 'DESC']]})
    }
    static async createArticle(data) {
        return await Article.create({
            name: data.name, // 阁下昵称
            article_id: data.article_id, // 文章id
            content: data.content, // 评论内容
            version: data.version, // 浏览器版本
            avatar: data.avatar || '',
            url: data.url || '',
            // reply_id: data.reply_id || 1,
            reply_id: Date.parse( new Date() ).toString().substr(0,10),
            createdAt: data.createdAt,
            updatedAt: data.createdAt,
            email: data.email || ''
        })
    }
    static async updateVcm(id,num) {
        return await Article.update({
            reply_id: num
        }, {
            'where': {
                'id': id
            }
        })
    }
}

module.exports = ArticleModel
