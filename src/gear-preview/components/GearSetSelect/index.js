import getGearSets from 'core/selectors/getGearSets';
import {connect} from 'react-redux';
import GearSetSelect from './GearSetSelect';

const mapState = state => ({
	items: getGearSets(state).map(set => ({
		label: set.label,
		value: set.id,
	})),
});

export default connect(
	mapState,
	() => ({})
)(GearSetSelect);
