import React, { Component } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoItems from "./components/TodoItems/TodoItems";
import './App.css';
import './components/AddItem/AddItem.css'
import './components/TodoItems/TodoItems.css'


class App extends Component {

  state = {
    items: [
      { id: 1, description: 'hello this is amran', done: false },
      { id: 2, description: 'hello this is mostafa', done: false },
      { id: 3, description: 'hello my friend', done: false },

    ]
  }



  addItem = (item) => {
    const { items } = this.state;
    item.id = Date.now();
    item.done = false;

    items.push(item)
    this.setState({ items })

  }

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };




  render() {
    console.log(this.state);
    const { items } = this.state;
    return (
      <div>
        <AddItem addItem={this.addItem} />

        <TodoItems  items = {items} deleteItem ={this.deleteItem}/>




      </div>





    );
  }
}

export default App;
