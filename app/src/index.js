import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from '@redux/store/Store.js';

ReactDOM.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* </Provider> */}
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();