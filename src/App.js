import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Content from './component/Content/Content';
import Dialogs from './component/Dialogs/Dialog2';
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
            <Route  path='/content' element={<Content posts={props.posts}/>} />
            <Route  path='/dialogs' element={<Dialogs dialog={props.dialog} messages={props.messages} />} />
            <Route  path='/dialogs/:userId' element={<Dialogs />}/>
            <Route  path='/news' element={<News/>} />
            <Route  path='/setting' element={<Setting/>} />
            <Route  path='/music' element={<Music/>} />
           </Routes>
         </div>
      </div>
    </BrowserRouter>);
}

export default App;
