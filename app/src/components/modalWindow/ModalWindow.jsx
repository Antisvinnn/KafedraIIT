import React from 'react';
import style from './style.module.scss';
import { Input, Modal, Upload, message, Button } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useDispatch } from 'react-redux';
import { addTeacher as AddTeacher } from '@redux/actions/admin';

const ModalWindow = ({ visible = false, setVisible = () => {}, typeOfAction }) => {
	const dispatch = useDispatch();
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
		console.log(values);
		encodeImageFileAsURL(values.photo, values);
	};
	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
				console.log(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};

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
		</Modal>
	);
};

export default ModalWindow;
