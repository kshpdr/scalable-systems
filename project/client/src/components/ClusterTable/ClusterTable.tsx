import { FC, useEffect } from 'react';
import { Th, Td, Table } from './ClusterTable.styles';

interface Cluster {
  id: number;
  name: string;
  powerHigh: number;
  powerAverage: number;
  powerLow: number;
  energyConsumption: number;
  numServers: number;
  location: string;
}

interface ClusterTableProps {
  clusters: Cluster[];
}

const ClusterTable: FC<ClusterTableProps> = ({ clusters }) => {

  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Power High</Th>
          <Th>Power Average</Th>
          <Th>Power Low</Th>
          <Th>Energy Consumption</Th>
          <Th>Num Servers</Th>
          <Th>Location</Th>
        </tr>
      </thead>
      <tbody>
        {clusters.map(cluster => (
          <tr key={cluster.id}>
            <Td>{cluster.id}</Td>
            <Td>{cluster.name}</Td>
            <Td>{cluster.powerHigh}</Td>
            <Td>{cluster.powerAverage}</Td>
            <Td>{cluster.powerLow}</Td>
            <Td>{cluster.energyConsumption}</Td>
            <Td>{cluster.numServers}</Td>
            <Td>{cluster.location}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClusterTable;
