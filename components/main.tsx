import { Grid } from "@nextui-org/react";

function Main(){
    const mainStyles:any = {
        minHeight: '100vh',
        backgroundColor: 'rgb(255, 255, 255)'
    }
return(
    <Grid.Container justify="center" alignItems="center" style={mainStyles}>
        <h1>HEY</h1>
    </Grid.Container>
)
}

export default Main