/**
 * Created by apple on 2016/11/16.
 */

/**
 * Updated by HuXiao on 2016/11/24
 */


Area = sequelize.define('crm_area' ,{
            area_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            parent_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            area_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            area_type: {
                type: DataTypes.ENUM(0,1,2,3),
                allowNull: false,
                defaultValue: 2
            }
},{
    underscore: true,
    'timestamps':false,
    'createdAt':false,
    'updatedAt':false,
    freezeTableName:true // 数据库表名不增加复数
});

Area.sync({force:false});

// 以下应该是该模型上暴露出的一些公有方法

exports.findById = function (area_id) {
    return Area.findOne({where: {id:area_id}});
};