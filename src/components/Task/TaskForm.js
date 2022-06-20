import React, {useState, useEffect} from 'react'
import Form from '../form/Form'
import Field from '../form/Field'
import Button from '@material-ui/core/Button';
import { useHistory, useParams} from "react-router";
import CircularProgress from '@material-ui/core/CircularProgress';


const initailForm = {
    title: "",
    description: "",
};

const TaskForm = () => {
    const history = useHistory();
    const params = useParams();


    // const[task, setTask] = useState({})
    const[task, setTask] = useState(initailForm);
    const[edit, setEdit] = useState(false)

    const[loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if(edit) {
            console.log("ediat...")
            await fetch(`http://localhost:3000/api/task/${params.id}`, {
                method: "PUT",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify(task),
            });
        } else  {
            await fetch("http://localhost:3000/api/task", {
                method: "POST",
                body: JSON.stringify(task),
                headers: {"content-Type": "application/json"},
            });
        }

        setLoading(false)
        history.push("/app/documentacion");
    };

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const loadTak = async (id) => {
        const res = await fetch(`http://localhost:3000/api/task/${id}`)
        const data = await res.json()
        //setTask(data)
        setTask({title: data.title, description: data.description})
        setEdit(true)

    }

    useEffect(() => {
        if(params.id) {
            loadTak(params.id)
        }
    },[params.id])

    return (
        <Form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 mb-2">
                    <h3 className="text font-weight-600 text-dange pl-3">

                        { edit ?  "editar tarea": "crea tarea"}
                    </h3>
                </div>

                <div className="col-3">
                    <Field
                        label="Título"
                        type="text"
                        placeholder="Titulo"
                        name="title"
                        onChange={handleChange}
                        value={task.title}
                        fullWidth
                    />
                </div>

                <div className="col-3">
                    <Field
                        label="Descripción"
                        type="text"
                        placeholder="Descripción"
                        name="description"
                        onChange={handleChange}
                        value={task.description}
                        fullWidth
                    />
                </div>

                <div className="col-3 pt-3">
                    

                    <Button
                        variant="outlined"
                        size="large"
                        type="submit"
                        color="secondary"
                        fullWidth
                        disabled={!task.title || !task.description}
                        // startIcon={<BsFileEarmarkText />}
                        // color="secondary"
                    >
                        { loading ? <CircularProgress color="inherit" size={24} />: "Guardar"}
                    </Button>
                </div>
            </div>
        </Form>
    )
}

export default TaskForm