import React from 'react'
import PropTypes from 'prop-types'; import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'; 
import {styled, makeStyles} from '@material-ui/core/styles'; 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'; 
import Typography from '@material-ui/core/Typography'; 
import Box from '@material-ui/core/Box';
import Summary from './Summary';
import './BudgetOptions';
import BudgetOptions from './BudgetOptions';

// Destructure Tabs used later in the Grid Element
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// Constants that style the UI elements with CSS specifications
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    fontFamily:'Oswald'
  },
}));

const Navstyle = styled(Paper)({
  background: 'black',
  border: 0,
  color: '#23a455',
  fontFamily: 'Oswald',
})

const OrgStyle = styled(Paper)({
  background: 'black',
  border: 0,
  color: 'white',
  fontFamily:'Oswald'

})

const Widgetstyle = styled(Paper)({
  background:'white',
  fontFamily:'Oswald',
  border:0
})

const TheGrid = styled(Grid)({
  background:'black',
})



 
//Writing this as a function to use constants
export default function Organizer () {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
      <div id="Organizer">
        {/* Container for the Organizer page*/}

        <TheGrid container>
          {/* Paper is used to push the elemets of the page beneath the App bar */}
        <Paper  square={true} style={{background:'black',width:'100%', color:'black', fontFamily:'Oswald', fontsize:'50px'}}>
          <br/>A BaineWare Company <br/><br/></Paper>
          {/* Grid on the left side*/}

          <Grid item sm ={2} id="organizer-nav">

            {/*Background Paper for the Left Grid*/}

            <Navstyle square={true} style={{width:'100%', alignItems:'center', border:'15px'}}>
            
            {/* Navigating through components */}
            <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                  indicatorColor="primary"
                >
                  <Tab label=" Budget Summary" {...a11yProps(0)} />
                  <Tab label="Savings Plan" {...a11yProps(1)} />
                  <Tab label="Purchase List" {...a11yProps(2)} />
                </Tabs>
                <br/>
              {/* Put the Dialog functions here!! */}
                {/* <BudgetOptions/> */}

            
            </Navstyle>
          </Grid>

          {/*Middle Grid of Organizer Page */}
          <Grid item md ={8}>
            <OrgStyle >
              <TabPanel value={value} index={0}>

                {/* Separate Grid Items for the Dyamic Charts*/}
                <Grid container>
                  <Grid item sm={4}>
                    <Widgetstyle>
                      Pie Chart
                    </Widgetstyle>
                  </Grid>
                  <Grid item sm={4}>
                    <Widgetstyle>
                      Line Chart
                    </Widgetstyle>
                  </Grid>
                  <Grid item sm={4}>
                    <Widgetstyle>
                      Radar Chart
                    </Widgetstyle>
                  </Grid>
                  <Grid container><Paper style={{background:'black', color:'black'}}>_</Paper></Grid>

                  {/* Where the Accordion goes and other Budget Summary Information */}
                  
                <Grid  item lg={12}>
                  {/* Graphql |List| integration on the page */}
                 {/* <SummaryStats/>  */}
                  
                  <Summary/>
                  
                </Grid>
              </Grid>
            </TabPanel>

              {/* Savings Plan information goes here */}
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>

              {/* Purchase List information*/}
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              
            </OrgStyle>
          </Grid>

           {/* This is where Ads, internal search, and quicklinks will go*/}
          <Grid item sm={2}>
            <Widgetstyle square={true}>
              Ads, Search Bar, and Quicklinks
            </Widgetstyle>
          </Grid>
        </TheGrid>
        
      </div>
    )
  }



