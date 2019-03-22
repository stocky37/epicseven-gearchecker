import {GET_HEROES, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from '../../constants/actionTypes';
import hero from '../../schemas/hero';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([hero], {
		endpoint: `${API_URL}/heroes`,
		types: [GET_HEROES, GET_HEROES_SUCCESS, GET_HEROES_FAILURE],
	});
