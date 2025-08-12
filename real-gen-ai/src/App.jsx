import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import HomePage from './components/ui/HomePage'
import ImageGenPage from './components/ui/ImageGenPage'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate" element={<ImageGenPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App