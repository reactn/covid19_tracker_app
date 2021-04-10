import React, { Fragment } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

import image from '../../images/tombstones.png'

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div classNam="card-header">
                  <h3 className="py-3" style={{color: 'royalblue', textAlign: 'Center'}}>Infected</h3>
              </div>
              
              <div className="card-body">
                <h4><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></h4>
                <p style={{color: 'grey'}}> {new Date(lastUpdate).toDateString()}</p>
                <small>Number of active cases of COVID-19.</small>
              </div>
              <div style={{backgroundColor: 'royalblue', width: '258px', height: '5px'}}></div>
            </div>
         
          </div>

          <div className="col-md-4">
            <div className="card">
              <div classNam="card-header">
                  <h3 className="py-3" style={{color: 'seagreen', textAlign: 'Center'}}>Recovered</h3>
              </div>
              <div className="card-body">
                <h4><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></h4>
                <p style={{color: 'grey'}}> {new Date(lastUpdate).toDateString()}</p>
                <small>Number of recover cases of COVID-19.</small>
              </div>
              <div style={{backgroundColor: 'seagreen', width: '258px', height: '5px'}}></div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div classNam="card-header">
                  <h3 className="py-3" style={{color: 'red', textAlign: 'Center'}}>Death</h3>
              </div>
              <div className="card-body">
                <h4><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></h4>
                <p style={{color: 'grey'}}> {new Date(lastUpdate).toDateString()}</p>
                <small>Number of deaths cases of COVID-19.</small>
              </div>
              <div style={{backgroundColor: 'red', width: '258px', height: '5px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Info;