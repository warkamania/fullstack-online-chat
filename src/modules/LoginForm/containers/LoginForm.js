import { withFormik } from "formik"
import loginForm from "../components/loginForm"
import validateForm from "../../../utils/validate"


export default withFormik({
    mapPropsToValues:()=>({
        email:"",
        password:""
}),
    validate:values =>{
        let errors ={}
        const validate = validateForm({isAuth: true})
         Object.keys(values).forEach(key => validate[key] && validate[key](errors,values[key]))
        return errors;
          },
          handleSubmit:(values,{setSubmitting})=>{
              setTimeout(()=>{
                  alert(JSON.stringify(values,null,2))
                  setSubmitting(false)
              },1000)
          },
          displayName:"loginForm"
      })(loginForm)
            