import { FC, useEffect } from 'react';
import { Th, Td, Table } from './ClusterTable.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Cluster {
  name: string;
  deadline: string;
  stoppable: string ;
  time: number;
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
          <Th>Name</Th>
          <Th>Deadline</Th>
          <Th>Stoppable</Th>
          <Th>Time</Th>
          <Th>Location</Th>
          <Th>?</Th>
          <Th>?</Th> 
        </tr>
      </thead>
      <tbody>
        {clusters.map(cluster => (
          <tr key={cluster.name}>
            <Td>{cluster.name}</Td>
            <Td>{cluster.deadline}</Td>
            <Td>{cluster.stoppable}</Td>
            <Td>{cluster.time}</Td>
            <Td>{cluster.location}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  
  );
};

export default ClusterTable;
