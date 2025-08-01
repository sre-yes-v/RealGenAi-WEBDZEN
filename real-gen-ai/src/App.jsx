import './App.css'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import HomeMain from './components/ui/HomeMain'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen '>
      <Header/>
      <div className='flex-grow'>
        <HomeMain/>
      </div>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
