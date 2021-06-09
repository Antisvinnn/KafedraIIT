/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOnlyTeacher } from '@redux/actions/publick';
import { PageHeader, Divider, Input, Upload, Button } from 'antd';
import { UploadTeacherPosts } from '@redux/actions/users';
import { UploadOutlined } from '@ant-design/icons';
import { getAllStuff } from '../../redux/actions/publick';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import ModalWindow from '@components/modalWindow/ModalWindow';
import style from './style.module.scss';
import Footer from '../../components/footer/Footer';

const TeacherPage = () => {
	const { id } = useParams();
	const history = useHistory();
	let dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => dispatch(getOnlyTeacher(id)), []);
	const [visible, setVisible] = useState(false);
	const [action, setAction] = useState();
	const response = useSelector((store) => store.publick.onlyTeacher);
	const isLoading = useSelector((store) => store.publick.isDataLoading);
	const userRole = useSelector((store) => store.user?.authData?.role);
	const userID = useSelector((store) => store.user?.authData?.id);
	// const [action, setAction] = useState();
	const roleRenderer = () => {
		if (userRole === 'user' && id == userID) {
			return (
				<Form className={style.form} onFinish={getInfo}>
					<Divider plain>Панель навигации</Divider>
					<FormItem name='text' className={style.input}>
						<Input placeholder='Добавьте описание'></Input>
					</FormItem>
					<div className={style.underInput}>
						<FormItem>
							<Button className={style.applyButton} type='primary' htmlType='submit'>
								Отправить
							</Button>
						</FormItem>
						<FormItem name='files'>
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
			);
		} else if (userRole === 'admin' && id == userID) {
			return (
				<div className={style.adminBarContainer}>
					<Divider plain>Панель навигации</Divider>
					<div className={style.adminBar}>
						<Button
							onClick={() => {
								setVisible(true);
								setAction('addTeacher');
							}}
							className={style.adminBtn}
							type='primary'
						>
							Добавить преподавателя
						</Button>
						<Button
							onClick={() => {
								setVisible(true);
								dispatch(getAllStuff());
								setAction('getAllStuff');
							}}
							className={style.adminBtn}
						>
							Просмотреть преподавателей
						</Button>
						<Button disabled className={style.adminBtn}>
							Просмотреть новости
						</Button>
						<Button disabled className={style.adminBtn}>
							Просмотреть публикации
						</Button>
						<Button
							danger
							onClick={() => {
								setVisible(true);
								dispatch(getAllStuff());
								setAction('removeTeacher');
							}}
							type='primary'
							className={style.adminBtn + ' ' + style.last}
						>
							Удалить преподавателя
						</Button>
					</div>
				</div>
			);
		} else {
			return null;
		}
	};
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
	// console.log(process.env.NODE_ENV);  !!!!!!!!!!!!!!!
	let getInfo = (values) => {
		if (values.text && values.files !== undefined) {
			const objectToSend = { ...values };
			objectToSend.files = values.files.fileList;
			dispatch(UploadTeacherPosts(objectToSend));
		}
	};

	return (
		<>
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
						<img className={style.image} src={response.photo} alt='' />
						<div className={style.teacherDescription}>
							<span className={style.name}>{response.name}</span>
							<span className={style.rewards}>{response.description}</span>
							<Divider />
							<span className={style.contacts}>Контакты: {response.contacts}</span>
						</div>
					</div>
				</div>
				{isLoading ? null : <React.Fragment>{roleRenderer()}</React.Fragment>}

				<Divider plain>Публикации преподавателя</Divider>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>
				<p>something post</p>

				<ModalWindow visible={visible} setVisible={setVisible} action={action} />
			</div>
			<Footer />
		</>
	);
};

export default TeacherPage;
