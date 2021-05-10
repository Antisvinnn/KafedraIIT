import { Link, useParams, useHistory } from 'react-router-dom';
import { PageHeader, Divider } from 'antd';
import style from './style.module.scss';

const TeacherPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const routes = [
		{
			path: 'stuff',
			breadcrumbName: 'состав',
		},
		{
			path: 'first',
			breadcrumbName: `преподаватель - ${id}`,
		},
	];
	const itemRender = (route, params, routes, paths) => {
		const last = routes.indexOf(route) === routes.length - 1;
		return last ? (
			<span>{route.breadcrumbName}</span>
		) : (
			<Link to={`/${route.path}`} replace>
				{route.breadcrumbName}
			</Link>
		);
	};
	return (
		<div className={style.main}>
			<PageHeader
				className={style.sitePageHeader}
				onBack={() => history.goBack()} //useHistory => hook
				title='Личный профиль преподавателя'
				breadcrumb={{ routes, itemRender }}
				subTitle='This is a subtitle'
			/>
			<div className={style.container}>
				<div className={style.teacherDataContainer}>
					<img className={style.image} src='http://placehold.it/400x400' alt='' />
					<div className={style.teacherDescription}>
						<span className={style.name}>Смаль Александр Сергеевич</span>
						<span className={style.rewards}>
							Доцент, кандидат математических и физических наук Доцент, кандидат математических и
							физических наук. Увлекается трендами и хайповой модой.
						</span>
						<Divider />
						<span className={style.contacts}>
							Контакты: <br /> Телефон: +375(44)557-45-82 <br /> Почта: antisvinnn@gmail.com
						</span>
					</div>
				</div>
			</div>
			<Divider plain>Публикации преподавателя</Divider>
			<div>123</div>
		</div>
	);
};

export default TeacherPage;
