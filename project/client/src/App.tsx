import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import ClusterForm from './components/ClusterForm';
import { Layout } from './components/Layout/Layout.styles';

const App: React.FC = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('http://localhost:3001/api');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error:', error);
        setMessage('Error fetching API');
      }
    };
  
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar />
      <Layout> 
        <Welcome />
        <ClusterForm onSubmit={() => console.log("Submitted")} />
        <p>{message}</p>
      </Layout>
    </div>
  );
}

export default App;
