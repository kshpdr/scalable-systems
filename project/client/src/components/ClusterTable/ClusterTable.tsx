import { FC, useEffect } from 'react';
import { Th, Td, Table } from './ClusterTable.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Cluster {
  name: string;
  deadline: string;
  stoppable: string;
  time: number;
  region: string;
  timedwindows: string;
  numservers: number
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
          <Th>Deadline</Th>
          <Th>Stoppable</Th>
          <Th>Time</Th>
          <Th>Region</Th>
          <Th>TimedWindows</Th>
          <Th>NumServers</Th> 
        </tr>
      </thead>
      <tbody>
        {clusters.map(cluster => (
          <tr key={cluster.name}>
            <Td>{cluster.name}</Td>
            <Td>{cluster.deadline}</Td>
            <Td>{cluster.stoppable}</Td>
            <Td>{cluster.time}</Td>
            <Td>{cluster.region}</Td>
            <Td>{cluster.timedwindows}</Td>
            <Td>{cluster.numservers}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  
  );
};

export default ClusterTable;
