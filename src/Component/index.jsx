import axios from "axios";

const url = "https://covid19.mathdro.id/api"

export const fetch = async (country) => {
    // {data :{confirmed , recovered , deaths} } data is the name of the object and remaning are the key of the data we have to use the same variable name that we want to get the object from the url
    let changableUrl = url
    if(country){
        changableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        // console.log(data);
        const modifiedData = data.map((dailydata) => (
            {
                confirm: dailydata.confirmed.total,
                death: dailydata.deaths.total,
                date: dailydata.reportDate
            }
        ))
        // console.log(modifiedData);
        return modifiedData
    }
    catch (error) {

    }
}


export const fetchCountryName = async () => {
    try {
        const {data} = await axios.get("https://covid19.mathdro.id/api/countries");
        console.log(data.countries);
         return data.countries.map((name)=> name.name)  
        }
    catch (error) {

    }
}
