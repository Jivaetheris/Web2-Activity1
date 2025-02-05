import Profile from './components/Profile'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Workexp from './components/Workexp'
function App() {

  return (
    <>
      <div className='h-14 bg-linear-to-t from-slate-400 to-sky-50 min-h-screen'>
        <Profile/>
        <Contact 
          email="jibrilmaristela1@gmail.com" 
          phone="991-223-7404" 
          address="F. Imperial St., Brgy 35. Tinago, Legazpi City"/>

        <Skills/>
        <Workexp/>
      </div>
      
    </>
  )
}

export default App
