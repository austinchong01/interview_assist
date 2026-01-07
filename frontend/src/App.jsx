import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api'

function App() {
  const [message, setMessage] =  useState("");
  
  useEffect(() => {
    const testBackend = async () => {
      const result = await api.test();
      if (result.success) setMessage(result.data);
    };
    testBackend();
  }, []);

  return (
    <>
      <div>
        {message}
      </div>
    </>
  )
}

export default App
