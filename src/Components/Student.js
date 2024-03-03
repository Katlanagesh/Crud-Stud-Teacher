import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  Space } from 'antd'

function Student() {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    studentData();
  }, []);

  let studentData = async () => {
    setLoading(true);
    let student = await axios.get(
      "https://64118e936a69ae754520bddf.mockapi.io/Students"
    );
    console.log(student);
    setStudent(student.data);
    setLoading(false);
  };

  let studentDelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are You Sure! Do You Want To Delete This Data?"
      );
      if (ask) {
        await axios.delete(
          `https://64118e936a69ae754520bddf.mockapi.io/Students/${id}`
        );
      }
      studentData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Student Details</h1>
        <Link
          to="/CreateStudent"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Add Student
        </Link>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Students Records</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Student_name</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Mark</th>
                    <th>Total-Student</th>
                    <th>Percentage %</th>
                    <th>remark</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {student.map((list, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{list.student_name}</td>
                        <td>{list.class}</td>
                        <td>{list.subject}</td>
                        <td>{list.mark}</td>
                        <td>{list.Total_student}</td>
                        <td>{list.Percentage}</td>
                        <td>{list.remark}</td>
                        <td>
                        <Space wrap>
                          <Link
                            to={`/studentedit/${list.id}`}
                            className=" btn btn-success"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => {
                              studentDelete(list.id);
                            }}
                            className="btn btn-primary"
                          >
                            Delete
                          </button>
                          </Space>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;
