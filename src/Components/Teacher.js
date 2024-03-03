import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {  Space } from 'antd' ;

function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    teachersData();
  }, []);

  let teachersData = async () => {
    setLoading(true);
    let teacher = await axios.get(
      "https://64c25aadeb7fd5d6ebcfb062.mockapi.io/Teachers"
    );
    console.log(teacher);

    setTeacher(teacher.data);
    setLoading(false);
  };
  let Delete = async (id) => {
    try {
      let ask = window.confirm(
        "Are You Sure! Do You Want To Delete This Data?"
      );
      if (ask) {
        await axios.delete(
          `https://64c25aadeb7fd5d6ebcfb062.mockapi.io/Teachers/${id}`
        );
      }
      teachersData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Management</h1>
        <Link
          to="/CreateTeacher"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Add Teacher
        </Link>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Teachers Records
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Teacher_name</th>
                    <th>Subject</th>
                    <th>Salary </th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {teacher.map((user, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.Teachername}</td>
                        <td>{user.subject}</td>
                        <td>₹ {user.salary}</td>
                        <td >
                       <Space wrap>
                          <Link
                            to={`/teacheredit/${user.id}`}
                            className=" btn btn-success" 
                          >
                            Edit
                          </Link>

                          <button 
                            onClick={() => {
                              Delete(user.id);
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

export default Teacher;
