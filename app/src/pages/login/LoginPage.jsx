import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { login } from '../../redux/actions/auth';
import style from './style.module.scss';

const LoginPage = () => {
	const dispatch = useDispatch();
	const postData = (values) => {
		dispatch(login(values));
	};
	const accessToken = useSelector((store) => store.auth.accessToken);
	return (
		<>
			<Form
				onFinish={postData}
				name='basic'
				initialValues={{ remember: true }}
				className={style.form}
			>
				{accessToken ? <Redirect to='/' /> : null}
				<Form.Item
					name='login'
					rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
				>
					<Input placeholder='Введите логин' />
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
				>
					<Input.Password placeholder='Введите пароль' />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Войти
					</Button>
				</Form.Item>
			</Form>
			<Footer />
		</>
	);
};

export default LoginPage;
