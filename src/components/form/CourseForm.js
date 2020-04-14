import React from 'react'

const CourseForm = (props) => {
  return (
    <form className="form-container" onSubmit={props.addCourse}>
      <input
        className="form-input"
        type="text"
        onChange={props.updateCourse}
        value={props.current}
      />
      <button type="submit" className="myButton">Add Course</button>
    </form>

  )
}


export default CourseForm