import { Route, Switch } from 'react-router';
import MainPage from './pages/main/Main';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={MainPage} />
		</Switch>
	);
};

export default App;
