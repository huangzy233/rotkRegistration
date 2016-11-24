/**
 * Created by huxia on 2016/11/24.
 */

var Sequelize = require('sequelize');
var sequelize = require('./db');

var Doctor = sequelize.define('doctor', {
	id:{
		type:Sequelize.INTEGER,
		allowNull:false,
		unique:true,
		primaryKey:true
	},
	name:{
		type:Sequelize.STRING,
		allowNull:false
	},
	level:{
		type:Sequelize.ENUM,
		values:[1,2,3,4],
		allowNull:false
	},
	hp_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	dpt_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	information:{
		type:Sequelize.STRING,
		allowNull:false
	}
},{
	underscore: true,
	'timestamps':false,
	'createdAt':false,
	'updatedAt':false
});

Doctor.sync({force:false});

// 以下应该是该模型上暴露出的一些公有方法

exports.findById = function(doctor_id) {
	return Doctor.findOne({where:{id:doctor_id}});
};