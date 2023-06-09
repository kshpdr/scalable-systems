import { FC, SetStateAction, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

interface JobFormProps {
  jobs: Job[];
  addJob: (job: Job) => void;
  setJobs: (jobs: Job[]) => void;
  setScheduledJobs: (jobs: ScheduledJob[]) => void;
}

const JobForm: FC<JobFormProps> = ({ jobs, addJob, setScheduledJobs }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState(''); 
  const [stoppable, setStoppable] = useState(''); 
  const [time, setTime] = useState('');
  const [numservers, setNumServers] = useState(''); 

  const handleFormSubmit = async () => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/forecastCall`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "jobs": jobs }),
    });
    const scheduledJobs = await response.json();
    setScheduledJobs(scheduledJobs);
  };

  const handleAddJob = () => {
    const job = { name, stoppable, deadline, time, numservers };

    addJob(job);

    setName('');
    setDeadline('');
    setStoppable('');
    setTime('');
    setNumServers('');
  };

  const handleNameChanged = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName(event.target.value)
  }; 

  const handleDeadlineChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDeadline(e.target.value) 
  };

  const handleStoppableChanged = (e: { target: { checked: boolean; }; }) => {
    setStoppable(e.target.checked ? 'yes' : 'no');
  };

  const handleTimeChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTime(e.target.value) 
  }; 

  const handleNumServesChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNumServers(e.target.value) 
  }; 

  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
            <label>Name:</label>
            <input type="text" className='form-control' value={name} onChange={handleNameChanged}/>
        </div>

        <div className='form-group'>
          <label>Deadline:</label>
          <input type="date" className='form-control' value={deadline} onChange={handleDeadlineChanged} />
        </div>

        <div className='form-group'>
          <br/>
          <input className="form-check-input" type="checkbox" onChange={handleStoppableChanged} /> Stoppable 
        </div>

        <div className='form-group'>
          <label>Time (enter in seconds):</label>
          <input type="text" value={time} className='form-control' onChange={handleTimeChanged} /> 
        </div>

        <div className='form-group'>
          <label>Number of Servers:</label>
          <input type="text" value={numservers} className='form-control' onChange={handleNumServesChanged} /> 
        </div>
      </form>
      <br></br>
      <button type="button" style={{marginRight: 20}} className="btn btn-light" onClick={handleAddJob}>Add</button>
      <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default JobForm;