import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className='Output'>
      <h1>{props.username}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde nemo accusantium accusamus quod corporis iusto earum sapiente cum rerum aspernatur, provident voluptates. Exercitationem velit culpa aliquam tempore omnis placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde nemo accusantium accusamus quod corporis iusto earum sapiente cum rerum aspernatur, provident voluptates. Exercitationem velit culpa aliquam tempore omnis placeat.
      </p>
    </div>
  )
}

export default UserOutput;