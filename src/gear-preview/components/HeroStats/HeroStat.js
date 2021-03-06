import {makeStyles} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import StatValue from './StatValue';

const useStyles = makeStyles(theme => ({
	root: {},
	label: {},
	base: {},
	gear: {},
	total: {
		fontWeight: theme.typography.fontWeightMedium,
	},
}));

const HeroStat = ({className, label, base, gear, total, diff, percentage, ...props}) => {
	const classes = useStyles();
	return (
		<TableRow className={classNames(classes.root, className)} {...props}>
			<TableCell className={classes.label} component="th" scope="row">
				{label}
			</TableCell>
			<TableCell className={classes.base} align="right">
				<StatValue value={base} percentage={percentage} />
			</TableCell>
			<TableCell className={classes.gear} align="right">
				<StatValue value={gear} percentage={percentage} />
			</TableCell>
			<TableCell className={classes.total} align="right">
				<StatValue value={total} diff={diff} percentage={percentage} />
			</TableCell>
		</TableRow>
	);
};

HeroStat.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	base: PropTypes.number,
	gear: PropTypes.number,
	total: PropTypes.number,
	diff: PropTypes.number,
	percentage: PropTypes.bool,
};

HeroStat.defaultProps = {
	base: 0,
	gear: 0,
	percentage: false,
};

export default HeroStat;
