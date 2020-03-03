import React from 'react';
import {HashRouter as Router,Swich,Route,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
         <Router>
           <Link to='/'>HomePage</Link>
           <Link to='/page2'>2</Link>
           <Swich>
             <Route exact path='/' component={()=>{return <h1>homepage</h1>}}/>
             <Route exact path='/page2' component={()=>{return <h1>2</h1>}}/>
           </Swich>
         </Router>
    </div>
  );
}

export default App;
