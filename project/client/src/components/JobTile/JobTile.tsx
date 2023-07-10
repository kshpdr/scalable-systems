import { FC } from 'react';
import { TileContainer, JobTitle, JobDetail } from './JobTile.styles';

interface JobTileProps {
  job: {
    name: string;
    deadline: string;
    stoppable: string;
    time: string;
    numservers: string;
  };
}

const JobTile: FC<JobTileProps> = ({ job }) => {
    return (
      <TileContainer>
        <JobTitle>{job.name}</JobTitle>
        <JobDetail>Deadline: {job.deadline}</JobDetail>
        <JobDetail>Stoppable: {job.stoppable}</JobDetail>
        <JobDetail>Time: {job.time}</JobDetail>
        <JobDetail>Num of Servers: {job.numservers}</JobDetail>
      </TileContainer>
    );
};  

export default JobTile;
