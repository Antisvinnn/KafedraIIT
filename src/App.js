import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import MainPage from './pages/main/Main';
import Page404 from './pages/page404/Page404';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route exact path='*' component={Page404} />
			</Switch>
		</div>
	);
};

export default App;
