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
     * @param page // 文章分页
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(page) {
        return await Article.findAll({
            offset: page - 1,
            limit: 10
        })
    }

    static async watchAddLength(id, num) {
        return await Article.update({
            watch_length: num
        }, {
            'where': {
                'id': id
            }
        })
    }

    static async watchComment(id) {
        return await Article.findAll({
            where: {
                'id':id
            }
        })
    }
    static async updataComment(id,num) {
        return await Article.update({
            describe: num
        }, {
            'where': {
                'id': id
            }
        })
    }
}

module.exports = ArticleModel