/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import Slider from '@components/slider/Slider';

import { Parallax } from 'react-parallax';

import monitor from '@assets/images/monitor.png';
import ai from '@assets/images/ai.png';
import internet from '@assets/images/internet.png';
import algo from '@assets/images/algo.png';
import programming from '@assets/images/programming.png';
import design from '@assets/images/design.png';
import solution from '@assets/images/solution.png';
import processor from '@assets/images/processor.png';
import evm from '@assets/images/evm.png';
import bstu from '@assets/images/bstu.jpg';
import arrow from '@assets/images/arrow.png';

import style from './style.module.scss';
import { Button, BackTop, notification } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Main = () => {
	const styleBackTop = {
		height: 90,
		width: 60,
		lineHeight: '40px',
		bottom: '-40px',
	};
	const role = useSelector((store) => store.user.authData?.role);
	const openAdminNotification = (placement) => {
		notification.info({
			message: `Полезная информация`,
			description:
				'Вы - администратор приложения! Ваша задача контролировать весь процесс его работы! Вы имеете право добавлять и удалять преподавателей из базы данных, а также просматривать новости (ещё в разработке) и публикации (ещё в разработке)',
			placement,
		});
	};
	const openUserNotification = (placement) => {
		notification.info({
			message: `Полезная информация`,
			description:
				'Вы - преподаватель! Ваша задача помагать студентам :) . Вы имеете право опубликовывать информацию на странице своего профиля (например: файлы word, excel, .rar, и т.д.), для того, чтобы студенты могли удобно их скачать.',
			placement,
		});
	};
	useEffect(() => {
		if (role == 'admin') {
			openAdminNotification('topRight');
		} else if (role == 'user') {
			openUserNotification();
		}
	}, []);
	return (
		<div className={style.main}>
			<Slider />
			<div className={style.container}>
				<section className={style.section}>
					<div className={style.title}>Lorem ipsum dolor sit.</div>
					<p className={style.sectionText}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia error soluta
						hic. Hic rem aperiam nam! Similique nobis, aliquid quis temporibus neque quidem sint
						maiores eaque impedit nemo, iste accusantium, suscipit mollitia repellat vel beatae
						ratione. Quasi quis maxime cumque laborum quas, placeat maiores animi nesciunt, eos
						dicta beatae porro sed recusandae nostrum magni ad consequuntur quam laboriosam
						magnam labore autem id consectetur. Officiis, ea vero. Ipsam itaque qui
						exercitationem sequi voluptas nihil provident. Optio maxime dolorum quos corporis
						delectus doloribus perferendis voluptatibus quisquam qui officiis ab nemo
						repudiandae excepturi ullam aliquid consequatur nisi, id asperiores. Fugiat
						perferendis nesciunt laboriosam repellat aperiam culpa neque expedita molestias
						ullam soluta inventore incidunt delectus vitae voluptatibus suscipit, at dicta!
						Aspernatur, nulla suscipit?
					</p>
				</section>
				<section className={style.section}>
					<div className={style.title}>Чему учят на нашей кафедре:</div>
					<div className={style.tasks}>
						<div className={style.task}>
							<img className={style.taskImage} src={monitor} alt='' />
							<div className={style.taskDescription}>Созданию доступных интерфейсов</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={ai} alt='' />
							<div className={style.taskDescription}>
								Программированию искусственного интеллекта
							</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={internet} alt='' />
							<div className={style.taskDescription}>Интернет-безопасности</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={algo} alt='' />
							<div className={style.taskDescription}>Проектированию грамотных алгоритмов</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={programming} alt='' />
							<div className={style.taskDescription}>Общему программированию</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={design} alt='' />
							<div className={style.taskDescription}>WEB-дизайну и компьютерной графике</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={processor} alt='' />
							<div className={style.taskDescription}>Программированию микроконтроллеров</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={evm} alt='' />
							<div className={style.taskDescription}>Архитектуре ЭВМ</div>
						</div>
						<div className={style.task}>
							<img className={style.taskImage} src={solution} alt='' />
							<div className={style.taskDescription}>Решению нетипичных задач</div>
						</div>
					</div>
				</section>
			</div>
			<div className={style.containerToParallax}>
				<div className={style.parallax}>
					<Parallax bgImage={bstu} strength={380}>
						<div className={style.textParallaxWrapper}>
							<Button className={style.parallaxButton} type='primary'>
								Наша история
							</Button>
						</div>
					</Parallax>
				</div>
			</div>
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
			<BackTop className={style.backTop}>
				<img style={styleBackTop} src={arrow} alt='img' />
			</BackTop>
		</div>
	);
};

export default Main;
