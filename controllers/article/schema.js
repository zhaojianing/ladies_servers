const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article_box', {
        // 文章ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 文章标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
        },
        // 图片地址
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'img_url'
        },
        // 评论个数
        describe: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'describe'
        },
        // 作者
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author'
        },
        // 观看人数
        watch_length: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'watch_length'
        },
        // 文章描述
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'comments'
        },
        // 文章属性
        class: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'class'
        },
        // 文章类型
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'type'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
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