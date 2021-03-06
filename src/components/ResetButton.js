import React, { Component } from 'react';

class ResetButton extends Component {
    render() {
        const { actionReset } = this.props;
        return (
            <button className="button-reset" onClick={actionReset}>
                <i className="far fa-trash-alt button-reset__icon"></i>
                <span className="button-reset__text">reset</span>
            </button>
        );
    }
}

export default ResetButton;
