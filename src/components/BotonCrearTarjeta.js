import React, { Component } from 'react';
class BotonCrearTarjeta extends Component {
    state = {  }
    render() { 
        return ( 
            <button id="submit" className="btn-card btn-card--position btn-card--text boton-card--active" type="button" name="button">
                  <i className="far fa-address-card icon-card"></i>Crear tarjeta</button>
         );
    }
}
 
export default BotonCrearTarjeta;
