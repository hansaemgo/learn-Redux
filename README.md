# Learn Redux

### 1. 리덕스에서 사용되는 키워드 숙지하기

1. 액션(Action)
    - 상태에 어떤 변화가 필요할때 액션 발생 시키며 하나의 객체로 표현된다.
    - type값은 필수적으로 가지고 있어야 한다.
    - 업데이트를 해야할때 어떻게 업데이트를 해야할지 정의하는 함수
2. 액션 생성함수(Action Creator)
    - 액션을 만드는 함수 파라미터를 받아와서 액션객체 형태로 만들어준다.
    - 화살표 함수로도 만들 수 있다
3. 리듀서(Reducer)
    - 변화를 일으키는 함수로 두가지 파라미터를 가져온다 (state, action)
    - 불변성을 유지해 줘야 한다.
    - 리덕스의 default 부분은 기존 state를 그대로 반환하도록 작성한다.
    - 상태를 바꿔주는 함수
4. 스토어(Store)
    - 한 애플리케이션당 하나의 스토어를 만들게 된다.
    - 현재의 앱 상태와 리듀서가 들어가있으며 추가적 내장함수가 몇가지 있다.
        1. 디스패치(Dispatch)
            - 액션을 발생시키는 것, 액션을 스토어에게 전달해 주는 것
            - dispatch(action) 형태로 액션을 파라미터로 전달
        2. 구독 (Subscribe)
            - 스토어의 내장 함수 중 하나
            - 디스패치로 액션이 발생되서 상태가 업데이트 되었을때 특정함수를 호출시킬 수 있다.

### 2. 리덕스의 3가지 규칙

1. 하나의 애플리케이션 안에는 하나의 스토어가 있다.
2. 상태는 읽기전용 (불변성을 지켜줘야 한다) [ 사용가능 배열 내장함수 - concat, map, filter, slice ]
3. 변화를 일으키는 함수 리듀서는 순수한 함수여아 한다.
    - 똑같은 파라미터로 호출된 리듀서 함수는 똑같은 결과값을 반환해야 한다.
    - 사용 불가능 [ new Date(), Math.random(), axios.get() axios(비동기) ]
    - 밖에 있는 변수에 의존하는 것도 안된다.

### 3. 리덕스 사용할 준비하기

1. import { createStore } from 'redux'
    - createStore : 스토어 만들어주는 함수
2. 리덕스에서 관리할 상태를 정의해 준다 (상태 초기값)
    - cosnt initialState = { conter : 0, text : '', list: []}
3. 액션타입 정의(액션타입 상수정의 )
    - 액션타입은 주로 대문자로 작성한다.
4. 액션생성함수정의
    - 주로 camelCase로 작성 액션 객체에는 type값이 필수!!
5. 리듀서 작성
    - 액션 생성함수를 통해 만들어진 객체를 참조하여 새로운 상태를 만드는 함수를 만든다
    - 리듀서에서는 불변성을 꼭 지켜줘야 한다
    - state = initialState 초기값 설정
6. 스토어 만들기
    - const store = createStore(reducer); 현재 store안에 있는 초기상태 조회
7. 구독
    - 스토어 안에 들어가있는 상태 바뀔때마다 호출되는 listener 함수
    - 구독해제 하고 싶을 때 : unsubscribe(); 호출
8. 디스패치
    - 액션이 디스패치 될 때마다 상태가 바뀌고 콘솔에 출력되는 것 확인

### 4. 리덕스 모듈 만들기

    - 리덕스 모듈 : 액션타입, 액션 생성함수 리듀서 가 들어있는 자바스크립트 파일
    - Ducks 패턴 (한파일에 다 들어있는) 으로 만들어서 작성하기

        1. 액션타입 선언
            - Ducks패턴을 만들땐 액션의 이름에 접두사 : 다른 모듈과 액션이름이 중복되는 것 방지 (counter/SET_DIFF)
        2. 액션 생성 함수
            - 액션 생성함수 만들고 export로 내보내서 사용
        3. 초기상태 선언
            - 꼭 객체 타입이 아니어도 상관 없음 (배열, 숫자, 문자, 블리언)
        4. 루트 리듀서 만들기
            - 모듈 폴더 내에 만든 두개를 하나로 합쳐 사용 => 루트리듀서 만들기
            - 리덕스 내장함수인 combineReducers 사용
        5. 리액트 프로젝트에 리덕스 적용
            - const store = createStore(rootReducer); 스토어 만들기
            - index.js 에서 Provider불러와서 App컴포넌트 감싸기
            - Props 는 store <Provider store={store}><App /></Provider>

### 5. 카운터 구현하기

1. 프레젠테이셔털 컴포넌트
    - 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 Props로만 받아와서 사용하는 컴포넌트
    - Counter 컴포넌트 (e.target.value 의 타입은 문자열이기 때문에 숫자로 변환)
    - 프레젠테이셔널 컴포넌트에서는 주로 UI선언하는 것에 집중 필요한 값이나 함수는 Props로 방아와서 사용하는 형태로 구현
2. 컨테이너 컴포넌트
    - 리덕스 스토어의 상태를 조회하거나 액션을 디스패치 할 수 있는 컴포넌트 의미
    - HTML 태그 사용하지 않고 다른 프레젠테이셔널 컴포넌트 불러와서 사용

### 6. 리덕스 개발자 도구

1. 설치
    - yarn add redux-devtools-extension
    - index.js 수정
    - composeWithDevTools 추가

### 7. 할 일 목록 구현

-   프리젠테이셔널 컴포넌트 구현 ( TodoItem, TodoList, Todos )
-   여러가지 컴포넌트를 만드는 이유 : 컴포넌트의 리렌더링 성능 최적화
-   컨테이너 컴포넌트 구현 (TodosContainer.js)
-   e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지

### 8. React.memo

-   컴포넌트 최적화를 위하여 React.memo 를 사용한다
-   React Dev Tools > Profiler > start profiling
    1. 회색 : 렌더링 되지 않음
    2. 노란색 & 주황색 & 초록색: 렌더링 되었음 (초록색은 렌더링 빠름)
-   ex) 현재 TodoList 와 TodoItem은 리렌더링 될 필요가 없으므로 최적화 하는 것이 좋음

### 9. useSelector 최적화

-   state를 파라미터로 가져오는 과정에서 매번 새로운 객체를 만들고 있기때문에 리렌더링 된다

1. useSlector 를 여려번
    - const number = useSelector((state) => state.counter.number);
    - const diff = useSelector((state) => state.counter.diff);
2. equalityfn : 이전과 다음 비교 => shallowEqual

### 10. HOC 함수(connect함수)

-   connect 함수 : 컨테이너 컴포넌트를 만드는 또다른 방법(보통 클래스형태에서 사용)
-   HOC : Higher-Order Component
-   함수형 컴포넌트에서는 connect를 사용하지 않는다
-   mapStateToProps의 파라미터 ownProps, mergeProps, options
