const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article_voicemail', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 头像
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'avatar',
        },
        // 昵称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 网站 地址
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'url'
        },
        // 评论内容
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'content'
        },
        // 文章id
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'article_id'
        },
        // 回复id
        reply_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'reply_id'
        },
        // 浏览器版本
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'version'
        },
        // 浏览器版本
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}