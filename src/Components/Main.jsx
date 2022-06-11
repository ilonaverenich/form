import { useNavigate } from 'react-router-dom';
import { Button } from 'antd'


function Main() {
   const navigate = useNavigate()
   return (<div className='container'>
      <h1 className='title'>R|Redev</h1>

      <div className='mainPage'>
         <Button type="primary" onClick={() => navigate('/login')}>Войти</Button>
         <Button type="primary" onClick={() => navigate('/registor')}>Зарегистрироваться</Button>
      </div>
   </div>
   )
}
export default Main