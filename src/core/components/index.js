import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from '../store';
import persistor from '../util/persistor';
import theme from '../util/theme';
import App from './App';

export default () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
);