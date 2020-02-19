import { createStore } from 'redux';

// 리덕스에서 관리할 상태를 정의해 준다 (상태 초기값)
const initialState = {
	counter: 0,
	text: '',
	list: []
};

// 액션 타입 상수 4가지
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 화살표 함수로 만들면 return 생략 가능
// 액션 생성함수는 주로 camelCase 로 작성합니다.
// 액션 객체에는 type 값이 필수입니다.
// function increase() {
// 	return {
// 		type: INCREASE
// 	};
// }

const increase = () => ({
	type: INCREASE
});

const decrease = () => ({
	type: DECREASE
});

const changeText = (text) => ({
	type: CHANGE_TEXT,
	text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = (item) => ({
	type: ADD_TO_LIST,
	item
});

// 리듀서 작성
function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				counter: state.counter + 1
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter - 1
			};
		case CHANGE_TEXT:
			return {
				...state,
				text: action.text
			};
		case ADD_TO_LIST:
			return {
				...state,
				list: state.list.concat(action.item)
			};
		default:
			return state;
	}
}

// 스토어 만들기
const store = createStore(reducer);
// 현재 스토어 안에 있는 상태 조회 (초기상태)
console.log(store.getState());

// 구독

const listener = () => {
	const state = store.getState();
	console.log(state);
};

const unsubscribe = store.subscribe(listener);
//구독해재 원할때
// unsubscribe();

// dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
