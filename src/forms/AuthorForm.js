import React, { Component } from "react";

import authorStore from "../stores/AuthorStore";

class AuthorForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitAuthor = this.submitAuthor.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input type="text" className="form-control" name="first_name" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input type="text" className="form-control" name="last_name" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input type="text" className="form-control" name="imageUrl" />
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default AuthorForm;
