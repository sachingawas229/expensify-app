import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({type: 'INCREMENT', incrementBy});

const decrementCount = ({decrementBy = 1} = {}) => ({type: 'DECREMENT', decrementBy});

const resetCount = () => ({type: 'RESET'});

const setCount = ({count = 1} = {}) => ({type: 'SET', count});

// Reducers
//1. Reducers are pure functions
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 6 }));

store.dispatch(incrementCount());
// increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//unsubscribe();
// reset count
store.dispatch(resetCount());

// decrement count
// store.dispatch({
//     type: 'DECREMENT'
// });

// // decrement count
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 23}));

store.dispatch(setCount({count: 101}));
