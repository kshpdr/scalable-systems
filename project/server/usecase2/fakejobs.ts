import { job } from './scheduler'

export const fakejobs: job[] = [
    {
      name: "Job 1",
      deadline: new Date(Date.now() + (10 * 60 * 1000)), // Set deadline 10 minutes from now
      stoppable: false,
      time: 10000, // Set time to 10000
      regionnames: [],
      timewindow: [new Date, new Date],
      serverUsage: 0
    },
    {
      name: "Job 2",
      deadline: new Date(Date.now() + (60 * 60 * 1000)), // Set deadline 1 hour from now
      stoppable: true,
      time: 50000, // Set time to 50000
      regionnames: [],
      timewindow: [new Date, new Date],
      serverUsage: 0
    },
    {
      name: "Job 3",
      deadline: new Date(Date.now() + (24 * 60 * 60 * 1000)), // Set deadline 24 hours from now
      stoppable: true,
      time: 75000, // Set time to 75000
      regionnames: [],
      timewindow: [new Date, new Date],
      serverUsage: 0
    }
  ];