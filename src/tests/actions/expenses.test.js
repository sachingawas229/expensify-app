import { act } from 'react-dom/test-utils';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    })
});


test('should setup add action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 100090,
        createdAt: 1000,
        note: 'last months rent'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.anything(String)
        }
    })
});

test('should setup add action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.anything(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
    console.log(action);
});