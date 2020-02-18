import { createStore } from 'redux';

// 상태 초기값 설정 3가지
const initialState = {
	counter: 0,
	text: '',
	list: []
};

// 액션 타입 상수 4가지
const INCRESE = 'INCREASE';
const DCREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수 만들기 함수이름은 소문자 (type은 대문자)
// 화살표 함수로 만들면 return 생략 가능

/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성합니다.
function increase() {
	return {
		type: INCREASE // 액션 객체에는 type 값이 필수입니다.
	};
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
// 이렇게 쓰는 것을 추천합니다.
const decrease = () => ({
	type: DECREASE
});
