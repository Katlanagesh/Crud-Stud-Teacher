import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      student_name: "",
      subject: "",
      class: "",
      Total_student: "",
      mark: "",
      Percentage: "",
      remark: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.student_name === "") {
        errors.student_name = "Please Enter Student Name";
      }
      if (values.subject === "") {
        errors.subject = "Please Enter Subject Name";
      }
      if (values.class === "") {
        errors.class = "Please Enter class";
      }
      if (values.Total_student === "") {
        errors.Total_student = "Please Enter Total students";
      }
      if (values.mark === "") {
        errors.mark = "Please Enter marks";
      }
      if (values.remark === "") {
        errors.remark = "Please Enter remarks";
      }
      if (values.Percentage === "") {
        errors.Percentage = "Please Enter Percentage";
      }

      return errors;
    },

    onSubmit: async (values) => {
      await axios.post(
        "https://64118e936a69ae754520bddf.mockapi.io/Students",
        values
      );
      alert("New File Created Done");
      navigate("/Student");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="col-lg-6">
          <div>
            <label>Student Name </label>
            <input
              className={`form-control ${
                formik.errors.student_name ? `input-error` : ` `
              }`}
              type={"text"}
              value={formik.values.student_name}
              onChange={formik.handleChange}
              name="student_name"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.student_name}</span>
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
            <label>class</label>
            <input
              className={`form-control ${
                formik.errors.class ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.class}
              onChange={formik.handleChange}
              name="class"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.class}</span>
          </div>

          <div>
            <label>Total_student</label>
            <input
              className={`form-control ${
                formik.errors.Total_student ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.Total_student}
              onChange={formik.handleChange}
              name="Total_student"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Total_student}</span>
          </div>

          <div>
            <label>Marks</label>
            <input
              className={`form-control ${
                formik.errors.mark ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.mark}
              onChange={formik.handleChange}
              name="mark"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.mark}</span>
          </div>

          <div>
            <label>Percentage</label>
            <input
              className={`form-control ${
                formik.errors.Percentage ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.Percentage}
              onChange={formik.handleChange}
              name="Percentage"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Percentage}</span>
          </div>

          <div>
            <label>Remarks</label>
            <input
              className={`form-control ${
                formik.errors.remark ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.remark}
              onChange={formik.handleChange}
              name="remark"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.remark}</span>
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

export default CreateStudent;
