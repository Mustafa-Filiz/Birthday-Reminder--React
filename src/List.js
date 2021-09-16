import React from 'react';

const List = ({person}) => {
    return (
        <div key={person.id} className="person">
            <img src={person.image} alt="avatar" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
        </div>
    );
};

export default List;
