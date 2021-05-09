import { Link, useParams } from 'react-router-dom';
import { render } from 'react-dom';
import { PageHeader, Divider } from 'antd';
import style from './style.module.scss';

const TeacherPage = () => {
	const { id } = useParams();
	const routes = [
		{
			// path: window.location.assign('/stuff'),
			path: '/stuff',
			breadcrumbName: 'состав',
		},
		{
			path: 'first',
			breadcrumbName: `преподаватель - ${id}`,
		},
	];
	return (
		<div className={style.main}>
			<PageHeader
				className={style.sitePageHeader}
				// onBack={() => window.location.assign('/stuff')} не по реакту!!!
				onBack={() => null}
				title='Личный профиль преподавателя'
				breadcrumb={{ routes }}
				subTitle='This is a subtitle'
			/>
			<Divider plain>Публикации преподавателя</Divider>
			<div>123</div>
		</div>
	);
};

export default TeacherPage;
