import React from 'react'
import { useState, useEffect } from 'react'
import { fetchDailyData } from '../index'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css';

export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  console.log(confirmed);
  console.log(deaths);
  const [dailyData, setdailyData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData())
    }
    fetchAPI()
  }, [])
  console.log(dailyData);
  const line = dailyData.length ? (
    <>
      <div className="line">
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirm }) => confirm),
              label: 'Infected',
              borderColor: "black",
              backgroundColor: "rgba(0, 0, 255, 0.5)",
              fill: true
            }, {
              data: dailyData.map(({ death }) => death),
              label: 'Deaths',
              borderColor: "black",
              backgroundColor: "red",
              fill: true
            }]
          }}
        />
      </div>
    </> )  : null

  const bar = confirmed ? (
    <>
    <div className="bar">
      <Bar
        data={{
          labels: ["Infected" , "Deaths"],
          datasets: [{
            label: ["People"] ,
            backgroundColor: ['rgba(0, 0, 255, 0.5)' , "Red"],
            data: [confirmed.value , deaths.value]
          }],
        }}
        options={{
          legend: { display: true },
          title: { display: true, text: `current state in ${country}` }
        }}
      />
      </div>
    </>
  ) : null
  return (
    <>
      <div className="chart">
        {country ? bar : line}
      </div>
    </>
  )
}
