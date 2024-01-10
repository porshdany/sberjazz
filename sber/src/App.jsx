import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {sha256} from "js-sha256"
import CryptoJS from 'crypto-js'
import AES from 'crypto-js/aes';
import { createSdkToken } from './sdkToken' 

const bca = async (setToken) => { 
let abc = await createSdkToken(sdkKey, {
  expireIn: 3600*24*30*10000, 
})
setToken(abc)
return abc
}
let sdkKey = "eyJwcm9qZWN0SWQiOiIxNDcwMTUwNy00OTlkLTQ1M2MtOTQ1Ni0xZjRiZDYyZjg5N2MiLCJrZXkiOnsia3R5IjoiRUMiLCJkIjoidl9iTTZGSUIxcThIcldHOVM3ajBTeW9iRmotQXdfT0o0Mko3WjJxM1NvcDVRYXE0TURKZXV4ajlRS19URm1TTCIsInVzZSI6ImVuYyIsImNydiI6IlAtMzg0Iiwia2lkIjoiZjlhN2Y1NmEtNTRjMS00MWE5LWJiOTktZTUzZWQ4ZTczMDM5IiwieCI6IlZuQ1Bna3hiMmo3d05GNGZtX2prcktFTm1renhhZm5yemtZRV9nOWUzanpRcHpEWGdtWkE1WURGa0t3SlJVVHIiLCJ5IjoiLXpmQnMxYzZtQXo0dDhsOUE2R1Y5TjlScUctUDhIWDZzWHR3YldkMFZFSy1Xa1BuY0Zhc3FLXzQwRWFQUmpZXyJ9fQ=="
function App() {
  const[token, setToken] = useState(null)
  useEffect(() => { bca(setToken)
    // let key = parseKey(sdkKey);
    // const algorithm = recognizeAlgorithm(sdkKey);
    // const payload  = {
    //   iat: Date.now(),
    //   exp: Date.now() + 3600*24*30,
    //   jti: uuid.v4(),
    //   sdkProjectId: algorithm.projectId,
    //   iss, // для логов. Не больше 100 символов.
    //   sub, // Идентификатор пользователя в пространстве B2B сервиса
    //   userName: userName, // опционально, для отображения в комнате
    //   userEmail: userEmail, // опционально
    // };
  }, [])
console.log(token)

return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {token?.sdkToken}
        
        
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
