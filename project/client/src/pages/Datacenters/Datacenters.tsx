import React, { useEffect, useState } from 'react';
import ClusterForm from '../../components/ClusterForm';
import ClusterTable from '../../components/ClusterTable';
import { Content, ContentBlock } from './Datacenters.styles';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

  const handleDelete = async (name: string) => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/deleteCluster/${name}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchClusters();
        } else {
            throw new Error('HTTP error ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <ContentBlock>
      <Popup trigger= {<button className="btn btn-info infobtn"> Info </button>} modal nested>
                    <div>
                      <h5>Momentan steht der Service nur für Großbritannien zur Verfügung.</h5>
                      Bitte passen Sie die benötigte Rechenleistung &#40;Number of Servers&#41; 
                      in der Jobview entsprechend der in Ihrer gewählten Region zur Verfügung stehenden Rechenleistung an, 
                      um eine Überschreitung der verfügbaren Rechenleistung zu vermeiden. 
                    </div>
      </Popup> 
      <Content>
        <ClusterForm onSubmit={handleSubmit} />
        <ClusterTable clusters={clusters} />
      </Content>
    </ContentBlock>
  );
}

export default App;
