import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    return (
        <div className="legend__container js__dropdown-title">
<<<<<<< HEAD
          {this.props.children}
=======
          <legend className="fieldset__legend">
            <i className="far fa-object-ungroup icon__primary--medium"></i>
            <span className="text__dark--title">diseña</span>
          </legend>
          <i className="fas fa-angle-up arrow legend__arrow icon__rotation"></i>
>>>>>>> aeb31939b83767346e7adf0ae7ef1ba193eabdcb
        </div>
    );
  }
}

export default Collapsible;
