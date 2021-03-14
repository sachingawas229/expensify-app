import { v4 as uuidv4 } from 'uuid';

// add expense
export const addExpense = (
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

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
export const editExpense = (id, updates) => {
    return ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })
};