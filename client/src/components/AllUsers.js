import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllUsers, getUserProfile } from "../redux/actions/userActions";


import "../styles/allUsers.css";
class AllUsers extends Component {
    
    componentDidMount = () => {
        this.props.getAllUsers()
    }

    render () {

        let userList;
        if (this.props.state.users) {
            userList = this.props.state.users.users.map(user => {
            return <div key={user.username} className="user-entries">
                <Link to={`/profile/${user._id}`} >{user.name}</Link>
              </div>;
            })
         } else {
             userList = null;
         }
        return (
            <div className="user-list">
                <h1>My Friends</h1>
                {userList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.userReducer
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllUsers, getUserProfile }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllUsers));