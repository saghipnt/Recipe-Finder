import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
const [data, setData] = useState<String>("")
axios.get('http://localhost:8080/api/hello').then(response => {
  console.log(response);
  setData(response.data);
});
  return (
    <>
      <div>
      {data}
      </div>
    </>
  )
}

export default App
