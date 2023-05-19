"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allmessage = exports.Fines = exports.Vehicles = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
    fullname: { type: sequelize_1.default.STRING },
    DateofBirth: { type: sequelize_1.default.STRING },
    mail: { type: sequelize_1.default.STRING },
    licensenumber: { type: sequelize_1.default.STRING },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Vehicles = database_1.default.define("vehicles", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    brand: { type: sequelize_1.default.STRING },
    model: { type: sequelize_1.default.STRING },
    licenseplate: { type: sequelize_1.default.STRING },
    vin: { type: sequelize_1.default.STRING },
});
exports.Vehicles = Vehicles;
var Fines = database_1.default.define("fines", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    violation: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.STRING },
    data: { type: sequelize_1.default.STRING },
    status: { type: sequelize_1.default.BOOLEAN, defaultValue: false },
});
exports.Fines = Fines;
var Allmessage = database_1.default.define("allmessage", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    message: { type: sequelize_1.default.STRING },
});
exports.Allmessage = Allmessage;
User.hasOne(Basket);
Basket.belongsTo(User);
User.hasMany(Vehicles);
Vehicles.belongsTo(User);
User.hasMany(Fines);
Fines.belongsTo(User);
Vehicles.hasMany(Fines);
Fines.belongsTo(Vehicles);
