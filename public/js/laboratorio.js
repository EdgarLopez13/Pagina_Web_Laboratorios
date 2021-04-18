window.addEventListener('DOMContentLoaded', e =>{

    fetch('http://localhost:3000/solicitud')
    .then(res => res.json())
    .then(data =>{
          if (data.turno = 'MATUTINO'){
              const todos = data.doc;
   
              todos.forEach(todo =>{
                 document.querySelector('#formulario').innerHTML +=` 
             
                 <title>Solicitud de laboratorio</title>
               </head>
               <body>
                <form action="/laboratorio" method="POST" class="contact-box">
                    <div class="row no-gutters bg-dark">
                        <div class="col-xl-5 col-lg-12 register-bg">
                         <div class="position-absolute testiomonial p-4">
                             <h3 class="font-weight-bold text-light">La siguiente revolución digital.</h3>
                             <p class="lead text-light">La nueva etapa de la revolución digital se aproxima.</p>
                         </div>
                        </div>
                        <div class="col-xl-7 col-lg-12 d-flex">
                             <div class="container align-self-center p-6">
                             <h1 class="font-weight-bold mb-3">Solicitud de Laboratorio</h1>
                                 <p span class="text-danger">*</span></label>Ingresa la siguiente información para completar su solicitud.</p>
                                <div class="form-group mb-3">
                                     <label class="font-weight-bold">Matricula <span class="text-danger">*</span></label>
                                         <input id="matricula"  name="matricula" value="${todo.matricula}" type="text" class="form-control" placeholder="Matricula">
                                     </div>
                                     <div class="form-row mb-2">
                                         <div class="form-group col-md-6">
                                             <label class="font-weight-bold">Nombre<span class="text-danger">*</span></label>
                                             <input id="nombres" name="nombres" value="${todo.nombres}" type="text" class="form-control" placeholder="Nombre">
                                         </div>
                                         <div class="form-group col-md-6">
                                             <label class="font-weight-bold">Apellidos <span class="text-danger">*</span></label>
                                             <input id="apellidos" name="apellidos" value="${todo.apellidos}" type="text" class="form-control" placeholder="Apellidos">
                                       </div>
                                     </div>
                                     <div class="form-row mb-2">
                                     <div class="form-group col-md-6">
                                        <label class="font-weight-bold">Materia <span class="text-danger">*</span></label>
                                         <select  id="materia" name="materia"  class="form-control">
                                         <option  disabled selected="">Seleccione La Materia</option>
                                         <option>SW</option>
                                         <option>AWM</option>
                                         <option>BD</option>
                                         <option>EOyE</option>
                                         <option>IOT II</option>
                                       </select>     
                                     </div> 
                                     <div class="form-group col-md-6">
                                       <label class="font-weight-bold">Laboratorio <span class="text-danger">*</span></label>
                                         <select  id="id_lab" name="id_lab" class="form-control">
                                         <option  disabled selected="">Seleccione El Laboratorio</option>
                                         <option>TI01</option>
                                         <option>TI02</option>
                                         <option>TI03</option>
                                         <option>TI04</option>
                                       </select>      
                                       </div>
                                     </div>
                                     <div class="form-row mb-2">
                                         <div class="form-group col-md-6">
                                         <label class="font-weight-bold">Turno <span class="text-danger">*</span></label>
                                         <select id="turno" name="turno" class="form-control">
                                         <option  disabled selected="">Seleccione El Turno</option>
                                       <option>MATUTINO</option>
                                       <option>VESPERTINO</option>
                                       </select> 
                                       </div>
                                       <div class="form-group col-md-6">                       
                                       <label class="font-weight-bold">Dia <span class="text-danger">*</span></label>
                                         <select  id="dia" name="dia" class="form-control">
                                         <option  disabled selected="">Seleccione El Día</option>
                                         <option>LUNES</option>
                                         <option>MARTES</option>
                                         <option>MIERCOLES</option>
                                         <option>JUEVES</option>
                                         <option>VIERNES</option>
                                       </select>
                                   </div>
                                 </div>
                                 <div class="form-row mb-2">
                                         <div class="form-group col-md-6">
                                         <label class="font-weight-bold">Seleccione La Fecha <span class="text-danger">*</span></label>
                                         <input id="dia_apartado"  name="dia_apartado" type="date" class="form-control" placeholder="Fecha">
                                         </div>
                                         <div class="form-group col-md-6">
                                     <label class="font-weight-bold">Seleccione La Hora <span class="text-danger">*</span></label>
                                         <input id="hora_solicitada"  name="hora_solicitada" type="time" class="form-control" placeholder="Hora">
                                     </div>
                                 </div>
                                     <a href="login.html"><button type="button"button type="submit" class="btn btn-primary width-100">Regresar</button></a>
                                    <button  type="submit" class="btn btn-primary width-100">Solicitar</button><br>
                                 </form>
                                 <small class="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2019 Templune</small>
                             </div>
                        </div>
                    </div>
                 </form>
  `
               
              });
          }
      })
     .catch(err =>{
         console.error(err);
     });
   
       
   });
   