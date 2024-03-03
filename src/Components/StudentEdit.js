import { useFormik } from "formik";
import React from "react";

import axios from "axios";
import { navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function StudentEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      student_name: "",
      class: "",
      subject: "",
      marks: "",
      Total_student: "",
      Percentage: "",
      remark: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.student_name === "") {
        errors.student_name = "Please Enter Teacher Name";
      }

      if (values.class === "") {
        errors.class = "Please Enter Class Name";
      }

      if (values.subject === "") {
        errors.subject = "Please Enter Subject Name";
      }

      if (values.Total_student === "") {
        errors.Total_student = "Please Enter Total_student";
      }
      if (values.marks === "") {
        errors.marks = "Please Enter marks";
      }

      if (values.Percentage === "") {
        errors.Percentage = "Please Enter Percentage";
      }

      if (values.remark === "") {
        errors.remark = "Please Enter Remark";
      }

      return errors;
    },

    onSubmit: async (values) => {
      await axios.put(
        `https://64118e936a69ae754520bddf.mockapi.io/Students/${params.id}`,
        values
      );
      navigate("/Student");
    },
  });
  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://64118e936a69ae754520bddf.mockapi.io/Students/${params.id}`
      );
      formik.setValues({
        student_name: user.data.student_name,
        class: user.data.class,
        subject: user.data.subject,
        Total_student: user.data.Total_student,
        marks: user.data.mark,
        Percentage: user.data.Percentage,
        remark: user.data.remark,
      });
    } catch (error) {}
  };
  return (
    <>
      <div className="container" style={{ alignItems: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <div className="col-lg-6">
            <label>Student_name </label>
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

            <label>Class </label>
            <input
              className={`form-control ${
                formik.errors.class ? `input-error` : ``
              }`}
              type={"text"}
              value={formik.values.class}
              onChange={formik.handleChange}
              name="class"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.class}</span>

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

            <label>Total-Student</label>
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

            <label>marks</label>
            <input
              className={`form-control ${
                formik.errors.Total_student ? `input-error` : ""
              }`}
              type={"text"}
              value={formik.values.marks}
              onChange={formik.handleChange}
              name="marks"
            ></input>
            <span style={{ color: "red" }}>{formik.errors.marks}</span>

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

            <label>Remark </label>
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

            <div className="mt-4 text-center">
              <input
                className="btn btn-primary"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentEdit;
