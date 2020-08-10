import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//Pages
import Home from './home';

//Global Styling
import './index.css';
import NavBar from './components/NavBar';

const Index = ({ user }) => {
    return (
        <>
            <NavBar />
            <div className='page-content'>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Index);
