import React from 'react';
import Index from './app/index'
import { Provider } from 'react-redux';
import store from './redux';
export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
			<Index />
			</Provider>
			);
	}
}
