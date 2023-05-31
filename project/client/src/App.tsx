import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Body from './components/Body';

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
      <Welcome />
      <p>{message}</p>
      <Body />
    </div>
  );
}

export default App;
