const db = require('../../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('./schema');
// 自动创建表
// Article.sync({force: false});

class ArticleModel {
    /**
     * 查询取文章详情数据
     * @param id 
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        return await Article.findOne({ where: {id: id} })
    }
}

module.exports = ArticleModel
