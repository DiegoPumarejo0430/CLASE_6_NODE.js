import { Request, Response } from "express";
import {Viajeros } from "../models/Viajeros";

export class Viajeroscontroller{
    public index(req: Request, res: Response){
        Viajeros.findAll({})
            .then((categorias:Array<Viajeros>) => res.json(Viajeros))
            .catch((err: Error) => res.status(500).json(err));
            
    }
    public mostrarnovatos(){
        
    }

}