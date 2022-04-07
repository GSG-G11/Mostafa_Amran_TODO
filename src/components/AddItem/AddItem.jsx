import React, { Component } from 'react';

class AddItem extends Component {


  state = {
    description: ''
  }



  handleChange = (e) => {
    this.setState({ description: e.target.value });

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ description: '' });
  }


  render() {
    return (
      <div className='divForm'>

        <form onSubmit={this.handleSubmit}>
        <h1>To Do App</h1>


          <input type="text" placeholder="Add task" value={this.state.description} onChange={this.handleChange} className='input-text'/>
          <input type="submit" className='button'/>

        </form>


      </div>

    )

  }
}

export default AddItem;