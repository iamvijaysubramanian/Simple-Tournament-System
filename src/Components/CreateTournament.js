import { useFormik } from "formik";
import React from "react";
import axios from "axios";

function Tournamentcreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      startdate: "",
      enddate: "",
      address: "",
      phone: "",
      status: "",
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
      return error;
    },

    onSubmit: async (values) => {
      try {
        const tournaments = await axios.post(
          "https://634d63a6acb391d34a9c1ad0.mockapi.io/teachers",
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
              <label>TournamentName</label>
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
              <label>Email Address</label>
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
              <label>StartDate</label>
              <input
                name="startdate"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                type={"Date"}
                min={"2023-01-01"}
                max={"2030-12-12"}
                className={`form-control ${
                  formik.errors.startdate ? "error-box" : ""
                } ${
                  formik.touched.startdate && !formik.errors.startdate
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.startdate && formik.errors.startdate ? (
                <span style={{ color: "red" }}>{formik.errors.startdate}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>EndDate</label>
              <input
                name="enddate"
                onChange={formik.handleChange}
                value={formik.values.enddate}
                type={"Date"}
                min={"2023-01-01"}
                max={"2030-12-12"}
                className={`form-control ${
                  formik.errors.enddate ? "error-box" : ""
                } ${
                  formik.touched.enddate && !formik.errors.enddate
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.enddate && formik.errors.enddate ? (
                <span style={{ color: "red" }}>{formik.errors.enddate}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Phone Number</label>
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
              <label>Status</label>
              <select
                name="status"
                onChange={formik.handleChange}
                value={formik.values.status}
                className="form-control"
              >
                <option value="">select</option>
                <option value="">Upcoming</option>
                <option value="">Ongoing</option>
                <option value="">Completed</option>
              </select>
            </div>
          </div>
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

export default Tournamentcreate;
