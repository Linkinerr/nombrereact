import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"

const CheckoutFormik = () => {
    const {handleChange, handleSubmit} = useFormik({
        initialValues: {nombre: "", apellido:"", email: ""},
        onSubmit: (data) => {
            console.log("se envio")
            console.log(data)
        },
        validateOnChange: false,

        validationSchema: Yup.object({
            nombre: Yup.string().required().min(5).max(20)
        })
        
    })

    
    
  return (
    <div style={{padding: "50px"}}>
        <form onSubmit={handleSubmit}>
        <TextField  label="Nombre" variant="outlined" name="nombre" onChange={handleChange} />
        <TextField  label="Apellido" variant="outlined" name="apellido" onChange={handleChange} />
        <TextField  label="Email" variant="outlined" name="email" onChange={handleChange} />
        
        <Button
    style={{
        borderRadius: 35,
        backgroundColor: "#800080",
        padding: "10px 16px",
        fontSize: "18px"
    }}
    variant="contained"
    >
Enviar
</Button>
<Button
    style={{
        borderRadius: 35,
        backgroundColor: "#800080",
        padding: "10px 16px",
        fontSize: "18px"
    }}
    variant="contained"
    >
Cancelar
</Button>
        </form>

    </div>
  )
}

export default CheckoutFormik
