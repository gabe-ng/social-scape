import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPost, editPost } from "../../redux/actions/postActions";


class EditPostForm extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    this.props.getPost(this.props.postId)
      .then(res => {
        console.log(res);
        this.setState({
          title: res.title,
          body: res.body,
        })
      })
  }
  
  handlePostEdit = (e) => {
    e.preventDefault();

    let update = { 
      title: this.state.title,
      body: this.state.body,
    }

    this.props.editPost(this.props.postId, update)
      .then(res => {
        this.props.cancel();
      })
      .catch(err => console.log(err))
  }

  render() {
    let placeholder = this.state.body;
    return (
      <div>
        <div className="card">
          <h2>Edit Post</h2>
          <form onSubmit={this.handlePostEdit}>
            <input className="form-item form-title" defaultValue={this.state.title} name="title" type="text" onChange={this.handleChange} />
            <textarea className="form-item form-text" value={placeholder} name="body" onChange={this.handleChange}></textarea>
            <input className="form-submit" value="Submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPost, editPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(EditPostForm);
