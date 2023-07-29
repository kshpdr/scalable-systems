import React from 'react';
import { Content, ContentBlock, StyledButton, Text } from './Homepage.styles';
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
    <ContentBlock>
      <Welcome/> <br/>
      <Content>
        <StyledButton onClick={navDCs}>
          <Text>View Your Datacenters</Text>
        </StyledButton>
        <StyledButton onClick={navJobs}>
          <Text>View Your Jobs</Text>
        </StyledButton>
      </Content>
    </ContentBlock>
   
  );
}

export default App;
