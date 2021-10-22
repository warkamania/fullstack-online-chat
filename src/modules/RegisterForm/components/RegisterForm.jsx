import React from 'react'
import {Button,Block} from '../../../components'
import { Form, Input, } from 'antd'
import { UserOutlined, LockOutlined,MailOutlined,InfoCircleTwoTone  } from '@ant-design/icons/lib/index'
import { Link } from 'react-router-dom'


const RegisterForm = props => {
    const success = false
    const{
      handleSubmit,
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      isValid,
      dirty,
    } = props
    return (
       <div>
           <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироватся  </p>  
            </div> 
         <Block>
         {!success ? 
         (<Form 
          onSubmit={handleSubmit}
      name="normal_login"
      className="login-form"
     
    >
      <Form.Item
        validateStatus={!touched.email ?"": errors.email  ?"error":"success"} help={!touched.email ?"": errors.email} hasFeedback >
        <Input id="email" prefix={<MailOutlined />}  placeholder="E-Mail" size="large" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  />
      </Form.Item>
      <Form.Item
       
      >  
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="user"
          placeholder="Ваше имя"
          size="large"
        />
      </Form.Item>
      <Form.Item
       validateStatus={!touched.password ?"": errors.password  ?"error":"success"} help={!touched.password ?"": errors.password}  hasFeedback 
       >  
         <Input
           id="password"
           prefix={<LockOutlined className="site-form-item-icon" />}
           type="password"
           placeholder="Пароль"
           size="large"
           value={values.password}
           onChange={handleChange} onBlur={handleBlur}
         />
       </Form.Item>
       <Form.Item
        
       >  
         <Input
           prefix={<LockOutlined className="site-form-item-icon" />}
           type="password"
           placeholder="Повторите пароль"
           size="large"
         />
       </Form.Item>
      <Form.Item>
        {dirty && !isValid && <span>Ошибка!</span>}
        <Button onClick={handleSubmit} type="primary" htmlType="submit" className="login-form-button">
        Зарегистрироваться
        </Button>
      </Form.Item>
      <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
    </Form>) : 
             (<div className="auth__success-block">
                <div>
                <InfoCircleTwoTone  />
                </div>
                <h2>Подтвердите свой аккаунт</h2>
                <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
             </div>)
             }
    
        </Block>  
       
       </div>
    )
}

export default RegisterForm
