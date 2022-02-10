import { Grid, Text } from "@nextui-org/react"
import Link from "next/link"

function Nav() {
    const navStyles:any = {
        zIndex: '100000000000000000000000000',
        backgroundColor: "rgba(255, 255, 255, .9)",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '10vh'
    }
    return(
        <Grid.Container gap={3} justify="center" alignItems="center" direction="row" style={navStyles}>
            <Grid>
            <Link href="/">
                <a>
            <Text h2>Home</Text>
                </a>
            </Link>
            </Grid>
            <Grid>
            <Link href="/all-covid-data">
            <a >
            <Text h2>All Covid Data</Text>
            </a>
                </Link>
            </Grid>
            <Grid>
            <Link href="/c-d-c">
            <a >
            <Text h2>Covid Data By Country</Text>
            </a>
            </Link>
            </Grid>
        </Grid.Container>
    )    
}
export default Nav