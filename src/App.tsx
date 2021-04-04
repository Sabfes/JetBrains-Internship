import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import HomePage from "./Pages/HomePage/HomePage";
import Completed from "./Pages/Completed/Completed";
import AllTodos from "./Pages/AllTodos/AllToodos";
import NotCompletedTodos from "./Pages/NotCompletedTodos/NotCompletedTodos";

function App() {
  return (
    <div>
        <Header />
        <div className={'content'} style={{display: 'flex'}}>
            <Navbar />
            <Switch>
                <Route path={'/AllTodos'} exact component={AllTodos}/>
                <Route path={'/NotCompletedTodos'} exact component={NotCompletedTodos}/>
                <Route path={'/Completed'} exact component={Completed}/>
                <Route path={'/home'} exact component={HomePage}/>
                <Redirect from='/' to='/home'/>
                <Route path={'*'} exact component={NotFoundPage}/>
            </Switch>
        </div>
    </div>
  );
}

export default App;
