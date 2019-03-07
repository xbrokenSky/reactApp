import { put, takeLatest, call } from 'redux-saga/effects';
import C from '../constants';
import { fetchPerson, receivePerson, fetchPersonFailed } from '../actions';
import { RandomUserService } from '../services';

const { getPersons } = new RandomUserService();

export function* fetchPersonSaga() {
    yield put(fetchPerson());

    try {
        const persons = yield call(getPersons, 3);
        yield put(receivePerson(persons));
    } catch (error) {
        yield put(fetchPersonFailed());
        throw new Error(error.toString());
    }
}

export default function* receivePersonSaga() {
    yield takeLatest(C.ASYNC_PERSON, fetchPersonSaga);
}
