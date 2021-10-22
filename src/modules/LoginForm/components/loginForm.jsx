import React from 'react'
import {Button,Block} from '../../../components/'
import { Form, Input, } from 'antd'
import {  LockOutlined,MailOutlined } from '@ant-design/icons/lib/index'
import { Link } from 'react-router-dom'

const validate = (key,touched,errors) =>{
  if(touched.email && errors.email){
    return 'error'
  }else if(!touched.email){
    return ""
  }else {
    return "success"
  }
}


const loginForm = (props) => {
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
            <h2>Войти в аккаунт</h2>
            <p>Пожалуйста, войдите в свой аккаунт</p>  
            </div> 
         <Block>
         <Form
          onSubmit={handleSubmit}
      name="normal_login"
      className="login-form"
     
    >
     <Form.Item
        validateStatus={validate("email",touched,errors)} help={!touched.email ?"": errors.email} hasFeedback >
        <Input id="email" prefix={<MailOutlined />}  placeholder="E-Mail" size="large" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  />
      </Form.Item>
      <Form.Item
       validateStatus={!touched.password ?"": errors.password  ?"error":"success"} help={!touched.password ?"": errors.password}  hasFeedback 
      >  
        <Input
          id = "password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size="large"
          value={values.password} onChange={handleChange} onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Button  type="primary" htmlType="submit" className="login-form-button">
          Войти в аккаунт
        </Button>
      </Form.Item>
      <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
    </Form> 
        </Block>  
       
       </div>
    )
}

export default loginForm
