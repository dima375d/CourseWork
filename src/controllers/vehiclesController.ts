/** @format */

import { Request, Response } from "express";
import { Vehicles } from "../models/models";

class VehiclesCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, brand, model, licenseplate, vin } = req.body;
      const Create = await Vehicles.create({
        userId,
        brand,
        model,
        licenseplate,
        vin,
      });
      res.status(200).json(Create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Vehicles.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Vehicles.findOne({ where: { userId: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Vehicles.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new VehiclesCreate();
