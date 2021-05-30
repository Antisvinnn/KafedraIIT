import { Route, Switch } from 'react-router-dom';
import { whoAmI } from '@redux/actions/users';

import Header from '@components/header/Header';

import MainPage from '@pages/main/Main';
import Stuff from '@pages/stuff/Stuff';
import TeacherPage from '@pages/teacherPage/TeacherPage';
import LoginPage from '@pages/login/LoginPage';
import Page404 from '@pages/page404/Page404';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(whoAmI()), []);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/stuff/:id' component={TeacherPage} />
				<Route exact path='/stuff' component={Stuff} />
				<Route exact path='/login' component={LoginPage} />
				<Route exact path='*' component={Page404} />
			</Switch>
		</div>
	);
};

export default App;
