import { Button, Grid, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function Main(){
    const mainStyles:any = {
        minHeight: '100vh',
        backgroundColor: 'rgb(255, 255, 255)'
    }
return(
    <main>
    <Grid.Container justify="center" direction="row" alignItems="center" style={mainStyles}>
        <Grid xs={5} justify="center" alignItems="center" direction="column">
        <Text h1>Covid Data</Text>
        <Spacer y={2}/>
        <Link href="all-covid-data">
            <a>
        <Button style={{fontSize: '1.25em'}} color="gradient">See Global Covid Data</Button>
            </a>
        </Link>
        </Grid>
        <Grid xs={5} justify="center" alignItems="center">
        <img src="/something.svg" width={600} alt="SVG" />
        </Grid>
    </Grid.Container>
    </main>
)
}

export default Main