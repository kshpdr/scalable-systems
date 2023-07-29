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
                      Wir benötigen Angaben über die von ihnen verfügbare Rechenleistung &#40;Number of Servers&#41; in einer der 14 Regionen.
                      Bitte fügen sie entsprechend Datenzentren hinzu.
                      Dabei sind nur die Region und die Number of Servers relevant für unseren scheduling Algorithmus.
                      Die restlichen Parameter können zukünftige Usecases unterstützen.
                      <br></br>
                      Wir brauchen eine Basismenge von Rechenzentren, um die sauberste Region gewährleisten zu können.
                    </div>
      </Popup> 
      <Content>
        <ClusterForm onSubmit={handleSubmit} />
        <ClusterTable clusters={clusters} onDelete={handleDelete} />
      </Content>
    </ContentBlock>
  );
}

export default App;
