import React from 'react'
import Auth from './pages/Auth/index'
import {Route} from 'react-router-dom'
import { Home } from './pages';

function App() {
  return (
    <div className="wrapper">
       
      <Route exact path={["/","/login","/register"]} component={Auth}/>
     <Route exact path="/im" component={Home}/>
    </div>
  );
}

export default App;
    