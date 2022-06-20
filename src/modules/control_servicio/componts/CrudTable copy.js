import React, {useState} from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {

    const [serviceDetail, setServiceDetail] = useState(null)

    const handleOcultar = (myKey) => {
        // setOcultar(!ocultar);
        console.log(myKey)
        if (serviceDetail === myKey){
            return setServiceDetail(null)
        }
        setServiceDetail(myKey);
    };

    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>rr</th>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el, index) => (
                            <CrudTableRow
                                key={el.id}
                                myKey={index}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                                handleOcultar={handleOcultar}
                                serviceDetail={serviceDetail}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="11">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTable;