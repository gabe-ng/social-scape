import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../redux/actions/authActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class SignIn extends Component {
    state = {
        username: '',
        password: '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            username: this.state.username,
            password: this.state.password,
        }

        this.props.logIn(userData)
            .then(response => {
                if (response.type !== "LOG_IN_ERROR")
                    this.props.history.push("/homepage");
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    render () {
        return <div className="center">
            <div className="card">
              <h2>Login</h2>
              <form onSubmit={this.handleFormSubmit}>
                <input className="form-item" placeholder="Username goes here..." name="username" type="text" onChange={this.handleChange} />
                <input className="form-item" placeholder="Password goes here..." name="password" type="password" onChange={this.handleChange} />
                <input className="form-submit" value="SUBMIT" type="submit" />
              </form>
            </div>
          </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({logIn}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
