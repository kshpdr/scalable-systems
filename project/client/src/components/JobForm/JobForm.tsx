import { FC, FormEvent, SetStateAction, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


interface JobFormProps {
  onSubmit: (job: {
    name: string;
    deadline: string;
    stoppable: string;
    time: string;
    numservers: string 
  }) => void;
}


const JobForm: FC<JobFormProps> = ({ addJob }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState(''); 
  const [stoppable, setStoppable] = useState(''); 
  const [time, setTime] = useState('');
  const [numservers, setNumServers] = useState(''); 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const job = { name, stoppable, deadline, time, numservers };

    onSubmit(job);
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

  const handleStoppableChanged = (e: { target: { value: string | ((prevState: string) => string); }; }) => {
    setStoppable(e.target.value) 
  };

  const handleTimeChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTime(e.target.value) 
  }; 

  const handleNumServesChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNumServers(e.target.value) 
  }; 

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Name:</label>
            <input type="text" className='form-control' value={name} onChange={handleNameChanged}/>
        </div>

        <div className='form-group'>
          <label>Deadline:</label>
          <input type="date" className='form-control' value={deadline} onChange={handleDeadlineChanged} />
        </div>

        <div className='form-group'>
          <label>
            Stoppable:
          </label>
          <br></br>
          <input className="form-check-input" type="checkbox" value="" onChange={handleStoppableChanged} /> Yes 
          <br></br>
          <input className="form-check-input" type="checkbox" value="" onChange={handleStoppableChanged} /> No 
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
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  );
};

export default JobForm;