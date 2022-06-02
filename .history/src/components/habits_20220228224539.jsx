import React, { Component } from "react";
import Habit from "./habit";
import HabbitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handelAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabbitAddForm onAdd={this.handelAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
