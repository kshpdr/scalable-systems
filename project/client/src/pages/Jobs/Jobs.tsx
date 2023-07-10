import React, { useState } from 'react';
import { FormAndTilesContainer, TableContainer, JobsContainer, Content } from './Jobs.styles';
import JobForm from '../../components/JobForm/JobForm';
import JobTable from '../../components/JobTable/JobTable';
import JobTile from '../../components/JobTile';

interface Job {
  name: string;
  deadline: string;
  stoppable: string;
  time: string;
  numservers: string;
}

interface ScheduledJob {
  name: string;
  deadline: string;
  stoppable: string;
  time: number;
  regionname: string;
  timewindow: string[][];
  serverUsage: number;
}

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [scheduledJobs, setScheduledJobs] = useState<ScheduledJob[]>([]);
  
  const addJob = (job: Job) => {
    setJobs(jobs => [...jobs, job]);
  };
  
  return (
    <Content>
      <JobsContainer>
        <FormAndTilesContainer>
          <JobForm jobs={jobs} addJob={addJob} setJobs={setJobs} setScheduledJobs={setScheduledJobs} />
          {jobs.map((job, index) => <JobTile key={index} job={job} />)}
        </FormAndTilesContainer>
      </JobsContainer>
      {scheduledJobs.length > 0 && 
        <TableContainer>
          <JobTable jobs={scheduledJobs} />
        </TableContainer>
      }
    </Content>
  );  
}

export default Jobs;
