import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions'
import Header from '../../components/header/header'
import './login.scss'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: 'abhishek@excellence',
            password: '123456'
        }
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }
    onSubmitLogin(){
        const { email, password } = this.state;
        this.props.userLoginRequest({email: email, password: password, ddid: 0});
    }
    render(){
        console.log(this.props);
        const { email, password } = this.state;
        return(
            <div className='login-view container-fluid'>
                <Header title='Warehouse' />                
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-6 form'>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                                <button onClick={() => this.onSubmitLogin()} >LOGIN</button>
                            </div>
                            <div className='col-sm-3'>
                                <div>
                                    <span className={this.props.login.userLogin.data.token ? 'text-success' : 'none'}>
                                        <strong>LOGGED IN</strong>
                                        <br/><strong>Token:</strong> {this.props.login.userLogin.data.token}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
