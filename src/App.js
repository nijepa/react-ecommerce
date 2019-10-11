import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.page';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubsrcibeFromAuth = null;

    componentDidMount() {
        this.unsubsrcibeFromAuth = auth.onAuthStateChanged(async userAuth => {
            //this.setState({ currentUser: user });
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id:snapShot.id,
                            ...snapShot.data()
                        }
                    });
                    console.log(this.state)
                });
            } else {
                this.setState({
                    currentUser: userAuth
                })
            }


            //console.log(userAuth)
        });
    };

    componentWillUnmount() {
        this.unsubsrcibeFromAuth();
    };

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInUpPage} />
                </Switch>
            </div>
        );
    }

}

export default App;