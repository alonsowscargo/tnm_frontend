import { useState } from "react"
import { helpHttp } from "../helpers/HelpHttp"


export const useFormSearch = (initialForm) => {

    const [form, setForm] = useState(initialForm)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
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
                setForm(initialForm)
            });

        // if(Object.keys(errors).length === 0){
        //     setLoading(true)
        //     helpHttp()
        //     .post("https://formsubmit.co/ajax/alonsotrina22@gmail.com", {
        //         body: form,
        //         headers: {
        //             "Content-Type":"application/json",
        //             Accept:"application/json",
        //         }
        //     })
        //     .then((res)=> {
        //         setLoading(false)
        //         setResponse(true)
        //         setForm(initialForm)
        //     });
        // } else {
        //     return
        // }
    }

    return {
        form,
        loading,
        response,
        handleChange,
        handleSubmit,
    }
}

//export default 


