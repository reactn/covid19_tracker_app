import React, { useState, useEffect, Fragment } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Fragment>
      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-12">
              <div class="form-group">
          <label for="exampleFormControlSelect1">Country</label>
          <select  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} class="form-control" id="exampleFormControlSelect1">
              <option value="">Global</option>
              {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </select>
        </div>
          </div>
        </div>
      </div>
      
    </Fragment>
    // <FormControl className={styles.formControl}>
    //   <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
    //     <option value="">Global</option>
    //     {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
    //   </NativeSelect>
    // </FormControl>
  );
};

export default Countries;