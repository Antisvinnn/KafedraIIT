import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { PageHeader, Divider, Input, Upload, Button, message } from 'antd';
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
		action: 'localhost:8020',
		onChange({ file, fileList }) {
			if (file.status !== 'uploading') {
				// console.log(file, fileList);
			}
		},
	};
	const dummyRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok');
		}, 0);
	};
	let getInfo = (values) => {
		console.log(values);
		if (values.input && values.upload !== undefined) {
			message.success('Файлы и описание опубликованы!');
		}
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
					<Form className={style.form} onFinish={getInfo}>
						<FormItem name='input' className={style.input}>
							<Input placeholder='Добавьте описание'></Input>
						</FormItem>
						<div className={style.underInput}>
							<FormItem>
								<Button className={style.applyButton} type='primary' htmlType='submit'>
									Отправить
								</Button>
							</FormItem>
							<FormItem name='upload'>
								<Upload
									{...config}
									className={style.upload}
									maxCount='5'
									multiple
									customRequest={dummyRequest}
								>
									<Button className={style.uplButton} type='default' icon={<UploadOutlined />}>
										Загрузить файл
									</Button>
								</Upload>
							</FormItem>
						</div>
					</Form>
				</React.Fragment>
			) : null}

			<Divider plain>Публикации преподавателя</Divider>
			<div>123</div>
		</div>
	);
};

export default TeacherPage;
