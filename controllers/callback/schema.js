const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article_call', {
        // 文章ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 图片地址
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'img'
        },
        // 关联被评论id
        vo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'vo_id'
        },
        // 评论者名字
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        // 被关联的名字
        vo_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'vo_name'
        },
        // 评论内容
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'comments'
        },
        // 浏览器版本
        getv: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'getv'
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