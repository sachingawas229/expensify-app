import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import AppRouter from '../src/routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

console.log('test');

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

//store.dispatch(addExpense({ description: 'Water Bill', amount: 5520, createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Gas Bill', amount: 4520, createdAt: 1605873600000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 105520, createdAt: 1605873600000 }));

//store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));