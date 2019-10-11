import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.page';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'


class App extends Component {

 /*   constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }*/

    unsubsrcibeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubsrcibeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {

                setCurrentUser({ userAuth })
            }
        });
    };

    componentWillUnmount() {
        this.unsubsrcibeFromAuth();
    };

    render() {
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
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);