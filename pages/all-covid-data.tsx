import React from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import Nav from '../components/nav'
import { Spacer, Text } from "@nextui-org/react";
import _ from 'lodash'


class Home extends React.Component {
    static async getInitialProps(){
      const res:any = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json')
      const data: any = await res.json()
      return { data }
    }
    render(): React.ReactNode {
      Chart.register()
        let props:any = this.props.data
        let global_deaths:number = 0
        let global_cases:number = 0
        for(let country in props){
          props[country].total_deaths ? global_deaths=global_deaths+props[country].total_deaths : null
          props[country].total_cases ? global_cases=global_cases+props[country].total_cases: null
        }
        let average:number = 0
        average = global_deaths / global_cases
        const dataSets:any = {
            labels: ['Total Global Deaths', 'Total Global Cases'],
            datasets: [{
                label: 'covid data',
                data: [global_deaths, global_cases],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(206, 99, 255)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(206, 99, 255)'],
            },
        ]
        }
        return(
            <>
            <Nav />
            <Spacer y={3}/>
            <Text style={{textAlign: 'center'}} h1>mortality rate in the USA COVID-19: {average.toFixed(5)}</Text>
            <Bar data={dataSets}  options={{
          plugins: {
            title: {
              display: true,
              text: "Global Covid Data"
            },
          }
        }} />
            </>
        )
    }
}

export default Home