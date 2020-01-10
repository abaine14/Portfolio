import React, { Component } from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import Grid from '@material-ui/core/Grid';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip'



 class Incomeui extends Component{ 
   render(){
     return(
      <div>
        <h3 style={{textAlign:'center'}}>Enter your Income in the designated fields below.</h3>
        <h5 style={{textAlign:'center'}}>Hover mouse over field name for hints or examples</h5>
        <h5 style={{textAlign:'center'}}> If you need more information on what goes where check out the <Link href="/Resources" >Resources</Link> Page</h5><hr/><br/>
        
        <Grid container>
          <Grid item sm={6}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <Tooltip title="Examples: Monthly Salary, Hourly, or Contract" placement="top-start">
                  <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Earned:</InputGroup.Text>
                </Tooltip>  
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount (Required)"
              style={{backgroundColor:'black', color:'#23a455', width:'25%'}}
              required
              name="earnedIncome"
              //value={this.state.earnedIncome}
              //onChange={this.onChange}
              />
            </InputGroup>
          </Grid>

          <Grid item sm={6}>
          <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <Tooltip title="Examples: Esales, Real-Estate, and More" placement="top-start">
                  <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Passive: </InputGroup.Text>
                  </Tooltip>
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount"
              style={{backgroundColor:'black', color:'#23a455', width:'25%', borderBlockColor:'#23a455'}}
              //value={this.state.passiveIncome}
              //onChange={this.onChange}
              name="passiveIncome"
              />
            </InputGroup>
            <br/>
          </Grid>
        </Grid>


        <Grid container>
          <Grid item sm={6}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
              <Tooltip title="Examples: Side Work, Music Gigs, or Craft Selling" placement="top-start">
                <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Variable: </InputGroup.Text>
              </Tooltip>
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount"
              style={{backgroundColor:'black', color:'#23a455', width:'25%'}}
              //value={this.state.variableIncome}
              //onChange={this.onChange}
              name="variableIncome"
              />
            </InputGroup>
          </Grid>

          <Grid item sm={6}>
          <InputGroup className='mb-3'>
              <InputGroup.Prepend>
              <Tooltip title="Examples: Dividends, Stock Trading, or Peer to Peer" placement="top-start">
                <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Investment: </InputGroup.Text>
              </Tooltip>
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount"
              style={{backgroundColor:'black', color:'#23a455', width:'25%', borderBlockColor:'#23a455'}}
              //value={this.state.investmentIncome}
              //onChange={this.onChange}
              name="investmentIncome"
              />
            </InputGroup>
            <br/>
          </Grid>
        </Grid>


        <Grid container>
          <Grid item sm={6}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
              <Tooltip title="Examples: Family Money, Stipends, or Other Means" placement="top-start">
                <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Allowances: </InputGroup.Text>
              </Tooltip>
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount"
              style={{backgroundColor:'black', color:'#23a455', width:'25%'}}
              //value={this.state.allowances}
              //onChange={this.onChange}
              name="allowances"
              />
            </InputGroup>
          </Grid>

          <Grid item sm={6}>
          <InputGroup className='mb-3'>
              <InputGroup.Prepend>
              <Tooltip title="All other recurring income received" placement="top-start">
                <InputGroup.Text style={{backgroundColor:'black',color:'white'}}>Miscellaneous: </InputGroup.Text>
                </Tooltip>
                <InputGroup.Text style={{backgroundColor:'black', color:'#23a455'}}>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              placeholder="Enter Amount"
              style={{backgroundColor:'black', color:'#23a455', width:'25%', borderBlockColor:'#23a455'}}
              //value={this.state.miscIncome}
              //onChange={this.onChange}
              name="misIncome"
              />
            </InputGroup>
          </Grid>
        </Grid>
        <button style={{backgroundColor:'black', color:'white'}}onClick={this.createIncome}>Save Section</button>
      </div>
     );
   }
 }

 export default Incomeui;




