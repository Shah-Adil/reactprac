import React, { Component } from 'react';
import Counters from "./MyFile/Counters";
import Nav from "./MyFile/nav";
import Movie from "./movieTable/Movie";
import MovieFile from "./movieTable/MovieFile";

class App extends Component {
  state = {
    counters: [
      { id: '1', value: 2, sel: 5 },
      { id: '2', value: 6 },
      { id: '3', value: 3 },
      { id: '4', value: 0 }
    ],
    MoviesFile: MovieFile()
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c
    })
    this.setState({ counters })
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0)
      counters[index].value--;
    this.setState({ counters });
  };


  render() {
    return (

      <div>
        <Nav counters={this.state.counters.filter(c => c.value > 0).length} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />


        <Movie />


      </div>

    );
  }
}

export default App;