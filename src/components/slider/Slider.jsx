import { Carousel } from 'antd';
import style from './style.module.scss';

const Slider = () => {
	return (
		<Carousel className={style.slider}>
			<div className={style.slide1}>
				<h1 className={style.silde1Text}>
					Кафедра Интеллектуальных Информационных Технологий
				</h1>
				<span className={style.silde1Subtitle}>Intellegent Information Technologies</span>
			</div>
			<div className={style.slide2}>
				<h1 className={style.silde2Text}>Content</h1>
			</div>
			<div className={style.slide3}>
				<h1 className={style.silde3Text}>Content</h1>
			</div>
		</Carousel>
	);
};

export default Slider;
