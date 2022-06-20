import { useState , useEffect} from "react"
import { helpHttp } from "../helpers/HelpHttp"
import { data } from "../modules/control_servicio/data";


export const useForm = (initialForm, validateForm) => {
    const [db, setDb] = useState(data);
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({
        error: "errorDefault"
    })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null);




    // const createData = (data) => {
    //     data.id = Date.now();
    //     console.log(data);
    //     setDb([...db, data]);
    // };

    // const createData2 = (data) => {
    //     data.id = Date.now();
    //     console.log(data);
    //     // setPrueba([...prueba, data]);
    //     let tem = prueba;
    //     tem.push(data)
    //     console.log(tem)
    //     setPrueba(tem)
    // };

    const updateData = (data) => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
    };


    // useEffect(() => {
    //     if (dataToEdit) {
    //         setForm(dataToEdit);
    //     } else {
    //         setForm(initialForm);
    //     }
    // }, [dataToEdit]);


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }


    const handleCheckend = (e) => {
        const { name, checked } = e.target
        setForm({
            ...form,
            [name]: checked,
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors(validateForm(form));

    //     if (Object.keys(errors).length === 0 ) {

    //         // if (form.id != null  ) {
    //         //     //createData(form);
    //         //     updateData(form);
    //         //    // createData2(form);
    //         // }
    //         // alert("enviando")
    //         //updateData(form);
    //         setLoading(true)
    //         helpHttp()
    //             .post("https://formsubmit.co/ajax/alonsotrina22@gmail.com", {
    //                 body: form,
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Accept: "application/json",
    //                 }
    //             })
    //             .then((res) => {
    //                 setLoading(false)
    //                 setResponse(true)
    //                 setForm(initialForm)
    //                 setTimeout(() => setResponse(false), 5000);
    //             });
    //     } else {
    //         return
    //     }
    //     handleReset();
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        if (form.id != null  ) {
          //createData(form);
          updateData(form);
          //createData2(form);
        } 
        // else {
        //   updateData(form);
        //   createData2(form);
        // }
    
        setLoading(true);
        helpHttp()
          .post("https://formsubmit.co/ajax/alonsotrina22@gmail.com", {
            body: form,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          .then((res) => {
            //setTimeout(() => setLoading(false), 4000);
            setLoading(false)
            setResponse(true);
            setForm(initialForm);
          });
    
        handleReset();
      };

    const handleReset = () => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return {
        db,
        form,
        loading,
        errors,
        response,
        dataToEdit,
        setResponse,
        setDataToEdit,
        handleBlur,
        handleChange,
        handleSubmit,
        handleCheckend,
        handleReset
    }
}

//export default 


