
import Nav  from './Components/layout/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbaord from './Components/layout/Dashbaord';

function App() {
  return (<div>
    
     <Nav/>
    <div className='container'><Dashbaord/></div>
    </div>
  
  );
}

export default App;
