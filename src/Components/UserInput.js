import React from 'react';

const UserInput = (props) => {
  const style = {
    width: '40%',
    padding: '10px',
    border: '1px dashed black',
    textAlign: 'center',
    backgroundColor: '#ccc',
    fontWeight: 'bold'
  }

  return(
    <div className='Input'>
      <input style={style} type='text' placeholder='change name here' onChange={props.changed} value={props.username} />
    </div>
  )
};

export default UserInput;

