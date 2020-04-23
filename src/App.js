import React from 'react';

import { Cards, CountryPicker, Chart, Pie } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.jpg'; 
import PieChart from 'react-minimal-pie-chart';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    //console.log(data);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />            
        <PieChart data={[
          { title: 'One', value: 100 , color: '#E38627' },
          { title: 'Two', value: 40, color: '#C13C37' },
          { title: 'Three', value: 5, color: '#6A2135' },
          ]}
        ></PieChart>
        
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
// 