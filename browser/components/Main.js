import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";

class Main extends Component {
  state = { students: [], selectedStudent: {} };

  async componentDidMount() {
    try {
      const { data } = await axios.get("/student");
      console.log(data);
      this.setState({ students: data });
    } catch (err) {
      console.log(err);
    }
  }

  getStudent = student => {
    this.setState({ ...this.state, selectedStudent: student });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Test</th>
            </tr>
          </thead>
          <StudentList {...this.state} getStudent={this.getStudent} />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent selectedStudent={this.state.selectedStudent} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Main;
