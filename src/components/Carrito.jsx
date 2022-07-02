import React from 'react';
import PropTypes from 'prop-types';


const Carrito = (props) => {
    return (
        <div className='carrito'>
            <h2>En el carrito</h2>
            <ul>
                {/* {props.listaCar.map((objeto_carro,key)=>( */}
                    <li 
                    // key={key}
                    >
                    { props.listaCar}
                    {/* /* {objeto_carro}
                     */} 
                    </li>
                {/* )
                
                )} */}
            </ul>
        </div>
    );
}
Carrito.propTypes = {
	listaCar: PropTypes.array.isRequired,

}

export default Carrito;
