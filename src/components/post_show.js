import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeletePost() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    if(!this.props.post) {
      return <div>Loading ..</div>;
    }
    return (
      <div>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/">Go back</Link>
        </div>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeletePost.bind(this)}
          >
          Delete post
        </button>
        <h3>{this.props.post.title}</h3>
        <span>{this.props.post.category}</span>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
