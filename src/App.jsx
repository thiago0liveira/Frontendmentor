import QrCode from "./pages/Newbie/QrCode/QrCode"

import {
  Routes,
  Route
} from 'react-router-dom'
import Newbie from "./pages/Newbie/Newbie"

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Newbie />} />
        <Route exact path="/Newbie/QrCode" element={<QrCode />} />
      </Routes>
    </div>
  )
}

export default App
