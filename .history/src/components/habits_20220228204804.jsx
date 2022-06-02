import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (chabit) => {
    for (let i = 0; i < 2; i++) {
      console.log(this.habits[1].id);
      //if (this.habits.id[i] === chabit.id) {
      //    this.habits.count[i]++;
      //  }
    }
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    console.log(this.habits[1].id);
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
