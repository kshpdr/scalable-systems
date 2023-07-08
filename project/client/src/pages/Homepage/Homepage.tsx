import React, { useEffect, useState } from 'react';
import { Content, Button } from './Homepage.styles';
import { useHistory } from "react-router-dom";
import dcs from "../../images/datacenters.jpg"
import jobs from "../../images/jobs.jpg"

const App: React.FC = () => {
  const history = useHistory();

  function navDCs() {
    history.push('/Datacenters');
  }

  function navJobs() {
    history.push('/Jobs');
  }

  return (
    <div className='container'>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', alignContent: 'center', marginTop: '8%'}}>
        <Content>
          <Button style={{flexDirection: 'column', alignItems: 'center', border: '3px solid',}}><img src={dcs} width={650} height={350} onClick={navDCs} /><text>View Your Datacenters</text></Button>
          <Button style={{flexDirection: 'column', alignItems: 'center', border: '3px solid',}}><img src={jobs} width={650} height={350} onClick={navJobs} /><text>View Your Jobs</text></Button>
        </Content>
      </div>
    </div>
  );
}

export default App;
