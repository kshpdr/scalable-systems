import React from 'react';
import { Content } from './Jobs.styles';
import JobForm from '../../components/JobForm/JobForm';
import JobTable from '../../components/JobTable/JobTable';

const App: React.FC = () => {
  
  return (
    <div>
      <Content>
        <JobForm onSubmit={() => {}} />
        <JobTable jobs={[]} />
      </Content>
    </div>
  );
}

export default App;
