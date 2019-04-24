const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('shared_data', {
        // 文章ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 作者
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author',
        },
        // 课程内容
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'course'
        },
        // 课程内容
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'content'
        },
        // 账号
        username: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'username'
        },
        // 密码
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
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