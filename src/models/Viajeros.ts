const Sequelize = require(`sequelize`);

import {database} from "../database/db"

export class Viajeros extends Sequelize.Model{
    public cedula!: number;
    public Nombre!: string;
    public Direccion!: string;
    public telefono!: number;
}

export interface Viajeros 
{
    cedula: number;
    Nombre: string;
    Direccion: string;
    telefono: number;

}
Viajeros.init (
    {


        cedula:{


            type:Sequelize.DataTypes.number,
             allowNull: false
            },

         Nombre:{


         type:Sequelize.DataTypes.string,
          allowNull: false
         },

         Direccion:{

            type:Sequelize.DataTypes.string,
             allowNull: false
            },

            telefono:{

                type:Sequelize.DataTypes.number,
                 allowNull: false
                }



    },

   {
    tableName:"Viajeros",
    Sequelize: database,
    timestamps: true


   }





);