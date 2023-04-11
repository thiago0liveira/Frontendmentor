import QrCode from "./pages/Newbie/QrCode/QrCode"

import {
  Routes,
  Route
} from 'react-router-dom'
import Pages from "./pages/Pages"
import Sunnyside from "./pages/Junior/Sunnyside/Sunnyside"

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/*"  element={<Pages />} />
        <Route exact path="/Newbie/QrCode" element={<QrCode />} />
        <Route exact path="/Junior/Sunnyside" element={<Sunnyside />} />
      </Routes>
    </div>
  )
}

export default App
