import React from 'react';
import PieChart from 'react-minimal-pie-chart';

/**/
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed.value);
  if (!confirmed) {
    return 'Loading...';
  }
  console.log(confirmed.value);

  return (
    <div>
    
    </div>
  );
};
export default Info;
/*<PieChart
    data={[
    { title: 'One', value:  0, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
    ]}
    />;*/