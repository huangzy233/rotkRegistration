/**
 * Created by huxia on 2016/11/20.
 */
var Sequelize = require('sequelize');
var config = require('../../config/config.json').development;

module.exports = new Sequelize(config.database, config.username, config.password, {
	host: config.host, // 数据库地址
	port: config.port,
	dialect: config.dialect, // 指定连接的数据库类型
	pool: {
		max: 5, // 连接池中最大连接数量
		min: 0, // 连接池中最小连接数量
		idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
	}
});