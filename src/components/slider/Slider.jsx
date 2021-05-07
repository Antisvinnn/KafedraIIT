import { Carousel } from 'antd';
import dark4 from '../../assets/images/dark4.jpg';
import present1 from '../../assets/images/present2.png';
import present7 from '../../assets/images/present7.jpg';
import style from './style.module.scss';

const Slider = () => {
	return (
		<Carousel autoplay className={style.slider}>
			<div classname={style.slide1}>
				<img className={style.image} src={dark4} alt='' />
			</div>
			<div>
				<img className={style.image} src={present1} alt='' />
			</div>
			<div>
				<img className={style.image} src={present7} alt='' />
			</div>
		</Carousel>
	);
};

export default Slider;