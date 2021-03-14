import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


// ADD EXPENSE

const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    });

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
const editExpense = (id, updates) => {
    return ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })
};

// SET TEXT_FILTER
const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
)
// SORT_BY_DATE
const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
);

// SORT_BY_AMOUNT
const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
);

// SET_START_DATE
const setStartDate = (date) => (
    {
        type: 'START_DATE',
        date
    }
)

// SET_END_DATE
const setEndDate = (date) => (
    {
        type: 'END_DATE',
        date
    }
)

//Expenses reducer
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters reducer
const filtersreducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filtersreducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

// timestamps
// 33400, 10, -203
// January 1st 1970 (unix epoch)

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLocaleLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if( sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });

}
// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//store.dispatch(addExpense({description: 'Rent', amount: 10000}));
 const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 2580, createdAt: -21000 }));
 const exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 29855, createdAt: -1000 }));

// console.log(exp1);
// console.log(exp2);

// store.dispatch(removeExpense({ id: exp2.expense.id }));

// store.dispatch(editExpense(exp1.expense.id, { amount: 3000 }));

//store.dispatch(setTextFilter('ffe'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(999));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate());


const demoState = {
    expenses: [{
        id: '1122233',
        description: 'January rent',
        not: 'This is final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
