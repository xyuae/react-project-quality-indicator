import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';
import { App } from './components/App2';
//import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';

window.React = React;

render(
	<Router history={hashHistory}>
		<Route path='/' component={App}/>
		<Route path='list-projects' component={App}>
			<Route path=':filter' component={App} />
		</Route>
		<Route path='add-project' component={App} />
		<Route path='*' component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
);
