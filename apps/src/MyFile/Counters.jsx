import React, { Component } from 'react';
import Counter from "./counter";
import './style.css';

class Counters extends Component {



    render() {
        const { onDelete, onIncrement, onDecrement, onReset } = this.props;
        return (
            <div align="center">

                <button onClick={onReset}>Reset</button>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}

                    />)}

            </div>

        );
    }



}

export default Counters;
