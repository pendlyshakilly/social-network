import logo from './logo.svg';
import './App.css';
import react from 'react';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Content from './component/Content/Content';
import Dialogs from './component/Dialogs/Dialog';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import News from './component/News/News';
import Setting from './component/Setting/Setting';
import Musik from './component/Music/Music';


const App = (props) => {
  return ( 
   <BrowserRouter>
     <div className='app-wraper'>    
         <Header/>
         <Nav/>
         <div class='app-wraper-content'>
          <Routes>
            <Route  path='/content' element={<Content/>}/>
            <Route  path='/dialogs' element={<Dialogs/>}/>
            <Route  path='/news' element={<News/>}/>
            <Route  path='/setting' element={<Setting/>}/>
            <Route  path='/music' element={<Musik/>}/>
           </Routes>
         </div>
      </div>
    </BrowserRouter>);
}

export default App;
