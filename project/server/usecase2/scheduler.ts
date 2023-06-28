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

export function scheduler(jobs: job[], data: region[]) {
    
    // Flatten the data structure
    const flattenedData = data.reduce((acc, { id, shortname, forecast }) => {
        const entries = forecast.map(({ from, to, forecastvalue, index }) => ({
          id,
          shortname,
          from,
          to,
          forecastvalue,
          index
        }));
        console.log(acc)
        console.log('--------')
        console.log(entries)
        return acc;
      }, []);
    
      // Sort the flattened data in ascending order based on forecastvalue
      const sortedData = flattenedData.sort((a, b) => a.forecastvalue - b.forecastvalue);
    
      // Process the sorted data as per your requirements
    //   sortedData.forEach((entry) => {
    //     // Do something with each entry, e.g., log it
    //     console.log(`ID: ${entry.id}, Shortname: ${entry.shortname}, Forecast Value: ${entry.forecastvalue}`);
    //   });
}