/**
 * Created by apple on 2016/11/16.
 */
(function () {
    module.exports = function (sequelize, DataTypes) {
        return sequelize.define('area' ,{
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
        });
    };
}).call(this);