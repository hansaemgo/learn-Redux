import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
	const onChange = (e) => {
		onSetDiff(parseInt(e.target.value, 10));
		// e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
	};
	return (
		<div>
			<h1>{number}</h1>
			<input type="number" value={diff} onChange={onChange} />
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
		</div>
	);
}

export default Counter;
