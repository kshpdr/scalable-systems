import { job } from "./scheduler";

export function jobsParser(input: JSON){
    const data = input
    var jobs: job[] = []
    const jsonLength = Object.keys(data).length

    for(let i=0; i<jsonLength; i++){
        const aJob: job = {
            name: data['jobs'][i]['name'],
            deadline: data['jobs'][i]['deadline'],
            stoppable: data['jobs'][i]['stoppable'],
            time: data['jobs'][i]['time'],
            serverUsage: data['jobs'][i]['numservers'],
            regionname: '',
            timewindow: []
        } 
        jobs.push(aJob)
    }
    return jobs 
}

/* 
Jobs JSON sample for reference according to JobForm.tsx:

{
    jobs:[
        {
            name: 'a',
            deadline: 'Somedate',
            stoppable: 'Yes',
            time: '12345', // seconds
            numservers: '10'
        },
        {
           name: 'b',
            deadline: 'Somedate',
            stoppable: 'Yes',
            time: '12345', // seconds
            numservers: '10' 
        }
    ]
}
*/