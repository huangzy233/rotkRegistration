/**
 * Created by apple on 2016/11/17.
 */
(function () {
    module.exports = function (sequelize, DataTypes) {
        return sequelize.define('admin', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        })
    }
}).call(this);