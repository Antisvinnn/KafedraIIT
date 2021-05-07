import { Link } from 'react-router-dom';
import style from './style.module.scss';

const StuffItem = ({ img, name, subtitle, id }) => {
	return (
		<div className={style.main}>
			<img src={img} className={style.image} alt='img' />
			<div className={style.description}>
				<div>
					<Link className={style.name} to={`/stuff/${id}`}>
						{name}
					</Link>
				</div>
				<div className={style.subtitle}>{subtitle}</div>
			</div>
		</div>
	);
};

export default StuffItem;
