import { FC, FormEvent, SetStateAction, useState } from 'react';
import { Form, Input, Button } from './ClusterForm.styles';
import 'bootstrap/dist/css/bootstrap.min.css';


interface ClusterFormProps {
  onSubmit: (cluster: {
    name: string;
    deadline: string;
    stoppable: string;
    time: string;
  }) => void;
}


const ClusterForm: FC<ClusterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState(''); 
  const [stoppable, setStoppable] = useState(''); 
  const [time, setTime] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cluster = { name, stoppable, deadline, time };

    onSubmit(cluster);
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


  return (
<form onSubmit={handleSubmit}>

<div className='form-group'>
      <label>Name:</label>
      <input type="text" className='form-control' value={name} onChange={handleNameChanged}
      />
    </div>

<div className='form-group'>
<label>Deadline:</label>
      <input type="date" className='form-control' value={deadline} onChange={handleDeadlineChanged}
      />
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
      <input type="text" value={time} className='form-control' onChange={handleTimeChanged}
      />
</div>


</form>


  );
};

export default ClusterForm;