import React from 'react';
import PropTypes from 'prop-types';
const NoHubo = (props) => {
    return (
        <div className='agotado'>
            <h2>No hubo</h2>
            <ul>
          

            <li style={{opacity:0.5}}>
            {props.lista}
               
               </li>
               {/* ))} */}

            </ul>
        </div>
    );
}
NoHubo.propTypes = {
	lista: PropTypes.array.isRequired,
	
}

export default NoHubo;
