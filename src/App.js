import './css/index.css';
import 'animate.css/animate.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserProvider } from './contexts/userAuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Secrets from './components/Secrets';
function App() {
	return (
		<Router>
			<UserProvider>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/hello' component={Secrets} />
			</UserProvider>
		</Router>
	);
}

export default App;
