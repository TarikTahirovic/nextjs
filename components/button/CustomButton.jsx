import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const CustomButton = ({ color, width, variant, children, ...rest }) => {
    return (
        <Button variant={variant} color={color} sx={{ width }} {...rest}>
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    width: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
    color: 'primary',
    variant: 'contained',
};

export default CustomButton;
