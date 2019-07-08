import React, { Component } from "react";

import authorStore from "../stores/AuthorStore";

class AuthorForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    imageUrl: "",
    books: []
  };

  onTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitAuthor = event => {
    event.preventDefault();
    authorStore.addAuthor(this.state);
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitAuthor}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={this.onTextChange}
            />
          </div>
          <input type="submit" /> <br />
        </form>
        <h5>{authorStore.statusMessage}</h5>
      </div>
    );
  }
}

export default AuthorForm;
