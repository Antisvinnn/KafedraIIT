import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<div>
					<Link className={style.logo} to='/'>
						IIT
					</Link>
				</div>
				<nav className={style.nav}>
					<Link to='/' className={style.navLink}>
						главная
					</Link>
					<Link to='/about' className={style.navLink}>
						о нас
					</Link>
					<Link to='/stuff' className={style.navLink}>
						состав
					</Link>
					<Link to='/contacts' className={style.navLink}>
						контакты
					</Link>
					<Link to='/login' className={style.navLink + ' ' + style.navLinkTeachers}>
						| вход для преподавателей
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
