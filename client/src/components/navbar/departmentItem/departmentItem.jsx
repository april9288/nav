import React from 'react';
import style from './departmentItem.css'

const DepartmentItem = (props) => {

  const inlineDep = {
    float: 'left',
    width: (100 / props.total) + '%',
    // height:'50px'
    // position: 'absolute'
    
  }

  return (
    <div style={inlineDep}>
      <span className={style.departments} onMouseOver={() => {props.getCategories(props.index); props.handleMouseOver('nav');}}>
        {props.department.name}
      </span>
    </div>
  )
}

export default DepartmentItem;