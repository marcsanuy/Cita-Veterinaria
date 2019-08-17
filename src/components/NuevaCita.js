import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = { 
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        síntomas : ''
    },
    error: false
    
 }

class NuevaCita extends Component {
    state = { ...stateInicial }

     //Cuando el usuario escribe en los campos
     handleChange = e => {
         //insertar lo que el usuario escribe en el state
         this.setState({
             cita : {
                 ...this.state.cita,
                 [e.target.name] : e.target.value
             }
         })
     }

     //Cuando el usuario envia el formulario
     handleSubmit = e => {
         e.preventDefault();

         //Extraer valores del state
         const { mascota, propietario, fecha, hora, síntomas }= this.state.cita;

         //Validar que los campos estén completados
         if(mascota === '' || propietario === '' || fecha === '' || hora === '' || síntomas === ''){
            this.setState({
                error: true
            });
            //detener ejecución
            return;
         }

         //generar objeto con los datos
         const nuevaCita = {...this.state.cita};
         nuevaCita.id = uuid();

         //Agregar la cita al state de App
         this.props.crearNuevaCita(nuevaCita)

         //Colocar en el state el stateInicial
         this.setState({
             ...stateInicial
         })

     }

    render() { 

        //extraer el valor del state
        const { error } = this.state

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Rellene los campos para solicitar nueva cita.
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        Debe rellenar todos los campos</div> : null }

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                             <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                                <div className="col-sa-8 col-lg-10">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota" 
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}                                   
                                    />
                                </div> 
                        </div>  

                        <div className="form-group row">
                             <label className="col-sm-4 col-lg-2 col-form-label">Dueño Mascota</label>
                                <div className="col-sa-8 col-lg-10">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}                                    
                                    />
                                </div> 
                        </div>  

                        <div className="form-group row">
                             <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                <div className="col-sa-8 col-lg-4">
                                    <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}                                    
                                    />
                                </div> 

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                <div className="col-sa-8 col-lg-4">
                                    <input 
                                    type="time"
                                    className="form-control"
                                    name="hora" 
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}                                   
                                    />
                                </div> 
                        </div>  

                        <div className="form-group row">
                             <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                                <div className="col-sa-8 col-lg-10">
                                    <textarea 
                                    className="form-control" 
                                    name="síntomas"
                                    placeholder="Descripción de la Sintomatología"
                                    onChange={this.handleChange}
                                    value={this.state.cita.síntomas}
                                    ></textarea>
                                </div> 
                        </div>  
                       
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Cita" />
                        
                    </form>
                    


                </div>

            </div>
         );
    }
}
 
export default NuevaCita;