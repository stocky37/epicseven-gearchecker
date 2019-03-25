import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeHero from '../../actions/changeHero';
import getHero from '../../selectors/getHero';
import isHeroLoading from '../../selectors/isHeroLoading';
import Toolbar from './Toolbar';

const mapState = state => {
	const hero = getHero(state);
	if (!hero) {
		return {hero: null};
	}

	return {
		hero: {
			value: hero.id,
			label: hero.name,
		},
		isHeroLoading: isHeroLoading(state),
	};
};

const mapDispatch = dispatch => bindActionCreators({onHeroChange: changeHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
