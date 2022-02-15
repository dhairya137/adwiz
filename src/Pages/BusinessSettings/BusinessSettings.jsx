import { useMediaQuery } from '@material-ui/core'
import { CssBaseline, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import classes from './business.module.css'
import Content from './Components/Content/Content'
import Sidebar from './Components/Sidebar/Sidebar'

const BusinessSettings = () => {

    const [activeClass, setActiveClass] = React.useState('Business Setting');
    return (
        <div>

            <Grid container  >
                <Grid item lg={2} md={2}>
                    <Sidebar activeClass={activeClass} setActiveClass={setActiveClass} />

                </Grid>
                <Grid item lg={10} md={10}>
                    {/* {mobileView && <Navbar />} */}
                    <Content />
                </Grid>
            </Grid>
        </div>
    )
}

export default BusinessSettings