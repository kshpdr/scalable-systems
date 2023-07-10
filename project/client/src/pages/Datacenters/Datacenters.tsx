import React, { useEffect, useState } from 'react';
import ClusterForm from '../../components/ClusterForm';
import ClusterTable from '../../components/ClusterTable';
import { Content } from './Datacenters.styles';

const App: React.FC = () => {
  const [clusters, setClusters] = useState([]);

  const fetchClusters = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/clusters`)
      const data = await response.json();
      setClusters(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = async (cluster: {
    name: string;
    powerHigh: string;
    powerAverage: string;
    powerLow: string;
    energyConsumption: string;
    numServers: string;
    numCores: string;
    numTBsRam: string;
    region: string;
  }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/addCluster`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cluster),
      });
      console.log(cluster)

      console.log(response.status, response.statusText)

      if (response.ok) {
        fetchClusters(); 
      } else {
        throw new Error('HTTP error ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    fetchClusters();
  }, []);

  return (
    <div>
      <Content>
        <ClusterForm onSubmit={handleSubmit} />
        <ClusterTable clusters={clusters} />
      </Content>
    </div>
  );
}

export default App;
