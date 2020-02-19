// 액션타입 선언
// Ducks패턴을 만들땐 액션의 이름에 접두사 : 다른 모듈과 액션이름이 중복되는 것 방지
const SET_DIFF = 'conter/SET-DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 모듈의 초기상태 작성
const initialState = {
	number: 0,
	diff: 1
};

export default function counter(state = initialState, action) {
	switch (action.type) {
		case SET_DIFF:
			return {
				...state,
				diff: action.diff
			};
		case INCREASE:
			return {
				...state,
				number: state.number + state.diff
			};
		case DECREASE:
			return {
				...state,
				number: state.number - state.diff
			};
		default:
			return state;
	}
}
