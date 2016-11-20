/**
 * Created by apple on 2016/11/16.
 */

/**
 * Updated by HuXiao on 2016/11/20
 */

var Sequelize = require('sequelize');
var sequelize = require('./db');

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ID_TYPE: {
        type: Sequelize.ENUM,
        values: [{1:'居民身份证'}],
        defaultValue: {1:'居民身份证'}
    },
    ID_Number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    telephoneNumber: {
        type: Sequelize.STRING
    },
    CreditRank: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5
    }
},{
    underscore: true,
    'timestamps':false,
    'createdAt':false,
    'updatedAt':false
});

User.sync();

exports.findById = function (user_id) {
    return User.findOne({where: {id:user_id}});
};
