import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import {Component} from "react";
import Nav from "../components/nav";
import { withRouter } from "next/router"
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";

class Home extends Component{
    static async getInitialProps(){
            const res:any = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json')
            const data:any = await res.json()
            return data
    }
    render(){
      Chart.register()
      const { query } = this.props.router;
        let selectHandler:any = async (e:any)=>{
            try{
                 window.location.replace(window.location.pathname + '?country=' + e.target.value)
            } catch(e:any){
                console.log(e)
            }
        }
        let countries: string[] = []
        for(let i in this.props){
            if(i !== 'router'){
                countries.push(i)
            }
        }
        countries.sort()
        if(query.country){
            let index:number = countries.indexOf(query.country)
            countries.splice(index, 1)
            countries.unshift(query.country)        
        }
        let i:any = 0;        
        let total_deaths: number = 0
        let total_cases: number = 0
        
        this.props[query.country]?.total_deaths ? total_deaths = this.props[query.country].total_deaths : null
        this.props[query.country]?.total_cases ? total_cases = this.props[query.country].total_cases : null
        const dataSets:any = {
            labels: ['Total Deaths', 'COVID-19 Cases'],
            datasets: [{
                label: 'covid data',
                data: [total_deaths, total_cases],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(206, 99, 255)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(206, 99, 255)'],
            },
        ]
        }
        let average:any = 0
        average = total_deaths / total_cases ? total_deaths / total_cases : 0
        average = average.toFixed(5) ? average.toFixed(5) : 0
        return(
            <>
            <Nav />
            <Spacer y={3}/>
            <Grid.Container justify="center"  alignItems="center" direction="column">
            <Text h1>Covid Data By Country</Text>
            <Spacer y={1}/>
            <select style={{background: "rgb(255, 255, 255)", border: '0px solid white', color: "#222", borderRadius: '3px', boxShadow: "7px 7px 13px #bebebe,-7px -7px 13px #ffffff", width: 200, height: 50, fontSize: '18px'}} onInput={selectHandler}>
                {countries.map((country)=>{
                    i=i+1
                    return(
                        <option value={country} id={i} key={i}>{country}</option>
                        )
                    })}
            </select>
            <Spacer y={1}/>
            <Text style={{textAlign: 'center'}} h2>Average Deaths in {query.country}: {average}</Text>
            </Grid.Container>
            <Container style={{maxWidth: '70vw', maxHeight: '80vh'}}>
            <Bar data={dataSets}  options={{
                plugins: {
                    title: {
                        display: true,
                        text: query.country ? `Covid Data in ${query.country}` : 'Covid Data Globally'
                    },
                }
            }} />
            </Container>
            </>
        )
    }
} 

export default withRouter(Home)