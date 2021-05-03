import style from './style.module.scss';
import Header from '../../components/header/Header';

const Main = () => {
	return (
		<div className={style.main}>
			<header className={style.header}>
				<Header />
			</header>
			<p>Main page!</p>
		</div>
	);
};

export default Main;
