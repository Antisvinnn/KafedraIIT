import StuffItem from '@components/stuffItem/StuffItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStuff } from '@redux/actions/publick';
import ava from '@assets/images/dark3.jpg';
import arrow from '@assets/images/arrow.png';
import { BackTop, Spin } from 'antd';

import style from './style.module.scss';
import React from 'react';

let testBool = false;
const Stuff = () => {
	const styleBackTop = {
		height: 90,
		width: 60,
		lineHeight: '40px',
		bottom: '-40px',
	};
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => dispatch(getAllStuff()), []);
	const stuff = useSelector((store) => store.publick.stuff);
	console.log(stuff);
	return (
		<React.Fragment>
			{testBool ? (
				<Spin className={style.spin} size='large' />
			) : (
				<div className={style.main}>
					<div className={style.container}>
						<section className={style.section}>
							<div className={style.title}>
								Профессорско-преподавательский состав кафедры Интеллектуальных Информационных
								Технологий
							</div>
							<p className={style.sectionText}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia error
								soluta hic. Hic rem aperiam nam! Similique nobis, aliquid quis temporibus neque
								quidem sint maiores eaque impedit nemo, iste accusantium, suscipit mollitia
								repellat vel beatae ratione. Quasi quis maxime cumque laborum quas, placeat
								maiores animi nesciunt, eos dicta beatae porro sed recusandae nostrum magni ad
								consequuntur quam laboriosam magnam labore autem id consectetur. Officiis, ea
								vero. Ipsam itaque qui exercitationem sequi voluptas nihil provident. Optio maxime
								dolorum quos corporis delectus doloribus perferendis voluptatibus quisquam qui
								officiis ab nemo repudiandae excepturi ullam aliquid consequatur nisi, id
								asperiores. Fugiat perferendis nesciunt laboriosam repellat aperiam culpa neque
								expedita molestias ullam soluta inventore incidunt delectus vitae voluptatibus
								suscipit, at dicta! Aspernatur, nulla suscipit?
							</p>
						</section>
						<section className={style.section + ' ' + style.sectionStuff}>
							<StuffItem
								img={ava}
								name='Безобразов А.С.'
								subtitle='Доцент, кандидат наук'
								id='1'
							/>
							{/* <StuffItem img={ava} name='Михняев В.С.' subtitle='Доцент, кандидат наук' id='2' />
							<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
							<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' />
							<StuffItem
								img={ava}
								name='Безобразов А.С.'
								subtitle='Доцент, кандидат наук'
								id='3'
							/>
							<StuffItem
								img={ava}
								name='Михняев В.С.'
								subtitle='Доцент, кандидат наук, чемпион мира, чемп, просто лучший'
								id='4'
							/>
							<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
							<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' />
							<StuffItem
								img={ava}
								name='Безобразов А.С.'
								subtitle='Доцент, кандидат наук'
								id='5'
							/>
							<StuffItem
								img={ava}
								name='Михняев В.С.'
								subtitle='Доцент, кандидат наук, чемпион мира, чемп, просто лучший'
							/>
							<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
							<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' /> */}
						</section>
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
			)}
		</React.Fragment>
	);
};

export default Stuff;
