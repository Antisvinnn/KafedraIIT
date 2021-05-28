import { Form, Input, Button, Checkbox, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import style from './style.module.scss';

const LoginPage = () => {
	const dispatch = useDispatch();
	const postData = (values) => {
		dispatch(login(values));
	};
	const accessToken = useSelector((store) => store.auth.accessToken);
	console.log(accessToken);
	if (accessToken) {
		message.success('Вы авторизованы');
	}
	return (
		<Form
			onFinish={postData}
			name='basic'
			initialValues={{ remember: true }}
			className={style.form}
		>
			{accessToken ? <Redirect to='/' /> : null}
			<Form.Item
				label='Логин'
				name='login'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Пароль'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			{/* <Form.Item name='remember' valuePropName='checked'>
				<Checkbox>Remember me</Checkbox>
			</Form.Item> */}

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginPage;
