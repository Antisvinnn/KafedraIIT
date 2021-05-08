import { Button } from 'antd';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const getRandomError = () => {
	let randomNumb = Math.floor(Math.random() * 6);
	const errors = [
		'Вы пытаетесь сослаться на несуществующий путь (ошибка 404)',
		'Наши картографы не знают такого места на карте нашего сайта... (ошибка 404)',
		'Уупс! (ошибка 404)',
		'Тук-тук... (ошибка 404)',
		'Простите, мы не знаем куда вас направить (ошибка 404)',
		'Страница не найдена (ошибка 404)',
	];
	return errors[randomNumb];
};

const Page404 = () => {
	return (
		<div className={style.container}>
			<span className={style.text}>{getRandomError()}</span>
			<Button className={style.btn} type='primary'>
				<Link to='/'>На главную</Link>
			</Button>
		</div>
	);
};

export default Page404;
