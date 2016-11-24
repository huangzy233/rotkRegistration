
var Sequelize = require('sequelize');
var sequelize = require('./db');

var Admin = sequelize.define('admin', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    underscore: true,
    'timestamps':false,
    'createdAt':false,
    'updatedAt':false
});
///
Admin.sync();

