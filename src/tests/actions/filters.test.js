import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate  set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'START_DATE',
        date: moment(0)
    });
});

test('should generate  set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'END_DATE',
        date: moment(0)
    });
});

test('should generate  set text filter action object', () => {
    const action = setTextFilter('RENT');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'RENT'
    });
});

test('should generate  set text filter action object without text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});