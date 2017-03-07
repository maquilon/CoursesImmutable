import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from '../components/common/notificationSystem';
import Header from './common/Header';
import Footer from './common/Footer';
import CourseActions  from  '../actions/actionCreators';

class Main extends Component {

    componentWillMount() {
        this.props.dispatch(CourseActions.loadAuthorsAsync());
    }   

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {React.cloneElement({...this.props}.children, {...this.props})}
                </div>
                <Footer />
                <Notification />                
            </div>
        );
    }
}

Main = connect()(Main);
export default Main;