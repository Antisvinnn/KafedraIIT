import { Carousel } from 'antd';
import style from './style.module.scss';

const Slider = () => {
	return (
		<Carousel
			autoplaySpeed={6000}
			pauseOnDotsHover
			pauseOnHover
			pauseOnFocus
			autoplay
			className={style.slider}
		>
			<div className={style.slide1}>
				<h1 className={style.silde1Text}>
					Кафедра Интеллектуальных Информационных Технологий
				</h1>
				<span className={style.silde1Subtitle}>Intellegent Information Technologies</span>
			</div>
			<div className={style.slide2}>
				<h1 className={style.silde2Text}>
					"Компьютер — это самый удивительный инструмент, с каким я когда-либо сталкивался. Это
					велосипед для нашего сознания."
				</h1>
				<span className={style.silde2Subtitle}>
					- Стив Джобс (Memory and imagination, 1990)
				</span>
			</div>
			<div className={style.slide3}>
				<h1 className={style.silde3Text}>
					"Все технологии начинаются с искр в чьей-то голове. Идея чего-то, чего раньше не
					существовало, но однажды будет изобретено, может изменить все."
				</h1>
				<span className={style.silde3Subtitle}>- Натан Мирволд</span>
			</div>
		</Carousel>
	);
};

export default Slider;
