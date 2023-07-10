import { FC } from 'react';
import { Th, Td, Table } from './ClusterTable.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Cluster {
  name: string;
  powerHigh: number;
  powerAverage: number;
  powerLow: number;
  energyConsumption: number;
  numServers: number;
  region: string;
  numCores: number;
  numTBsRam: number;
  auslastung: number;
}

interface ClusterTableProps {
  clusters: Cluster[];
}

const ClusterTable: FC<ClusterTableProps> = ({ clusters }) => {

  return (
   
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Power <br></br> High</Th>
          <Th>Power <br></br> Average</Th>
          <Th>Power <br></br> Low</Th>
          <Th>Energy <br></br> Consumption</Th>
          <Th>Servers</Th>
          <Th>Cores</Th>
          <Th>Ram in TB</Th>
          <Th>Region</Th>
        </tr>
      </thead>
      <tbody>
        {clusters.map(cluster => (
          <tr key={cluster.name}>
            <Td>{cluster.name}</Td>
            <Td>{cluster.powerHigh}</Td>
            <Td>{cluster.powerAverage}</Td>
            <Td>{cluster.powerLow}</Td>
            <Td>{cluster.energyConsumption}</Td>
            <Td>{cluster.numServers}</Td>
            <Td>{cluster.numCores}</Td>
            <Td>{cluster.numTBsRam}</Td>
            <Td>{cluster.region}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  
  );
};

export default ClusterTable;
