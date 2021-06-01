import style from './style.module.scss';
import { Input, Modal, Upload, message, Button } from 'antd';
import Form from 'antd/lib/form/Form';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import FormItem from 'antd/lib/form/FormItem';

const ModalWindow = ({ visible = false, setVisible = () => {}, typeOfAction }) => {
	const [state, setState] = useState({ loading: false });
	const handleOk = () => {
		setVisible(false);
	};
	const beforeUpload = (file) => {
		const isJpgOrPng =
			file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
		if (!isJpgOrPng) {
			message.error('Допускаются только JPG/PNG файлы!');
			return;
		}
		const isLt2M = file.size / 1024 / 1024 < 4;
		if (!isLt2M) {
			message.error('Изображение должно быть меньше чем 4MB!');
			return;
		}
		file.status = 'done';
		return false;
	};
	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}
	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, (imageUrl) =>
				setState({
					imageUrl,
					loading: false,
				})
			);
		}
	};
	const getValues = (values) => {
		console.log(values);
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
			<Form onFinish={getValues}>
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
				<FormItem className={style.formItem} name='upload'>
					<Upload
						beforeUpload={beforeUpload}
						maxCount={1}
						name='avatar'
						onChange={handleChange}
						listType='picture-card'
						className={style.uploader}
						showUploadList={false}
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
