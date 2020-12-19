import './css/index.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import { UserProvider } from './contexts/userAuthContext';
import Login from './components/Login';
function App() {
	return (
		<Router>
			<ThemeProvider>
				<UserProvider>
					<Route exact='/' component={Login} />
				</UserProvider>
			</ThemeProvider>
		</Router>
	);
}

export default App;
