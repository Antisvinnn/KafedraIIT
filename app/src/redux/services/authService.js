import auth from '../helper/auth';

class AuthService {
	login(data) {
		return auth('/login', 'POST', data);
	}
	logout(token) {
		return auth('/logout', 'POST', { token: token });
	}
	refresh(token) {
		return auth('/refresh', 'POST', { token: token });
	}
	check(login) {
		return auth('/check', 'POST', { login: login });
	}
	info(login) {
		return auth('/info', 'POST', { login: login });
	}
	register(data) {
		return auth('/register', 'POST', data);
	}
}

export default new AuthService();
