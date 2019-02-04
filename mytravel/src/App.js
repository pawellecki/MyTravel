import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from './store/actions/projectActions'
import Button from "./components/Form/Button/Button"
import './App.css';

class App extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Create a New Project</h5>
          <div>
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div>
            <input type="text" id='content' onChange={this.handleChange} />
            <label htmlFor="title">Project content</label>
          </div>
          <Button title='Create project' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(App)
