/**
 * Created by apple on 2016/11/24.
 */
var Sequelize = require('sequelize');
var sequelize = require('./db');

var Outcall = sequelize.define('Outcall', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    doc_id :{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    OutCallDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    OutCallTime: {
        type: Sequelize.INTEGER
    },
    Number: {
        type: Sequelize.INTEGER
    },
    Remain: {
        type: Sequelize.INTEGER
    },
    OutCallType: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    Status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    fee: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    CreateTime: {
        type: Sequelize.DATETIME
    },
    remark: {
        type: Sequelize.TEXT
    }
},{
    underscored: true,
    'timestamps':false,
    'createdAt':false,
    'updatedAt':false
});

Outcall.sync();
