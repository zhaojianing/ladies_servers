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
                'vo_id':id
            }
        })
    }
}

module.exports = ArticleModel