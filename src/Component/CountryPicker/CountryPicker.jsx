import React from 'react'
import { fetchCountryName } from '../index';
import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPicker.css';

export const CountryPicker = ({countryHandle}) => {
    const [countriesName, setcountries] = useState([])
    useEffect(() => {
        const fetchCountryData = async () => {
            setcountries(await fetchCountryName())
        }
        fetchCountryData()
    }, [setcountries])
    // console.log(countriesName.map((x)=> {x})
    const x = countriesName.map((na) => na)
    console.log(x);
    // const {name} = [countriesName]
    // console.log(name);
    // console.log(countries);
    return (
        <>
            <FormControl className="form">
                <NativeSelect variant="outlined" defaultValue="" onChange={(e)=> countryHandle(e.target.value)}>
                    <option> United States </option>
                    {
                    countriesName.map((name, i) => <option key={i} value={name}>{name}</option>)
                }
                </NativeSelect>
            </FormControl>
        </>
    )
}
