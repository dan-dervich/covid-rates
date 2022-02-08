import { Text } from "@nextui-org/react";
import {Component} from "react";
import Nav from "../components/nav";

class Home extends Component{
    render(){
        return(
            <>
            <Nav />
            <Text h1>Covid Data By Country</Text>
            </>
        )
    }
} 

export default Home