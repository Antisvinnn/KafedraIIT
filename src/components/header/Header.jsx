import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {
	return (
		<div className={style.main}>
			<div className={style.logo}>IIT</div>
			<nav className={style.nav}>
				<Link className={style.navLink}>главная</Link>
				<Link className={style.navLink}>о нас</Link>
				<Link className={style.navLink}>состав</Link>
				<Link className={style.navLink}>история</Link>
				<Link className={style.navLink}>контакты</Link>
			</nav>
		</div>
	);
};

export default Header;
