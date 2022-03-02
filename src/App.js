import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Content from './component/Content/Content';
import Dialogs from './component/Dialogs/Dialog';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import News from './component/News/News';
import Setting from './component/Setting/Setting';
import Music from './component/Music/Music';


const App = (props) => {
  return ( 
   <BrowserRouter>
     <div className='app-wraper'>    
         <Header/>
         <Nav/>
         <div class='app-wraper-content'>
          <Routes>
            <Route  path='/content' render={ () => <Content/>  }/>
            <Route  path='/dialogs' render={ () => <Dialogs/>} />
            <Route  path=':id' render={ () => <Dialogs/>} />
            <Route  path='/news' render={ () => <News/>} />
            <Route  path='/setting' render={ () => <Setting/>} />
            <Route  path='/music' render={ () => <Music/>} />
           </Routes>
         </div>
      </div>
    </BrowserRouter>);
}

export default App;
