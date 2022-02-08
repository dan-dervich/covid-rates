import { Spacer, Text } from "@nextui-org/react";
import {Component} from "react";
import Nav from "../components/nav";
import selectHandler from '../components/selectHandler'

class Home extends Component{
    static async getInitialProps(){
        const res:any = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json')
        const data:any = await res.json()
        return data
    }
    constructor(props:any) {
        super(props);
        this.state = {country: 0};  
    }
    render(){
        let countries: string[] = []
        for(let i in this.props){
            countries.push(i)
        }
        let i:number = 0;        
        return(
            <>
            <Nav />
            <Spacer y={3}/>
            <Text h1>Covid Data By Country</Text>
            <select onInput={selectHandler}>
                {countries.map((country)=>{
                    i++
                    return(
                        <option value={country} key={i}>{country}</option>
                    )
                })}
            </select>
            </>
        )
    }
} 

export default Home