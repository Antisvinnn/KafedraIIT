import StuffItem from '../../components/stuffItem/StuffItem';
import ava from '../../assets/images/dark3.jpg';

import style from './style.module.scss';

const Stuff = () => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<section className={style.section}>
					<div className={style.title}>
						Профессорско-преподавательский состав кафедры Интеллектуальных Информационных
						Технологий
					</div>
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
				<section className={style.section + ' ' + style.sectionStuff}>
					<StuffItem
						img={ava}
						name='Безобразов А.С.'
						subtitle='Доцент, кандидат наук'
						id='1'
					/>
					<StuffItem
						img={ava}
						name='Михняев В.С.'
						subtitle='Доцент, кандидат наук, чемпион мира, чемп, просто лучший'
						id='1'
					/>
					<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
					<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' />
					<StuffItem
						img={ava}
						name='Безобразов А.С.'
						subtitle='Доцент, кандидат наук'
						id='1'
					/>
					<StuffItem
						img={ava}
						name='Михняев В.С.'
						subtitle='Доцент, кандидат наук, чемпион мира, чемп, просто лучший'
						id='1'
					/>
					<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
					<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' />
					<StuffItem
						img={ava}
						name='Безобразов А.С.'
						subtitle='Доцент, кандидат наук'
						id='1'
					/>
					<StuffItem
						img={ava}
						name='Михняев В.С.'
						subtitle='Доцент, кандидат наук, чемпион мира, чемп, просто лучший'
					/>
					<StuffItem img={ava} name='Смаль А.С' subtitle='Доцент, кандидат наук' id='1' />
					<StuffItem img={ava} name='Хвещук Г.Н.' subtitle='Доцент, кандидат наук' id='1' />
				</section>
			</div>
		</div>
	);
};

export default Stuff;
