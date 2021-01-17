import React from 'react';

const UsersList = (props) => (
  <div>
    {
      props.data ?
        props.data.map(({ name, age }) => <p key={name}>{name}, {age}</p>)
        : null
    }
  </div>
);


export default UsersList;
