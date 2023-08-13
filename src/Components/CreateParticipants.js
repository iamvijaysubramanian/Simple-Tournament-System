import { useFormik } from "formik";
import React from "react";
import axios from "axios";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Please enter a value";
      }
      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "Name must be between 3 to 15 characters";
      }
      if (!values.email) {
        error.email = "Please enter an email address";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "Please enter a valid email address";
      }
      if (values.phone.toString().length !== 10) {
        error.phone = "Please enter a phone number";
      }
      let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
      if (age < 18) {
        error.dob = "You must be above 18 years old";
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
        const users = await axios.post(
          "https://634d63a6acb391d34a9c1ad0.mockapi.io/user",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.errors.name ? "error-box" : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"text"}
                className={`form-control ${
                  formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option value="">select</option>
                <option value="IN">India</option>
                <option value="US">America</option>
                <option value="CH">china</option>
                <option value="UK">United Kingdom</option>
                <option value="JP">Japan</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Dob</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
                type={"Date"}
                max={"2005-01-01"}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                } ${
                  formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                }`}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
