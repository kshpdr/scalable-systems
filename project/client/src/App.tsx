import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import ClusterForm from './components/ClusterForm';
import { Layout } from './components/Layout/Layout.styles';
import ClusterTable from './components/ClusterTable';
import { Content } from './App.styles';

const App: React.FC = () => {
  const [clusters, setClusters] = useState([]);

  const fetchClusters = async () => {
    try {
      const response = await fetch('http://server:3001/clusters');
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
    location: string;
  }) => {
    try {
      const response = await fetch('http://server:3001/addCluster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cluster),
      });
      console.log(cluster)

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
      <Navbar />
      <Layout>
        <Welcome />
        <Content>
          <ClusterForm onSubmit={handleSubmit} />
          <ClusterTable clusters={clusters} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
