/** @format */

import { Request, Response } from "express";
import { Fines } from "../models/models";

class FinesCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, vehiclesId, violation, price, data, status } = req.body;
      const Create = await Fines.create({
        userId,
        vehiclesId,
        violation,
        price,
        data,
        status,
      });
      res.status(200).json(Create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Fines.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Fines.findOne({ where: { userId: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async payment(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Fines.update({ status: true }, { where: { id: id } });
      res.status(200).json(await Fines.findOne({ where: { id: id } }));
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Fines.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new FinesCreate();
