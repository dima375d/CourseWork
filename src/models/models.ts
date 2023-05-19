/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  fullname: { type: DataTypes.STRING },
  DateofBirth: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING },
  licensenumber: { type: DataTypes.STRING },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Vehicles = DataBase.define("vehicles", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  licenseplate: { type: DataTypes.STRING },
  vin: { type: DataTypes.STRING },
});

const Fines = DataBase.define("fines", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  violation: { type: DataTypes.STRING },
  price: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Allmessage = DataBase.define("allmessage", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Vehicles);
Vehicles.belongsTo(User);

User.hasMany(Fines);
Fines.belongsTo(User);

Vehicles.hasMany(Fines);
Fines.belongsTo(Vehicles);

export { User, Basket, Vehicles, Fines, Allmessage };
