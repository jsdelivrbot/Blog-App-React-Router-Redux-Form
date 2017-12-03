import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { formSubmit } from '../actions/index';

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      content: ''
    };
    this.titleChange = this.titleChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
  }

  titleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  categoryChange(e) {
    this.setState({
      category: e.target.value
    });
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit = {this.props.formSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={this.titleChange}
            type="text"
            value={this.state.title}
            className="form-control"
            id="title"
            placeholder="Title of post"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            onChange={this.categoryChange}
            type="text"
            id="category"
            value={this.state.category}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="content">Content</label>
          <textarea
            onChange={this.contentChange}
            name="content"
            value={this.state.content}
            className="form-control"
            id="content"
            cols="30"
            rows="10"
          >
          </textarea>
        </div>
        <button type="submit" className="btn btn-success">Save</button>
        <button type="reset" className="btn btn-danger">Cancel</button>
      </form>
    );
  }
}

// export default connect(null, { posts })(AddPost);
