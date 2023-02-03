import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import Menu from './components/Menu/Menu'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Underconstruccion from './components/Underconstruccion/Underconstruccion'
import './app.scss'

function App () {
  return (
    <div className='app'>
      <Topbar></Topbar>
      <div className='sections'>
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
      {/*<Underconstruccion></Underconstruccion>*/}
    </div>
  )
}

export default App
