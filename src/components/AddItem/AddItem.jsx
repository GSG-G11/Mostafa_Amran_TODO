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
      <div >

        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder="Add task" value={this.state.description} onChange={this.handleChange} />
          <input type="submit" />

        </form>


      </div>

    )

  }
}

export default AddItem;