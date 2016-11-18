/**
 * Created by apple on 2016/11/16.
 */
(function () {
    module.exports = function (sequelize, DataTypes) {
        return sequelize.define('user', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ID_TYPE: {
                type: DataTypes.ENUM,
                values: [{1:'居民身份证'},{2:'军官证'},{3:'护照'},{4:'港澳通行证'},{5:'台胞证'}],
                defaultValue: {1:'居民身份证'}
            },
            ID_Number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                }
            },
            telephone: {
                type: DataTypes.STRING
            },
            CreditRank: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 5
            }
        },{
            underscored: true
        });
    };
}).call(this);