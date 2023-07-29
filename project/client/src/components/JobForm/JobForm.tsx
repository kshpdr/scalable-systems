import { FC, SetStateAction, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

<Popup trigger= {<button className="btn btn-info helpbtn"> Help </button>} position="absolute" modal nested>
                <div>
                  <h4>Geben Sie hier ihre Jobdaten ein. Folgende Parameter werden benötigt:</h4> <br></br>
                  <ul>
                    <li><b>Name</b>: Der Name ihres Rechenjobs.</li>
                    <li><b>Deadline</b>: Der Tag bis zu dem ihr Job beendet sein muss </li>
                    <li><b>Stoppable</b>: Kann die Berechnung unterbrochen werden, bitte ankreuzen </li>
                    <li><b>Time</b>: Die geschätzte Laufzeit ihre Jobs in Sekunden &#40;1h = 1800s&#41; </li>
                    <li><b>Number of Servers</b>: Die Anzahl an virtuellen Maschinen, die ihr Job benötigt</li>
                  </ul>
                  <h5>Bitte beachten Sie, alle Felder &#40;bis auf Stoppable&#41; müssen ausgefüllt sein!</h5>
                </div>
</Popup>




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