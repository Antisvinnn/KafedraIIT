import style from './style.module.scss';
import { Input, Modal, Upload } from 'antd';
import Form from 'antd/lib/form/Form';

const ModalWindow = ({ visible = false, setVisible = () => {}, typeOfAction }) => {
	const handleOk = () => {
		setVisible(false);
	};
	return (
		<Modal
			centered
			title='Добавить преподавателя'
			visible={visible}
			onCancel={() => setVisible(false)}
			closable={false}
			onOk={handleOk}
		>
			<Form>
				<Input className={style.input} placeholder='ФИО (Иванов Иван Иванович)' />
				<Input className={style.input} placeholder='Описание (Кандидат наук, доцент)' />
				<Input
					className={style.input}
					placeholder='Контакты (Моб.номер и прочие ссылки на контакты)'
				/>
				<Input className={style.input} placeholder='Логин' />
				<Input className={style.input} placeholder='Пароль' />
				<Upload
					name='avatar'
					listType='picture-card'
					className='avatar-uploader'
					showUploadList={false}
				>
					Загрузить фото
				</Upload>
			</Form>
		</Modal>
	);
};

export default ModalWindow;
