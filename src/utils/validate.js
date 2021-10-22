// eslint-disable-next-line import/no-anonymous-default-export
export default ({isAuth})=>({

    email: (errors,value) =>{
        if(!value){
            errors.email = "Введите email"
        }else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              errors.email = 'Введён не корректный email адрес';
            }
    },


    password: (errors, value) =>{
        if(!value){
            errors.password = "Введите пароль"
        }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)){
           errors.password = isAuth ? "Неверный пароль" : 'Слишком лёгкий пароль'
        }
    }
     
    

})
 