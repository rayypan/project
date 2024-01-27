import React from 'react';
import data from './ListData.json';

function List(props) {
  // Create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });

  return (
    <div>
      {props.input && (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {filteredData.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
