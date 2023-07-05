import { FC, useEffect } from 'react';
import { Th, Td, Table } from './JobTable.styles';
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
   
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Deadline</Th>
          <Th>Stoppable</Th>
          <Th>Time</Th>
          <Th>Region</Th>
          <Th>TimedWindows</Th>
          <Th>NumServers</Th> 
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.name}>
            <Td>{job.name}</Td>
            <Td>{job.deadline}</Td>
            <Td>{job.stoppable}</Td>
            <Td>{job.time}</Td>
            <Td>{job.region}</Td>
            <Td>{job.timedwindows}</Td>
            <Td>{job.numservers}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  
  );
};

export default JobTable;
