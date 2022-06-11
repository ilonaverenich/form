
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';
import Main from './Components/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page from './Components/Page';



const App = () => {

  
      return (<div>
        <BrowserRouter>

        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='*' element={<Main/>}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/success' element={<Page/>}></Route>
          <Route path='/registor' element={<RegistrationPage/>}></Route>
        </Routes>
        
        </BrowserRouter>     
      </div>
)}

export default App;