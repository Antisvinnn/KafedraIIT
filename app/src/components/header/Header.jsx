import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {
	let testBool = true;
	const menu = (
		<Menu>
			<Menu.Item danger>Выйти из аккаунта</Menu.Item>
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
					{testBool ? (
						<Dropdown overlay={menu} placement='topCenter'>
							<Link
								className={style.navLink + ' ' + style.navLinkTeachers}
								onClick={(e) => e.preventDefault()}
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
