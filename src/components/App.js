import React from 'react';
import '../assets/App.css';
import Home from './Home';
import Direct from './Direct';
import Profile from './Profile';
import Explore from './Explore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';
import { DataContext, userData } from '../context/DataContext';
import Login from './Login';
import Signup from './Signup';

function App() {
   return (
      <DataContext.Provider value={userData}>
         <Router>
            <Switch>
               <Route exact path='/'>
                  <>
                     <Header />
                     <Home />
                  </>
               </Route>
               <Route path='/Direct'>
                  <>
                     <Header />
                     <Direct />
                  </>
               </Route>
               <Route path='/Explore'>
                  <>
                     <Header />
                     <Explore />
                  </>
               </Route>
               <Route path='/Profile'>
                  <>
                     <Header />
                     <Profile />
                  </>
               </Route>
               <Route path='/Login' component={Login} />
               <Route path='/Signup' component={Signup} />
               <Route component={NotFound} />
            </Switch>
         </Router>
      </DataContext.Provider>
   );
}

export default App;
