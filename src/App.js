import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Content from './component/Content/Content';
import Dialogs from './component/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import News from './component/News/News';
import Setting from './component/Setting/Setting';
import Music from './component/Music/Music';

const App = (props) => {
  debugger;
  return (
    <div className='app-wraper'>
      <Header />
      <Nav />
      <div class='app-wraper-content'>
        <Routes>
          <Route path='/content' element={<Content state={props.state.contentPage} addPost={props.addPost} />} />
          <Route
            path='/dialogs'
            element={<Dialogs state={props.state.messagesPage} state={props.state.messagesPage} />}
          />
          <Route
            path='/dialogs/:userId'
            element={<Dialogs state={props.state.messagesPage} state={props.state.messagesPage} />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
