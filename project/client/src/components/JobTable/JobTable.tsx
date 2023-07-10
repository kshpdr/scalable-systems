import { FC } from 'react';
import { Th, Td, Table } from './JobTable.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TimedWindow {
  start: string;
  end: string;
}

interface Job {
  name: string;
  deadline: string;
  stoppable: string;
  time: number;
  regionname: string;
  timewindow: TimedWindow[];
  serverUsage: number;
}

interface JobTableProps {
  jobs: Job[];
}

const JobTable: FC<JobTableProps> = ({ jobs }) => {
  
  const formatDate = (dateString: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const formatTimeWindows = (timewindow: string[][]) => {
    return (
      <ul>
        {timewindow.map(([start, end], index) => (
          <li key={index}>
            {`${formatDate(start)} - ${formatDate(end)}`}
          </li>
        ))}
      </ul>
    );
  };  
  
  console.log("Jobs: ", jobs)

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Deadline</Th>
          <Th>Stoppable</Th>
          <Th>Time in seconds</Th>
          <Th>Region</Th>
          <Th>Best time to execute</Th>
          <Th>Server numbers</Th> 
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
            <tr key={index}>
              <Td>{job.name}</Td>
              <Td>{formatDate(job.deadline)}</Td>
              <Td>{job.stoppable === "yes" ? "Yes" : "No"}</Td>
              <Td>{job.time}</Td>
              <Td>{job.regionname}</Td>
              <Td>{formatTimeWindows(job.timewindow)}</Td>
              <Td>{job.serverUsage}</Td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default JobTable;
