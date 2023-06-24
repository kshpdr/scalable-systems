import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
//import ClusterModel from 'model'; sobald das Datenbank modell feststeht
import { Clusters } from './db/models/clusters'
import { getClusters, createCluster } from './db/helpers';

const router = express.Router();

router.get(
    "/all",
    asyncHandler(async (req: any, res: any) => {
      res.send({ message: 'WIP: a route to show all the clusters' });
      const clusters = await getClusters();
      
      if (!Array.isArray(clusters) || !clusters.length) {
        throw new Error("There are no Cluster");
      } else {
        res.send(clusters);
      }
    })
  );

  router.post(
    "/create",
    asyncHandler(async function (req: any, res: any) {
      res.send({ message: 'WIP: a route to create a cluster' });

        
      const newCluster = ({
        name: req.body.name,
        powerHigh: req.body.powerHigh,
        powerAverage: req.body.powerAverage,
        powerLow: req.body.powerLow,
        energyConsumption: req.body.energyConsumption,
        numServers: req.body.numServers,
        location: req.body.location,
        region: req.body.region,
        numCores: req.body.numCores,
        numTBsRam: req.body.numTBsRam
      });
      await createCluster(newCluster);
      
      //dependent on sql syntax:
      //await newtodo.save();
      res.send({message: `created cluster: ${newCluster}`});
    })
  );
  
  router.put(
    "/edit",
    asyncHandler(async function (req: any, res: any) {
        res.send({ message: 'WIP: a route to edit a cluster' });
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
        res.send({ message: 'WIP: a route to delete a cluster from database' });

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
