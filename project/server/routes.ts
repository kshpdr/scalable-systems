import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { externalApiCallandsort } from './usecase1/extApi_01';
import { externalApiCallforScheduling } from './usecase2/extApi_02';
import { Clusters } from './db/models/clusters'
import { getClusters, createCluster } from './db/helpers';
import { stringify } from 'querystring';
import { scheduleJobs } from './usecase2/scheduler';
import { fakeclusters, fakejobs } from './usecase2/fakejobs';
import { region } from './usecase2/extApi_02';
import { cluster } from './interfaces';
const router = express.Router();


router.get(
  "/forecastCall",
  asyncHandler(async (req: any, res: any) => {
    
    const event = new Date();
    event.toISOString()

    externalApiCallforScheduling('/regional/intensity/' + event.toISOString() + '/fw48h')
    .then((reg_array) => { //users sends all the jobs in body of get call req.body
      //reg
      //scheduler(req.body, reg_array)
      // do some scheduling 
      //turn result into json
      const clusters = getClusters()
      const updatedJobs = scheduleJobs(reg_array, fakejobs, fakeclusters)

      const jsonData = JSON.stringify(updatedJobs);
      // console.log(jsonData);
      res.send(jsonData); // The JSON object from the API call
    })
    .catch((error) => {
      console.error(error); // Error handling for API call
    });
  })
);

router.get(
  "/externalApi",
  asyncHandler(async (req: any, res: any) => {
    
    const event = new Date();
    event.toISOString()

    externalApiCallandsort('/regional/intensity/' + event.toISOString() + '/fw24h')
    .then((jsonData) => {
      res.send(jsonData); // The JSON object from the API call
    })
    .catch((error) => {
      console.error(error); // Error handling for API call
    });
  })
);

router.get(
    "/all",
    asyncHandler(async (req: any, res: any) => {
      // res.send({ message: 'WIP: a route to show all the clusters' });
      const clusters = await getClusters();
      
      if (!Array.isArray(clusters) || !clusters.length) {
        throw new Error("There are no Cluster");
      } else {
        // res.send("TEST")
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
