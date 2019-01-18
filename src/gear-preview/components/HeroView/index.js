import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {baseStats} from '../../../core/constants/stats';
import getHeroById from '../../../core/selectors/getHeroById';
import setAwakening from '../../actions/setAwakening';
import getAwakenedStars from '../../selectors/getAwakenedStars';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import getMaxAwakening from '../../selectors/getMaxAwakening';
import getSelectedHeroAwakenedStats from '../../selectors/getSelectedHeroAwakenedStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	const gearStats = getHeroGearStats(state, hero);
	const awakenedStats = getSelectedHeroAwakenedStats(state);

	return {
		stars: getAwakenedStars(state),
		maxStars: getMaxAwakening(state),
		hero: {
			...hero,
			stats: baseStats.map(stat => ({
				...stat,
				base: awakenedStats[stat.id],
				gear: gearStats[stat.id],
			})),
		},
	};
};

const mapDispatch = dispatch =>
	bindActionCreators(
		{
			onAwakeningChange: setAwakening,
		},
		dispatch
	);

export default connect(
	mapState,
	mapDispatch
)(HeroView);
