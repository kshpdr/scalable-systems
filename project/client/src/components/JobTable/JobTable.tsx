import { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Job {
  name: string;
  deadline: string;
  stoppable: string;
  time: number;
  region: string;
  timedwindows: string;
  numservers: number
}

interface JobTableProps {
  jobs: Job[];
}

const JobTable: FC<JobTableProps> = ({ jobs }) => {

  return (
   
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Deadline</th>
          <th>Stoppable</th>
          <th>Time</th>
          <th>Region</th>
          <th>TimedWindows</th>
          <th>NumServers</th> 
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.name}>
            <td>{job.name}</td>
            <td>{job.deadline}</td>
            <td>{job.stoppable}</td>
            <td>{job.time}</td>
            <td>{job.region}</td>
            <td>{job.timedwindows}</td>
            <td>{job.numservers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
};

export default JobTable;
