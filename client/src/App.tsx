import { useState } from 'react';
import { Button } from 'antd';
import { authApi } from './api/auth';

function App() {
  const [data, setData] = useState<string | undefined>();

  const loginHandler = async () => {
    const res = await authApi.login();
    setData(res);
  };
  return (
    <div>
      <Button onClick={loginHandler} type="primary">
        Login
      </Button>
      <div>{data}</div>
    </div>
  );
}

export default App;
