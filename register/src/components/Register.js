import React from "react";
import "./style.scss";

export class Register extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Firstname">First name</label>
              <input required="required" type="text" name="First name" placeholder="First name" />
            </div>
            <div className="form-group">
              <label htmlFor="Lastname">Last name</label>
              <input type="text" name="Lastname" placeholder="Last name" />
            </div>
            <div className="form-group">
              <label htmlFor="Phone number">Phone number</label>
              <input type="text" name="Phonenumber" placeholder="Phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="Issue">Issue</label>
              <input type="text" name="Issue" placeholder="Issue" />
            </div>
            <div className="form-group">
              <label htmlFor="Appointment Date">Appointment Date</label>
              <input type="date" name="Appointmen Date" placeholder="Appointmen Date" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}