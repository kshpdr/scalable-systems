import React, { useState } from 'react';
import { FormAndTilesContainer, TableContainer, JobsContainer, Content } from './Jobs.styles';
import JobForm from '../../components/JobForm/JobForm';
import JobTable from '../../components/JobTable/JobTable';
import JobTile from '../../components/JobTile';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [scheduledJobs, setScheduledJobs] = useState([]);

  const addJob = (job) => {
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
