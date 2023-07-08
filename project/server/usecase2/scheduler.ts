import { Json } from "sequelize/types/utils";
import { forecastdetails, region } from './extApi_02'
import { cluster } from "../interfaces";

export interface job {
    name: String;
    deadline: Date;
    stoppable: boolean;
    time: number;
    regionname: String;
    timewindow: [Date, Date][];   //array of assigned time slots [from, to]
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

export function scheduleJobs(regions: region[], jobs: job[]): job[] {
    const sortedList: [region, forecastdetails][] = regsorter(regions);
    jobs = jobs.sort(compareJobsByDeadline)

    jobs.forEach((job) => {
        let slotsNeeded: number = Math.ceil(job.time / 1800);
        let slotsUsed: number = 0;
        // let bestRegion: region | undefined = undefined;
        // let bestTimeslot: forecastdetails | undefined = undefined;
        //var i = 0
        console.log(sortedList.length)
        console.log(slotsNeeded)
        // job.regionname = "England"
        // job.timewindow = [new Date(Date.now() + (25 * 30 * 60 * 1000)), new Date(Date.now() + (25 * 60 * 60 * 1000))]
        var placeholderRegion: String = '';

        for(let i = 0; i<sortedList.length; i++){
            const actualSlot: [region, forecastdetails] = [sortedList[i][0], sortedList[i][1]]
            // console.log("USed: " + slotsUsed)
            // console.log(placeholderRegion)

            if(slotsUsed === 96){
                break
            }
            if(slotsUsed == slotsNeeded ){
                console.log("first if")
                break;
            }
            if(job.timewindow.length === 0 && sortedList[i][1].available_servers >= job.serverUsage){
                placeholderRegion = actualSlot[0].shortname
                console.log("second if")
            }
            if(placeholderRegion != actualSlot[0].shortname || sortedList[i][1].available_servers < job.serverUsage){
                console.log("third if")
                continue;
            }
            job.regionname = actualSlot[0].shortname
            job.timewindow.push([actualSlot[1].from, actualSlot[1].to])
            sortedList[i][1].available_servers -= job.serverUsage
            console.log("Timeslot an Position " + i + " " + sortedList[i][1])
            slotsUsed++
        }
        console.log("Job after for loop: " + job)

    })
    return jobs;
}