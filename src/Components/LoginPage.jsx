import axios from 'axios';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

   const navigate = useNavigate()

   function onFinish(values) {
      axios.post('https://typ-back-end.herokuapp.com/api/login', {
         "login": values.username,
         "password": values.password,
      })
         .then((res) => {
            if (res.data.token !== null) {
               navigate('/success')
               localStorage.setItem('token', res.data.token);
            }
            else {
               message.error('Ошибка! Проверьте введённые данные или зарегистрируйтесь');
            }
         })

   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };


   return (
      <div className='container'>
         <h1 className='title'>R|Redev</h1>
         <Form
            name="basic"
            labelCol={{
               span: 8,
            }}
            wrapperCol={{
               span: 8,
            }}
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <Form.Item
               label="email"
               name="username"
               rules={[
                  {
                     required: true,
                     message: 'Please input your email!',
                  },
               ]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="password"
               name="password"
               rules={[
                  {
                     required: true,
                     message: 'Please input your password!',
                  },
               ]}
            >
               <Input.Password />
            </Form.Item>
            <Form.Item
               wrapperCol={{
                  offset: 8,
                  span: 16,
               }}
            >

               <Button type="primary" htmlType="submit" className='in'>
                  Вход
               </Button>

               <Button onClick={() => navigate('/registor')}>
                  Зарегистрироваться
               </Button>

            </Form.Item>
         </Form>
      </div>
   )
}

export default LoginPage;