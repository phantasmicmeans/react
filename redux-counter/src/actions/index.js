import * as types from './ActionTypes'

export const increment = (index) => ({
    /* */
    // Container에서 dispatch 할 때 (index) => dispatch(actions.increment(index)),
    // 코드에서 index를 넘겨주니 여기서 받아줘야함
    /* */
    type: types.INCREMENT,
    index, // 이렇게 넘겨줘야 리듀서 안에서 action.index 가능
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    index,
    color
    // 여기는 { index, color } 를 컨테이너에서 dispatch할 때 넘겨주니까
    // reducer에서 action.index  action.color로 받으려면
    // 저렇게 넘겨줘야함 근데 보통 payload 라는 프로퍼티에 같이 넘겨줌
});

export const create = (color) => ({
    type: types.CREATE,
    color
});

export const remove = () => ({
    type: types.REMOVE
});
