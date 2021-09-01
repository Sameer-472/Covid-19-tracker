import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typogrphy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
// import cx from 'classnames';
import './Cards.css';



export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  console.log(recovered);
  console.log(deaths);
  console.log(lastUpdate);

  if (!confirmed) {
    return 'loading please wait...'
  }

  return (
    <>
      <div>
        <Grid container spacing={0} justify="center" alignItems="center" className="root" >
          
          <Grid item xs={10} sx={0} md={2} component={Card} className="card infected">
            <CardContent >
              <Typogrphy color="textSecondary" gutterBottom>Infected</Typogrphy>
              <Typogrphy variant="h5" gutterBottom>
                <CountUp start={0} end={confirmed.value} duration={2.5} />
              </Typogrphy>
              <Typogrphy color="textSecondary">{new Date(lastUpdate).toDateString()}</Typogrphy>
              <Typogrphy variant="body2" color="primary">Number of active cases</Typogrphy>
            </CardContent>
          </Grid>
           
           
            <Grid item xs={10} md={3} component={Card} className="card recovered">
              <CardContent >
                <Typogrphy color="textSecondary" gutterBottom>Recovered</Typogrphy>
                <Typogrphy variant="h5" gutterBottom>
                  <CountUp start={0} end={recovered.value} duration={2.5} />
                </Typogrphy>
                <Typogrphy color="textSecondary">{new Date(lastUpdate).toDateString()}</Typogrphy>
                <Typogrphy color="primary" variant="body2">Number of recovered cases</Typogrphy>
              </CardContent>
            </Grid>
           
            <Grid item xs={10} md={3} component={Card} className="card deaths">
            <CardContent >
              <Typogrphy color="textSecondary" gutterBottom>Deaths</Typogrphy>
              <Typogrphy variant="h5" gutterBottom>
                <CountUp start={0} end={deaths.value} duration={2.5} />
              </Typogrphy>
              <Typogrphy color="textSecondary">{new Date(lastUpdate).toDateString()}</Typogrphy>
              <Typogrphy color="primary" variant="body2">Number of death cases</Typogrphy>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

