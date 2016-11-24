
var Sequelize = require('sequelize');
var sequelize = require('./db');

var Hospital = sequelize.define('hospital', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.ENUM,
        values: [1,2,3,4,5,6,7,8,9]
    },
    area_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    },
    information: {
        type: Sequelize.TEXT('long')
    },
    telephoneNumber: {
        type: Sequelize.STRING
    }
},{
    underscore: true,
    'timestamps':false,
    'createdAt':false,
    'updatedAt':false
});

Hospital.sync();

//module.exports = Hospital;