import React from "react";
import "bulma/css/bulma.css";

class FormField extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="formField">
        <label className="label">{this.props.label}</label>
        <input type={this.props.type} className="input" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default FormField;
