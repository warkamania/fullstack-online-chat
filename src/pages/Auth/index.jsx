import React from 'react'
import { Route } from 'react-router-dom'
import {LoginForm,RegisterForm} from '../../modules'
import '../Auth/Auth.scss'
const Auth = () => {
   
    return (
        <section className="auth">
         <div className="auth__content">
          
         <Route exact path={["/","/login"]} component={LoginForm}/>
         <Route exact path="/register" component={RegisterForm}/>
         </div>
          </section>
    )
        
         
}

export default Auth
 