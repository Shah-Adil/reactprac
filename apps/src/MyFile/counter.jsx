

const Counter = (props) => {
  return (


    <div>

      <span>{props.counter.value}</span>
      <button onClick={() => props.onIncrement(props.counter)}>+</button>
      <button onClick={() => props.onDecrement(props.counter)}>-</button>
      <button onClick={() => props.onDelete(props.counter.id)}>X</button>
    </div>




  );
}




export default Counter;

