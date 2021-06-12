import style from './style.module.scss';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.leftContent}>
				<div className={style.leftContentText}>
					©2021 Кафедра ИИТ. Все права защищены. <br />
					Email: iit@bstu.by
					<br />
					Контактный номер: 8 (0132) 2-56-11
				</div>
			</div>
			<div className={style.rightContent}>
				<div className={style.rightContentText}>
					Разработка и дизайн сайта - Точёный Виталий
				</div>
			</div>
		</footer>
	);
};

export default Footer;
