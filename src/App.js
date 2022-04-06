import React, { Component } from "react";
import AddItem from "./components/AddItem/AddItem";
import './App.css';

class App extends Component {

  state = {
    items: [
      { id: 1, description: 'hello 1', done: false },
      { id: 2, description: 'hello 2', done: false },
      { id: 3, description: 'hello 3', done: false },

    ]
  }



  addItem = (item) => {
    const { items } = this.state;
    item.id = Date.now();
    item.done = false;

    items.push(item)
    this.setState({ items })

  }




  render() {
    console.log(this.state);
    const { items } = this.state;
    return (
      <div>
        <AddItem addItem={this.addItem} />
      </div>




    );
  }
}

export default App;
