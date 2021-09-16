import { Request, Response } from 'express';
import { json } from 'sequelize/types';


export const getResevas = async( req: Request , res: Response ) => {

    // const usuarios = await Usuario.findAll();

    const totalDataNumber = 1230;
    const data = [
        {
          // type: '分类一',
          type: 'Finalizado',
          values: [0, 56],
          color: '#072b4c'
        },
        {
          type: 'SIN_SALDO',
          values: [56, 60],
          color: '#5EF0F2'
        },
        {
          type: 'SIN_PKT',
          values: [61, 67],
          color:'#60DBBB'
        },{
          type: 'LPN-BLOQ',
          values: [68, 70],
          color: '#ff3d00'
        },
         {
          type: 'SKU-CERTIFICACION_CALIDAD',
          values: [71, 73],
          color: '#618833'
        },
        {
          type: 'DESCUADRE_INV_WMOS/ODBMS',
          values: [74, 79],
          color: '#f73378'
        },
        {
          type: 'PEND_PICKING/DAÑO',
          values: [80, 85],
          color: '#4dabf5'
        },
        {
          type: 'ATRASO_PROV',
          values: [86, 90],
          color: '#f50057'
        },
        {
          type: 'SIN_OC',
          values: [91, 95],
          color: '#2196f3'
        },
        {
          type: 'SIN_OLEAR',
          values: [96, 100],
          color: '#f50057'
        },
       
      ];
    res.json({ data });
}