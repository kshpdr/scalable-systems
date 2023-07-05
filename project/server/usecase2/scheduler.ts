import { Json } from "sequelize/types/utils";
import { forecastdetails, region } from './extApi_02'
import { cluster } from "../interfaces";

export interface job {
    name: String;
    deadline: Date;
    stoppable: boolean;
    time: number;
    regionname: String;
    timewindow: [Date, Date];   //array of assigned time slots [from, to]
    serverUsage: number;        //number of servers that should be used by the job
}

    
function regsorter(regions: region[]): [region, forecastdetails][] {
    const sortedList: [region, forecastdetails][] = [];
    
    // Iterate over each region
    regions.forEach((region) => {
        // Iterate over forecastdetails of each region
        region.forecast.forEach((forecast) => {
            sortedList.push([region, forecast]);
        });
    });
    
    // Sort the list by forecastvalue in ascending order
    sortedList.sort((a, b) => a[1].forecastvalue - b[1].forecastvalue);
    
    return sortedList;
    }

function compareJobsByDeadline(job1: job, job2: job): number {
    const now = new Date();
    const deadlineDiff1 = Math.abs(now.getTime() - job1.deadline.getTime());
    const deadlineDiff2 = Math.abs(now.getTime() - job2.deadline.getTime());
    
    return deadlineDiff1 - deadlineDiff2;
    }

export function scheduleJobs(regions: region[], jobs: job[], clusters: cluster[]): job[] {
    const sortedList: [region, forecastdetails][] = regsorter(regions);
    jobs = jobs.sort(compareJobsByDeadline)

    jobs.forEach((job) => {
        let slotsNeeded: number = job.time / 1800;
        var slotsRest = slotsNeeded;
        let bestRegion: region | undefined = undefined;
        let bestTimeslot: forecastdetails | undefined = undefined;
        //var i = 0

        job.regionname = "England"
        job.timewindow = [new Date(Date.now() + (25 * 30 * 60 * 1000)), new Date(Date.now() + (25 * 60 * 60 * 1000))]


        // for (let i=0; i<sortedList.length; i++){
        //     const firstSlot: [region, forecastdetails] = [sortedList[i][0], sortedList[i][1]]
        //     console.log(firstSlot[1].from)
        //     console.log(i + 'i in loop')
        //     if(firstSlot[1].available_servers >= job.serverUsage){
        //         job.timewindow.push(firstSlot[1].from, firstSlot[1].to)
        //         if(job.regionnames.indexOf(sortedList[i][0].shortname) === -1) {
        //             job.regionnames.push(sortedList[i][0].shortname);
        //         }
        //         console.log(slotsRest)
        //         slotsRest--;
        //         sortedList[i][1].available_servers -= job.serverUsage;
        //         // if (slotsNeeded > 1) {
        //         //     for (let j=i; j<sortedList.length; j++) {
        //         //         if(slotsRest == 0){break}
        //         //         const currentSlot :[region, forecastdetails] = [sortedList[j][0], sortedList[j][1]]
        //         //         if(sortedList[j][0].id == firstSlot[0].id && currentSlot[1].available_servers >= job.serverUsage){
        //         //             sortedList[j][1].available_servers -= job.serverUsage;
        //         //             job.timewindow.push(currentSlot[1].from, currentSlot[1].to);
        //         //             if(job.regionnames.indexOf(sortedList[j][0].shortname) === -1) {
        //         //                 job.regionnames.push(sortedList[j][0].shortname);
        //         //             }
        //         //             slotsRest--;
        //         //         }
        //         //     }
        //         // }
        //         // break; 
        //     }
        //     break;
            
        // }
    })
    return jobs;
}