/** @format */

import { User, Basket } from "../models/models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "5h",
  });
};

class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Некорректный email или password" });
    }
    const finduser = await User.findOne({ where: { email } });
    if (finduser) {
      return res
        .status(400)
        .json({ message: "Пользователь c таким email уже существует" });
    }
    const hash = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hash });
    await Basket.create({ userId: user.dataValues.id });
    const token = generateJwt(user.dataValues.id, email, role);
    return res.status(200).json({ token });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(403).json({ message: "Пользователь не найден" });
    }
    let comparePassword = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    if (!comparePassword) {
      res.status(403).json({ message: "Указан неверный пароль" });
    }
    const token = generateJwt(user.dataValues.id, email, user.dataValues.role);
    return res.json({ token });
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const { fullname, DateofBirth, mail, licensenumber } = req.body;
      const updateUser = await User.update(
        {
          fullname: fullname,
          DateofBirth: DateofBirth,
          mail: mail,
          licensenumber: licensenumber,
        },
        { where: { id: id } }
      );
      res.status(200).json(updateUser);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async check(req: Request, res: Response) {
    res.json({ message: "authorized" });
  }
}

export default new UserController();
