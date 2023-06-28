import { Json } from "sequelize/types/utils";
import { forecastdetails, region } from './extApi_02'

interface job {
    name: String;
    deadline: Date;
    stoppable: boolean;
    time: number;
    computetime: number;
    regionname: String;
    timewindow: Date[];
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

function scheduleJobs(regions: region[], jobs: job[]): job[] {
    const sortedList: [region, forecastdetails][] = regsorter(regions);
    
    jobs.forEach((job) => {
        let bestRegion: region | undefined = undefined;
        let bestTimeslot: forecastdetails | undefined = undefined;
    
        sortedList.some(([region, forecast]) => {
        if (job.stoppable && forecast.forecastvalue >= job.time) {
            const availableTimeslots = region.forecast.filter(
            (f) => f.forecastvalue >= job.time
            );
    
            if (availableTimeslots.length > 0) {
            bestRegion = region; // Store the found region separately
            bestTimeslot = availableTimeslots[0];
            return true;
            }
        }
    
        return false;
        });
    
        if (!bestRegion || !bestTimeslot) {
        throw new Error(`Unable to schedule job: ${job.name}`);
        }
    
        job.regionname = bestRegion.shortname;
        job.timewindow = [bestTimeslot.from, bestTimeslot.to];
        bestTimeslot.forecastvalue += job.time; // Update forecastvalue to account for scheduled job
    });
    
    return jobs;
    }