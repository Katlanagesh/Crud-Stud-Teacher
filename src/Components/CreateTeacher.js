import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTeacher() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Teachername: "",
      subject: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.Teachername === "") {
        errors.Teachername = "Please Enter Teacher Name";
      }
      if (values.subject === "") {
        errors.subject = "Please Enter Subject Name";
      }
      if (values.salary === "") {
        errors.salary = "Please Enter Salary";
      }

      return errors;
    },

    onSubmit: async (values) => {
      await axios.post(
        "https://64c25aadeb7fd5d6ebcfb062.mockapi.io/Teachers",
        values
      );
      alert("New File Created Done");
      navigate("/teacher");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="col-lg-6">
          <div>
            <label>Teacher Name </label>
            <input
              className={`form-control ${
                formik.errors.Teachername ? `input-error` : ` `
              }`}
              type={"text"}
              value={formik.values.Teachername}
              onChange={formik.handleChange}
              name="Teachername"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Teachername}</span>
          </div>

          <div>
            <label>Subject</label>
            <input
              className={`form-control ${
                formik.errors.subject ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.subject}
              onChange={formik.handleChange}
              name="subject"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.subject}</span>
          </div>

          <div>
            <label>Salary</label>
            <input
              className={`form-control ${
                formik.errors.salary ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.salary}</span>
          </div>

          <div className="col-lg-6">
            <input
              className="btn btn-primary mt-2"
              type={"submit"}
              values="Submit"
              disabled={!formik.isValid}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTeacher;
