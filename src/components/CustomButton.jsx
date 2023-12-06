import React from 'react'
import PropTypes from 'prop-types';

function CustomButton({label, cls, clickHandler}) {
    return (            
        <div className={cls} onClick={() =>clickHandler(label)} >{label}</div>
    )
}
CustomButton.propTypes = {
    label: PropTypes.string,
    cls: PropTypes.string,
    clickHandler: PropTypes.func,
}
export default CustomButton