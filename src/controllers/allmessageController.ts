/** @format */

import { Request, Response } from "express";
import { Allmessage } from "../models/models";

class AllmessageCreate {
  async create(req: Request, res: Response) {
    try {
      const { message } = req.body;
      const Createmessage = await Allmessage.create({ message });
      res.status(200).json(Createmessage);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Allmessage.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Allmessage.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Allmessage.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new AllmessageCreate();
