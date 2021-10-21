import { Request, Response, Application } from "express";
 import {Viajeroscontroller } from '../controllers/viajeros.controllers'; 

export class UserRoutes { 
    
    
    public userController: Viajeroscontroller = new Viajeroscontroller();


public routes(app: Application): void{
    app.route('/users').get(this.userController.index); 
}}