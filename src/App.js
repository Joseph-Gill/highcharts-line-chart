import React, {useState} from 'react';
import HighCharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import './css/App.css';

const App = () => {
  const [options, setOptions] = useState(
    {
      title: {
        text: 'Squirro Line Chart Coding Challenge'
      },
      subtitle: {
        text: 'by Joseph Gill'
      },
      yAxis: {
        title: {
          text: 'USD'
        }
      },
      xAxis: {
        categories: ['1980', '1985', '1990', '1995', '2000']
      },
      series: [
        {
          name: 'Sales',
          data: [14000, 22000, 104000, 87000, 43400]
        }
      ]
    }
  );

  return (
    <div className="App">
      <HighchartsReact highcharts={HighCharts} options={options}/>
    </div>
  )
};

export default App;
