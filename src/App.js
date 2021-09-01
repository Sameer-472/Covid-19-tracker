import './App.css';
import React, { Component } from 'react'
import {fetch} from './Component/index';
import { Cards } from './Component/Cards/Cards';
import { Chart } from './Component/Chart/Chart';
import { CountryPicker } from './Component/CountryPicker/CountryPicker';
import logo from './logo.png';


export class App extends Component {

  state = {
    data: {} ,
    country: ""
  }

  async componentDidMount(){
    const data = await fetch();
    console.log(data)
    this.setState({
      data: data
      
    })
  }

   countryHandle = async(country)=> {
    const data = await fetch(country)
    this.setState({
      data , country: country
    })
  }

  render() {
    const {data , country} = this.state  // we are doing object destructing here
    console.log(data)
    console.log(country)
    return (
      <>
      <div className="imageflex">
      <img className="image" src={logo} alt="" /> </div>
        <Cards  data={data}/>
      <div className="App">
        <CountryPicker countryHandle={this.countryHandle}/>
        <Chart data={data} country={country}/>
      </div>
      </>
    )
  }
}

export default App



