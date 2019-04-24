const db = require('../../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('./schema');

class ArticleModel {
    static async getShared() {
        return await Article.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
    }
}

module.exports = ArticleModel