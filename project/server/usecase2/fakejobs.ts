import { job } from './scheduler'

export const fakejobs: job[] = [
    {
      name: "Job 1",
      deadline: new Date(Date.now() + (10 * 60 * 1000)), // Set deadline 10 minutes from now
      stoppable: false,
      time: 18000, // Set time to 10000
      regionname: "",
      timewindow: [],
      serverUsage: 10
    },
    // {
    //   name: "Job 2",
    //   deadline: new Date(Date.now() + (25 * 60 * 60 * 1000)), // Set deadline 25 hour from now
    //   stoppable: true,
    //   time: 50000, // Set time to 50000
    //   regionname: "",
    //   timewindow: [],
    //   serverUsage: 0
    // },
    // {
    //   name: "Job 3",
    //   deadline: new Date(Date.now() + (24 * 60 * 60 * 1000)), // Set deadline 24 hours from now
    //   stoppable: true,
    //   time: 75000, // Set time to 75000
    //   regionname: "",
    //   timewindow: [],
    //   serverUsage: 0
    // }
  ];

  export const fakeclusters = [
    {
      id: 1,
      name: "Cluster 1",
      powerHigh: 100,
      powerAverage: 50,
      powerLow: 0,
      energyConsumption: 10,
      numServers: 20
    },
    {
      id: 2,
      name: "Cluster 2",
      powerHigh: 100,
      powerAverage: 50,
      powerLow: 0,
      energyConsumption: 10,
      numServers: 20
    },
    {
      id: 3,
      name: "Cluster 3",
      powerHigh: 100,
      powerAverage: 50,
      powerLow: 0,
      energyConsumption: 10,
      numServers: 20
    }
  ];