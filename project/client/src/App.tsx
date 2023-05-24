import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
