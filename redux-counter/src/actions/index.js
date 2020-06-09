import * as types from './ActionTypes'

export const increment = (index) => ({
    type: types.INCREMENT,
    index, // 이렇게 넘겨줘야 리듀서 안에서 action.index 가능
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    index,
    color
});

export const create = (color) => ({
    type: types.CREATE,
    color
});

export const remove = () => ({
    type: types.REMOVE
});
