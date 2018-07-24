import React from 'react';
import PropTypes from 'prop-types';

class GridToggle extends React.Component {
    render() {
        return (
            <div>
                <label>Show grid</label>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.handleToggle}/>
            </div>
        );
    }
}

export default GridToggle;

GridToggle.propTypes = {
    checked: PropTypes.bool,
    handleToggle: PropTypes.func.isRequired
};

GridToggle.defaultProps = {
    checked: true,
};
