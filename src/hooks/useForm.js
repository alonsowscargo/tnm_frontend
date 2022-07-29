import { useState } from "react"
import { helpHttp } from "../helpers/HelpHttp"

export const useForm = (initialForm, validateForm) => {

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({
    error: "errorDefault"
  })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [newData, setNewData] = useState([])
  // const [editData, setEditData] = useState(null)
  // console.log("newData -----", newData)

  // obtener el valor del input
  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  // obtener el valor del true o false del check
  const handleCheckend = (e) => {
    const { name, checked } = e.target
    setForm({
      ...form,
      [name]: checked,
    })
  }

  // onBlur para detectar errores (input)
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }

  // enviando formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      // alert("enviando")
      setLoading(true)
      helpHttp()
        .post("https://formsubmit.co/ajax/alonsotrina22@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        })
        .then((res) => {
          setLoading(false)
          setResponse(true)
          createData(form)
          setForm(initialForm)
          setErrors({ error: "errorDefault" })
          setTimeout(() => setResponse(false), 3000);
        });
    } else {
      return
    }
  }

  // crear nueva data
  const createData = (data) => {
    data.id = Date.now();
    setNewData([...newData, data]);
  }

  // useEffect(() => {
  //   if (editData) {
  //       setForm(editData);
  //   } else {
  //       setForm(initialForm)
  //   }

  // }, [editData])

  return {
    form,
    loading,
    errors,
    response,
    newData,
    setForm,
    setErrors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleCheckend
  }
}
