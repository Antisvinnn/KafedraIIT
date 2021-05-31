import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { logout } from '@redux/actions/auth';
import style from './style.module.scss';

const Header = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((store) => store.auth.accessToken);
	const teacherID = useSelector((store) => store.user.authData.id);
	const menu = (
		<Menu>
			<Menu.Item danger onClick={() => dispatch(logout())}>
				Выйти из аккаунта
			</Menu.Item>
		</Menu>
	);
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
					{accessToken ? (
						<Dropdown overlay={menu} placement='topCenter'>
							<Link
								to={`/stuff/id`}
								className={style.navLink + ' ' + style.navLinkTeachers}
								// onClick={(e) => e.preventDefault()}
							>
								| личный кабинет <DownOutlined />
							</Link>
						</Dropdown>
					) : (
						<Link to='/login' className={style.navLink + ' ' + style.navLinkTeachers}>
							| вход для преподавателей
						</Link>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Header;
