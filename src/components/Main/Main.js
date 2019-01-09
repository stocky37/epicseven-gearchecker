import {withStyles} from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import HeroSelect from '../HeroSelect';
import HeroView from '../HeroView';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appBarSpacer: theme.mixins.toolbar,
});

class Main extends Component {
	state = {
		value: '',
	};

	handleChange = event => {
		return this.setState({value: event.target.value});
	};

	render() {
		let {classes} = this.props;
		return (
			<main className={classes.root}>
				<div className={classes.appBarSpacer} />
				<HeroSelect value={this.state.value} onChange={this.handleChange} />
				<HeroView id="sez" />
			</main>
		);
	}
}

Main.propTypes = {classes: PropTypes.any};

export default withStyles(styles)(Main);
