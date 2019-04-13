const db = require('../../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('./schema');
// 自动创建表
// Article.sync({force: false});

class Message {
    static async getMessage(page) {
        return await Article.findAll({
            offset: page - 1,
            limit: 10,
            order: [
                ['createdAt', 'DESC']
            ]
        })
    }
    static async createMessage(data) {
        return await Article.create({
            name: data.name,
            content: data.content,
            email: data.email,
            createdAt: new Date(),
            updatedAt: new Date(),
            awesome: data.awesome
        })
    }
}

module.exports = Message