import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { PageHeader, Divider, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import style from './style.module.scss';

const TeacherPage = (props) => {
	let testBool = true;
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
	const config = {
		action: 'https://google.com',
		onChange({ file, fileList }) {
			if (file.status !== 'uploading') {
				console.log(file, fileList);
			}
		},
		response: 'hz',
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
			{testBool ? (
				<React.Fragment>
					<Divider plain>Панель навигации</Divider>
					<Form className={style.form}>
						<FormItem className={style.input}>
							<Input placeholder='Добавьте описание'></Input>
						</FormItem>
						<FormItem>
							<Upload {...config} className={style.upload}>
								<Button type='primary' icon={<UploadOutlined />}>
									Загрузить файл
								</Button>
							</Upload>
						</FormItem>
					</Form>
				</React.Fragment>
			) : null}

			<Divider plain>Публикации преподавателя</Divider>
			<div>123</div>
		</div>
	);
};

export default TeacherPage;
