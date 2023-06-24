import { FC, FormEvent, useState } from 'react';
import { Form, Input, Button } from './ClusterForm.styles';

interface ClusterFormProps {
  onSubmit: (cluster: {
    name: string;
    powerHigh: string;
    powerAverage: string;
    powerLow: string;
    energyConsumption: string;
    numServers: string;
    location: string;
    region: string;
    numCores: string;
    numTBsRam: string;
  }) => void;
}


const ClusterForm: FC<ClusterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [powerHigh, setPowerHigh] = useState('');
  const [powerAverage, setPowerAverage] = useState('');
  const [powerLow, setPowerLow] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [numServers, setNumServers] = useState('');
  const [location, setLocation] = useState('');
  const [region, setRegion] = useState('');
  const [numCores, setNumCores] = useState('');
  const [numTBsRam, setNumTBsRam] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cluster = { name, powerHigh, powerAverage, powerLow, energyConsumption, numServers, location, region, numCores, numTBsRam };

    onSubmit(cluster);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" placeholder="Cluster Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input name="powerHigh" placeholder="Power High" type="number" value={powerHigh} onChange={(e) => setPowerHigh(e.target.value)} />
      <Input name="powerAverage" placeholder="Power Average" type="number" value={powerAverage} onChange={(e) => setPowerAverage(e.target.value)} />
      <Input name="powerLow" placeholder="Power Low" type="number" value={powerLow} onChange={(e) => setPowerLow(e.target.value)} />
      <Input name="energyConsumption" placeholder="Energy Consumption" type="number" value={energyConsumption} onChange={(e) => setEnergyConsumption(e.target.value)} />
      <Input name="numServers" placeholder="Number of Servers" type="number" value={numServers} onChange={(e) => setNumServers(e.target.value)} />
      <Input name="location" placeholder="Precise Datacenter Location" type={name} value={location} onChange={(e) => setLocation(e.target.value)} />
      <Input name="region" placeholder="Datacenter Region" type={name} value={region} onChange={(e) => setRegion(e.target.value)} />
      <Input name="numCores" placeholder="Number of Cores" type="number" value={numCores} onChange={(e) => setNumCores(e.target.value)} />
      <Input name="numGBsRam" placeholder="Number of GBs of Ram" type="number" value={numTBsRam} onChange={(e) => setNumTBsRam(e.target.value)} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ClusterForm;
