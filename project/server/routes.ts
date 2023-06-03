import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
//import ClusterModel from 'model'; sobald das Datenbank modell feststeht

const router = express.Router();

router.get(
    "/all",
    asyncHandler(async (req: any, res: any) => {
        const res1 : Response = res;
        res1.send({ message: 'WIP: a route to show all the clusters' });
      /*  
      const allCluster = await ClusterModel.find({}).exec(); 
  
      if (!Array.isArray(allCluster) || !allCluster.length) {
        throw new Error("There are no Cluster");
      } else {
        res.send(allCluster);
      } */
    })
  );

  router.post(
    "/create",
    asyncHandler(async function (req: any, res: any) {
        const res1 : Response = res;
        res1.send({ message: 'WIP: a route to create a cluster' });

        /*
      const newtodo = new ClusterModel({
        powerusage: req.body.powerusage,
      });
      
      //dependent on sql syntax:
      //await newtodo.save();
      res.send(newtodo);*/
    })
  );
  
  router.put(
    "/edit",
    asyncHandler(async function (req: any, res: any) {
        const res1 : Response = res;
        res1.send({ message: 'WIP: a route to edit a cluster' });
        /*
      //dependent on sql syntax:  
      //const edittodo = await ClusterModel.findById(req.body.id).exec();
  
      if (!edittodo) {
        throw new Error("cannot edit Todo. Todo not found");
      } else {
        edittodo.description = req.body.description;
        edittodo.deadline = req.body.deadline;
        edittodo.progress = req.body.progress;
        await edittodo.save();
  
        res.send(edittodo);
      } */
    })
  );
  
  router.delete(
    "/delete",
    asyncHandler(async function (req:any, res:any) {
        const res1 : Response = res;
        res1.send({ message: 'WIP: a route to delete a cluster from database' });

        /*
      //dependent on sql syntax:
      //const deleted = await ClusterModel.findByIdAndDelete(req.body.id).exec();
  
      if (!deleted) {
        throw new Error("cannot delete Todo. Todo not found");
      } else {
        res.sendStatus(200);
      } */
    })
  );
  


export default router;
