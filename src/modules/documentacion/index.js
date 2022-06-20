import React, { useEffect, useState } from "react";
// import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const CrudApi = () => {
  const history = useHistory();

  const [allTasks, setAllTasks] = useState([])


  const loadTasks = async () => {
    const response = await fetch("http://localhost:3000/api/task")
    const data = await response.json()
    setAllTasks(data)
  }
  


  const handleDelete = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "DELETE",
        })

        setAllTasks(allTasks.filter(task => task.id !== id));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])


  return (
    <div>
      <Button onClick={() => history.push("documentacion/agregar")}>Agregar</Button>


      {
        allTasks.map((item, index) => (
          <Card key={index} style={{ marginBottom: "12px" }}>
            <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {item.description}
                </Typography>
              </div>

              <div>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  // fullWidth
                  onClick={() => history.push(`documentacion/${item.id}/editar`)}
                >
                  Editar
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  // fullWidth
                  onClick={() => handleDelete(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            </CardContent>
            {/* <CardActions>

            </CardActions> */}
          </Card>
        ))
      }
    </div>
  );
};

export default CrudApi;
