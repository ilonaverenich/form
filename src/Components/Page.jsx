

function Page() {
   return (

      <div className="success">
         <h1> Вы успешно вошли!</h1>
         <h2>Ваш токен:</h2>
         {localStorage.getItem('token')}
      </div>
   )
}

export default Page