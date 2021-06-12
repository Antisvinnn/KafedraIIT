import StuffItem from '@components/stuffItem/StuffItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStuff } from '@redux/actions/publick';
import arrow from '@assets/images/arrow.png';
import { BackTop, Spin } from 'antd';

import style from './style.module.scss';
import React from 'react';
import Footer from '../../components/footer/Footer';

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
	let testBool = useSelector((store) => store.publick.isDataLoading);
	let showAllStuff = function () {
		let output = stuff.map((element) => (
			<StuffItem
				id={element.id}
				key={element.id}
				img={element.photo}
				name={element.name}
				subtitle={element.description}
			/>
		));
		return output;
	};
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
							{showAllStuff()}
						</section>
					</div>
					<BackTop className={style.backTop}>
						<img style={styleBackTop} src={arrow} alt='img' />
					</BackTop>
				</div>
			)}
			<Footer />
		</React.Fragment>
	);
};

export default Stuff;
