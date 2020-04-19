import React, { Component, Fragment } from 'react'

class CourseList extends Component {
  state = {
    isEdit: false
  }

  renderCourse = (props) => {
    return (
      <li className="course-list" s>
        <span>{this.props.details.name}</span>
        <i className="fas fa-pen-square " onClick={() => { this.toggleState() }}  ></i>
        <i className="fas fa-trash-alt " onClick={() => { this.props.deleteCourse(this.props.index) }}></i>

      </li>

    )
  }

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value)
    if (this.input.value.trim() !== "") {
      this.toggleState()
    }

  }

  renderUpdateForm = () => {

    return (
      <form onSubmit={this.updateCourseItem}>
        <input className="form-input"
          type="text" ref={(v) => { this.input = v }} defaultValue={this.props.details.name} />
        <button className="myButton">Update</button>
      </form>
    )
  }


  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }

  render() {
    let { isEdit } = this.state
    return (
      <Fragment >
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList