import fetchHero from '../../core/actions/requests/fetchHero';
import callApis from '../../core/actions/util/callApis';
import getEquipRequest from '../selectors/getEquipRequest';
import loadingHeroInfo from './basic/loadingHeroInfo';
import loadingHeroInfoFail from './basic/loadingHeroInfoFail';
import loadingHeroInfoSuccess from './basic/loadingHeroInfoSuccess';
import fetchHeroBaseStats from './requests/fetchHeroBaseStats';
import fetchHeroEquippedStats from './requests/fetchHeroEquippedStats';

export default (stage = 0) => (dispatch, getState) => {
	dispatch(loadingHeroInfo());

	const {id, stars, awakening, gear} = getEquipRequest(getState());

	const requests = [
		fetchHero(id),
		fetchHeroBaseStats(id, stars, awakening),
		fetchHeroEquippedStats(id, {
			stars,
			level: stars * 10,
			awakening,
			...gear,
		}),
	];

	console.log(requests.filter((el, index) => index >= stage));

	callApis(requests.filter((el, index) => index >= stage))(dispatch)
		.then(() => dispatch(loadingHeroInfoSuccess()))
		.catch(() => dispatch(loadingHeroInfoFail()));
};
