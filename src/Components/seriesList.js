import React from "react";

// const ulStyle = {
//     list-style-type
// };

const SeriesList = props => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {props.list.map(series => (
          <li key={series.show.id}>{series.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
