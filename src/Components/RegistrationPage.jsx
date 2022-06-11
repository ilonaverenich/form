import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

function RegistrationPage() {

   const navigate = useNavigate();

   const onFinish = (values) => {

      axios.post('https://typ-back-end.herokuapp.com/api/users/register',
         {
            "login": values.username,
            "password": values.password,
            "isAdmin": values.remember
         })
         .then((res) => {
            if (res.request.status == 200) {
               message.success('Вы успешно зарегистрированы!')
               navigate('/login');
            }
         })
         .catch(() => message.error('Ошибка! ПРОВЕРЬТЕ ДАННЫЕ КОТОРЫЕ ВЫ ВВЕЛИ!'))
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };


   return (
      <div className='container'>
         <h1 className='title'>R|Redev</h1>
         <h2>Регистрация нового пользователя</h2>
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
               name="remember"
               valuePropName="checked"
               wrapperCol={{
                  offset: 8,
                  span: 16,
               }}
            >
               <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item
               wrapperCol={{
                  offset: 8,
                  span: 16,
               }}
            >
               <Button type="primary" htmlType="submit" >
                  Зарегистрироваться
               </Button>
            </Form.Item>
         </Form>



      </div>
   )
}

export default RegistrationPage