import React, { Component } from 'react';
import CourseForm from './components/form/CourseForm'
import CoursesList from './components/list/CourseList';

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Jquery" }
    ],
    current: ''
  }

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }
  updateCourse = (e) => {
    console.log(e.target.value)
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({
      courses,
      current: ''
    })
  }

  editCourse = (index, value) => {
    let { courses } = this.state;
    let course = courses[index]
    course['name'] = value;
    this.setState({
      courses
    })

  }

  render() {
    const { courses } = this.state;
    const coursesList = courses.map((course, index) => {
      return <CoursesList
        editCourse={this.editCourse}
        details={course}
        key={index}
        index={index}
        deleteCourse={this.deleteCourse} />
    })
    return (
      <section className="App">
        <h2>Courses List</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current} />
        <ul className="list-container" >{coursesList}</ul>
      </section>
    );
  }
}

export default App;
