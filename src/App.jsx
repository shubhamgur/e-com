import './App.css'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRoute from './routes/PageRoute';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {

  return (
    <div className='main'>
     <PageRoute/>
     {/*<Heder/>*/}
     {/*<Item/>*/}
     {/* <Login/>*/}
    </div>
  )
}

export default App
