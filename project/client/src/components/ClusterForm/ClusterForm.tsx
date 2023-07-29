import { FC, FormEvent, useState } from 'react';
import { Form, Input, Button, Select } from './ClusterForm.styles';

interface ClusterFormProps {
  onSubmit: (cluster: {
    name: string;
    powerHigh: string;
    powerAverage: string;
    powerLow: string;
    energyConsumption: string;
    numServers: string;
    numCores: string;
    numTBsRam: string;
    region: string;
  }) => void;
}


const ClusterForm: FC<ClusterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [powerHigh, setPowerHigh] = useState('');
  const [powerAverage, setPowerAverage] = useState('');
  const [powerLow, setPowerLow] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [numServers, setNumServers] = useState('');
  const [numCores, setNumCores] = useState('');
  const [numTBsRam, setNumTBsRam] = useState('');
  const [region, setRegion] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cluster = { name, powerHigh, powerAverage, powerLow, energyConsumption, numServers, numCores, numTBsRam, region};

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
      <Input name="numCores" placeholder="Number of Cores" type="number" value={numCores} onChange={(e) => setNumCores(e.target.value)} />
      <Input name="numGBsRam" placeholder="Number of GBs of Ram" type="number" value={numTBsRam} onChange={(e) => setNumTBsRam(e.target.value)} />
      <Select name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="" disabled hidden >Datacenter Region</option>
        <option value="East England">East England</option>
        <option value="East Midlands">East Midlands</option>
        <option value="London">London</option>
        <option value="North East England">North East England</option>
        <option value="North Scotland">North Scotland</option>
        <option value="North Wales & Merseyside">North Wales & Merseyside</option>
        <option value="North West England">North West England</option>
        <option value="South East England">South East England</option>
        <option value="South England">South England</option>
        <option value="South Scotland">South Scotland</option>
        <option value="South Wales">South Wales</option>
        <option value="South West England">South West England</option>
        <option value="West Midlands">West Midlands</option>
        <option value="Yorkshire">Yorkshire</option>
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ClusterForm;