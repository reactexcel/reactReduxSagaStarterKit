import React from 'react'
import Header from '../../components/header/header'
import './homeView.scss'

class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className='homeView container-fluid'>
                <Header />
                <div className='row'>
                    <a href='#/login'>
                        <span> React Redux Saga Starter kit</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default HomeView;
