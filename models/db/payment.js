/**
 * Created by huxia on 2016/11/24.
 */

var Sequelize = require('sequelize');
var sequelize = require('./db');

var Payment = sequelize.define('payment', {
	id:{
		type:Sequelize.INTEGER,
		allowNull:false,
		unique:true,
		primaryKey:true
	},
	appo_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	user_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	hp_id:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	createTime:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	fee:{
		type:Sequelize.DECIMAL,
		allowNull:false
	},
	remark:{
		type:Sequelize.STRING,
		allowNull:false
	}
}, {
	underscore: true,
	'timestamps':false,
	'createdAt':false,
	'updatedAt':false
});

Payment.sync({force:false});

// 以下应该是该模型上暴露出的一些公有方法

exports.findById = function(pay_id) {
	return Payment.findOne({where:{id:pay_id}});
};