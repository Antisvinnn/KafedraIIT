import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';

import MainPage from './pages/main/Main';
import Stuff from './pages/stuff/Stuff';
import TeacherPage from '@components/teacherPage/TeacherPage';
import Page404 from './pages/page404/Page404';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/sfuff/1' component={TeacherPage} />
				<Route exact path='/stuff' component={Stuff} />
				<Route exact path='*' component={Page404} />
			</Switch>
		</div>
	);
};

export default App;
