import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
	return (
		<Counter
			number={number}
			diff={diff}
			onIncrease={increase}
			onDecrease={decrease}
			onSetDiff={setDiff}
		/>
	);
}

const mapStateToProps = (state) => ({
	number: state.counter.number,
	diff: state.counter.diff
});

// const mapDispatchToProps = (dispatch) => ({
// 	onIncrease: () => dispatch(increase()),
// 	onDecrease: () => dispatch(decrease()),
// 	onSetDiff: (diff) => dispatch(setDiff(diff))
// });

//mapdispatchtoprops 가 함수가 아니라 객체이면  bine~ 없어도 동작
const mapDispatchToProps = {
	increase,
	decrease,
	setDiff
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
