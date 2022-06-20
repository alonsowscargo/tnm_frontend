// import React, { useState } from "react";
// import { useHistory } from "react-router";

// const CrudTableRow = ({ el, setDataToEdit, deleteData, myKey }) => {
//     let { name, constellation, id } = el;
//     let history = useHistory();

//     const [ocultar, setOcultar] = useState(false)
   

//     const handleEdit = () => {
//         setDataToEdit(el);
//         history.push(`/editar/${id}`);
//     };

//     return (
//         <>
//             <tr>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>jajaj</td>
//                 <td>{name}</td>
//                 <td>{constellation}</td>
//                 <td>
//                     <button onClick={handleEdit}>Editar</button>
//                     { serviceDetail === myKey ? 'si': 'no'}
//                 </td>
//             </tr>

//             <tr className={serviceDetail === myKey ? "card-detail show" : "card-detail"}>
//                 <td>detalle oculato</td>
//             </tr>
//         </>
//     );
// };

// export default CrudTableRow;