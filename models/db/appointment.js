/**
 * Created by huxia on 2016/11/24.
 */


var Sequelize = require('sequelize');
var sequelize = require('./db');

var Appointment = sequelize.define('appointment', {
	id:{
		type:Sequelize.INTEGER,
		allowNull:false,
		unique:true,
		primaryKey:true
	},
	user_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	Outcall_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	createTime:{
		type:Sequelize.DATETIME,
		allowNull:false
	},
	Status:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	remark:{
		type:Sequelize.STRING,
		allowNull:false
	}
},{
	underscore: true,
	'timestamps':false,
	'createdAt':false,
	'updatedAt':false
});

Appointment.sync();

// 以下应该是该模型上暴露出的一些公有方法

exports.findById = function(appo_id) {
	return Appointment.findOne({where:{id:appo_id}});
};