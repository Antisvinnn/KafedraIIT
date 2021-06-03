/* eslint-disable eqeqeq */
import React from 'react';
import style from './style.module.scss';
import { Input, Modal, Upload, message, Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTeacher as AddTeacher, removeTeacher } from '@redux/actions/admin';
import { getAllStuff } from '../../redux/actions/publick';

const ModalWindow = ({ visible = false, setVisible = () => {}, action }) => {
	const dispatch = useDispatch();
	const stuff = useSelector((store) => store.publick.stuff);
	const handleOk = () => {
		setVisible(false);
	};
	const encodeImageFileAsURL = (element, values) => {
		var file = element.file;
		var reader = new FileReader();
		reader.onloadend = function () {
			const objectToSend = { ...values };
			objectToSend.photo = reader.result;
			dispatch(AddTeacher(objectToSend));
		};
		reader.readAsDataURL(file);
	};
	const beforeUpload = (file) => {
		const isJpgOrPng =
			file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
		if (!isJpgOrPng) {
			message.error('Вы можете загружать файлы только JPG/JPEG/PNG типа!');
			return;
		}
		const isLt4M = file.size / 1024 / 1024 < 4;
		if (!isLt4M) {
			message.error('Изображение должно быть меньше 4MB!');
			return;
		}
		file.status = 'done';
		return false;
	};
	const addTeacher = (values) => {
		encodeImageFileAsURL(values.photo, values);
	};
	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};
	const addTeacherAction = () => {
		return (
			<Modal
				centered
				title='Добавить преподавателя'
				visible={visible}
				onCancel={() => setVisible(false)}
				closable={false}
				footer={false}
				onOk={handleOk}
			>
				<Form onFinish={addTeacher}>
					<FormItem className={style.formItem} name='name'>
						<Input className={style.input} placeholder='ФИО (Иванов Иван Иванович)' />
					</FormItem>
					<FormItem className={style.formItem} name='description'>
						<Input className={style.input} placeholder='Описание (Кандидат наук, доцент)' />
					</FormItem>
					<FormItem className={style.formItem} name='contacts'>
						<Input
							className={style.input}
							placeholder='Контакты (Моб.номер и прочие ссылки на контакты)'
						/>
					</FormItem>
					<FormItem className={style.formItem} name='login'>
						<Input className={style.input} placeholder='Логин' />
					</FormItem>
					<FormItem className={style.formItem} name='password'>
						<Input className={style.input} placeholder='Пароль' />
					</FormItem>
					<FormItem className={style.formItem} name='photo'>
						<Upload
							className={style.uploader}
							beforeUpload={beforeUpload}
							listType='picture-card'
							onPreview={onPreview}
							maxCount={1}
						>
							Загрузить фото
						</Upload>
					</FormItem>
					<Button htmlType='submit' className={style.button} type='primary' onClick={handleOk}>
						ОК
					</Button>
					<Button onClick={() => setVisible(false)} className={style.button} type='default'>
						Отменить
					</Button>
				</Form>
				``
			</Modal>
		);
	};
	const getStuff = () => {
		const arrayOfStuff = stuff.map((element) => <div>{element.name}</div>);
		return arrayOfStuff;
	};
	const getStuffToRemove = () => {
		const arrayOfStuff = stuff.map((element) => (
			<div
				className={style.dangerStuffItem}
				onClick={() => {
					dispatch(removeTeacher(element.id));
					setVisible(false);
				}}
			>
				{element.name}
			</div>
		));
		return arrayOfStuff;
	};
	const getAllstuffAction = () => {
		return (
			<Modal
				centered
				title='Список преподавателей'
				visible={visible}
				onCancel={() => setVisible(false)}
				closable={false}
				footer={false}
				onOk={handleOk}
			>
				<>
					{getStuff()}
					<Button
						htmlType='submit'
						className={style.buttonStuff}
						type='primary'
						onClick={handleOk}
					>
						ОК
					</Button>
					<Button
						onClick={() => setVisible(false)}
						className={style.buttonStuff}
						type='default'
					>
						Отменить
					</Button>
				</>
			</Modal>
		);
	};
	const removeTeacherAction = () => {
		return (
			<Modal
				centered
				title='Список преподавателей'
				visible={visible}
				onCancel={() => setVisible(false)}
				closable={false}
				footer={false}
				onOk={handleOk}
			>
				<>
					{getStuffToRemove()}
					<Button
						htmlType='submit'
						className={style.buttonStuff}
						type='primary'
						onClick={handleOk}
					>
						ОК
					</Button>
					<Button
						onClick={() => setVisible(false)}
						className={style.buttonStuff}
						type='default'
					>
						Отменить
					</Button>
				</>
			</Modal>
		);
	};
	const actionRenderer = () => {
		if (action == 'getAllStuff') {
			return getAllstuffAction();
		} else if (action == 'addTeacher') {
			return addTeacherAction();
		} else if (action == 'removeTeacher') {
			return removeTeacherAction();
		} else {
			return null;
		}
	};

	return <>{actionRenderer()}</>;
};

export default ModalWindow;
