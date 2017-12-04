import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost} from '../actions/index';

// import { formSubmit } from '../actions/index';

class PostNew extends Component {
  renderField(field) {
    const { meta: { touched, error }} = field;
    // const { meta: { touched, error }, name, label, input } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <input
          className="form-control"
          type="text"
          id={field.name}
          // placeholder="Title of post"
          {...field.input}
        />
        <span className="text-help">{touched ? error : ''}</span>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, this.props.history.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Category"
          name="category"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-success">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Please enter title minimum 3 characters long';
  }

  if (!values.category || values.category.length < 3) {
    errors.category = 'Please enter category minimum 3 characters long';
  }

  if (!values.content || values.content.length < 3) {
    errors.content = 'Please enter content minimum 3 characters long';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);
