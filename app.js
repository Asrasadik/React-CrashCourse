import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

//component
/* ------------------------------Props-------------------------------------
const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.name}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <h1>Age: {props.age}</h1>
    </>
  )
}
<div className='App'>
	<Person name={'John'} lastName={'Ael'} age={36} />
	<Person name={'Rudy'} lastName={'Grey'} age={10 + 12} />
</div>; 
--------------------------------------------------------*/
const CountText = (props) => {
	return <p>Count Changed to {props.count}</p>;
};
const App = () => {
	const [count, setCount] = useState(0);
	const [isCountChanged, setisCountChanged] = useState(false);
	useEffect(() => {
		setisCountChanged(true);
	}, [count]);
	return (
		<div className='App'>
			<button
				onClick={() => {
					setCount((prevCount) => prevCount - 1);
				}}
			>
				-
			</button>
			<h3>{count}</h3>
			<button
				onClick={() => {
					setCount((prevCount) => prevCount + 1);
				}}
			>
				+
			</button>
			{count !== 0 && <CountText count={count} />}
		</div>
	);
};

export default App;
