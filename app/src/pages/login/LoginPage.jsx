import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
import style from './style.module.scss';

const LoginPage = () => {
	const dispatch = useDispatch();
	const postData = (values) => {
		console.log(values);
		dispatch(login(values));
	};
	return (
		<Form
			onFinish={postData}
			name='basic'
			initialValues={{ remember: true }}
			className={style.form}
		>
			<Form.Item
				label='Логин'
				name='username'
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
