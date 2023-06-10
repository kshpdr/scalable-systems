import { FC, FormEvent, useState } from 'react';
import { Form, Input, Button } from './ClusterForm.styles';

interface ClusterFormProps {
  onSubmit: (data: any) => void;
}

const ClusterForm: FC<ClusterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [powerHigh, setPowerHigh] = useState('');
  const [powerAverage, setPowerAverage] = useState('');
  const [powerLow, setPowerLow] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [numServers, setNumServers] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, powerHigh, powerAverage, powerLow, energyConsumption, numServers, location });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" placeholder="Cluster Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input name="powerHigh" placeholder="Power High" type="number" value={powerHigh} onChange={(e) => setPowerHigh(e.target.value)} />
      <Input name="powerAverage" placeholder="Power Average" type="number" value={powerAverage} onChange={(e) => setPowerAverage(e.target.value)} />
      <Input name="powerLow" placeholder="Power Low" type="number" value={powerLow} onChange={(e) => setPowerLow(e.target.value)} />
      <Input name="energyConsumption" placeholder="Energy Consumption" type="number" value={energyConsumption} onChange={(e) => setEnergyConsumption(e.target.value)} />
      <Input name="numServers" placeholder="Number of Servers" type="number" value={numServers} onChange={(e) => setNumServers(e.target.value)} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ClusterForm;
