import React from 'react';
import { Content, StyledButton, Text } from './Homepage.styles';
import { useHistory } from "react-router-dom";
import Welcome from '../Welcome';

const App: React.FC = () => {
  const history = useHistory();

  function navDCs() {
    history.push('/Datacenters');
  }

  function navJobs() {
    history.push('/Jobs');
  }

  return (
    <div>
      <Welcome/> <br/>
      <Content>
        <StyledButton onClick={navDCs}>
          <Text>View Your Datacenters</Text>
        </StyledButton>
        <StyledButton onClick={navJobs}>
          <Text>View Your Jobs</Text>
        </StyledButton>
      </Content>
    </div>
   
  );
}

export default App;
