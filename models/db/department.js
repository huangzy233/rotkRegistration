/**
 * Created by apple on 2016/11/16.
 */

/**
 * Updated by HuXiao on 2016/11/24
 */

var Sequelize = require('sequelize');
var sequelize = require('./db');

var Department = sequelize.define('department', {
	id:{
		type:Sequelize.INTEGER,
		allowNull:false,
		unique:true,
		primaryKey:true
	},
	name:{
		type: Sequelize.STRING,
		allowNull: false
	},
	pname:{
		type: Sequelize.STRING,
		allowNull: false
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

Department.sync({force:false});

// 以下应该是该模型上暴露出的一些公有方法

exports.findById = function(dept_id) {
	return Department.findOne({where:{id:dept_id}});
};