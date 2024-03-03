import { useFormik } from "formik";
import React from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TeacherEdit() {
  const params = useParams();
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
      await axios.put(
        `https://64c25aadeb7fd5d6ebcfb062.mockapi.io/Teachers/${params.id}`,
        values
      );
      navigate("/Teacher");
    },
  });
  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://64c25aadeb7fd5d6ebcfb062.mockapi.io/Teachers/${params.id}`
      );
      formik.setValues({
        Teachername: user.data.Teachername,
        subject: user.data.subject,
        salary: user.data.salary,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="col-lg-6">
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
            <span>{formik.errors.subject}</span>

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
            <span>{formik.errors.salary}</span>

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

export default TeacherEdit;
