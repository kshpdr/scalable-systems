import React, { useState } from 'react';
import { Content, JobsContainer } from './Jobs.styles';
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
    <div>
      <Content>
        <JobsContainer>
          <JobForm addJob={addJob} />
          {jobs.map((job, index) => <JobTile key={index} job={job} />)}
        </JobsContainer>
        {scheduledJobs.length > 0 && <JobTable jobs={scheduledJobs} />}
      </Content>
    </div>
  );
}

export default Jobs;
