window.addEventListener('DOMContentLoaded', e =>{

  fetch('http://localhost:3000/calendario')
  .then(res => res.json())
  .then(data =>{
            const todos = data.doc;
            var materia = 0;
            todos.forEach(todo =>{
                
                materia = materia + 1;    
               document.querySelector('#prueba').innerHTML +=`

    <tr>   <th>Solicitud #${materia}       </th>  
    
	<td>      ${todo.materia}              </td>
    <td>      ${todo.id_lab}               </td>
    <td>      ${todo.nombres}              </td>
    <td>      ${todo.dia}                  </td>
    <td>      ${todo.hora_solicitada}      </td>
    <td>      ${todo.turno}                </td>
</tr>

`
         
            });
        
    })
   .catch(err =>{
       console.error(err);
   });
 
     
 });
 