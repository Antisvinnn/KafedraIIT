import api from '@helper/api';

class UserService {
	whoAmI() {
		return api('/users/me');
	}
}

export default new UserService();
