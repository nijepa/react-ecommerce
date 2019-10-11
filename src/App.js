import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.page';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInUpPage} />
        </Switch>
    </div>
  );
}

export default App;