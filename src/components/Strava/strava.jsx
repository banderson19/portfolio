import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './strava.css'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';
import stravaLogo from '../../assets/images/strava.webp';

import runningman from '../../assets/images/runningman2.jpeg';


/* Get athorization code from authorization page. this is a one time, manual step.
http://www.strava.com/oauth/authorize?client_id=101017&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all

http://localhost/exchange_token?state=&code=b46c34220a36fa0fb60198a8e70b4e0acb355c30&scope=read,activity:read_all


2) exchange autorization code for access token & refresh token in a POST HTTP request
https://www.strava.com/oauth/token?client_id=101017&client_secret=c1e7e45a0017074bc741358378a4d8b0c2065ab0&code=b46c34220a36fa0fb60198a8e70b4e0acb355c30&grant_type=authorization_code

"authorization_code": "b46c34220a36fa0fb60198a8e70b4e0acb355c30"

"refresh_token": "c2e26d6d39cfc0eda9e9c4bb23c236229d9cde43",
"access_token": "c7f541a79b18a36f0818cafccc4f0f828a68516c",

3) view activites using the access token just recieved
https://www.strava.com/api/v3/athlete/activities?access_token=c7f541a79b18a36f0818cafccc4f0f828a68516c


4)refresh token
https://www.strava.com/oauth/token?client_id=101017&client_secret=c1e7e45a0017074bc741358378a4d8b0c2065ab0&refresh_token=5ca2fb4c71ea03d81e349a9676d258e03acddbb0&grant_type=refresh_token


100 requests every 15 minutes, 1000 daily
*/

/* EDITS */

/* Activities data with Commute == 'true' can be considered favorites and only display when ** filtered ** out */

const Strava = () => {

  const [polylines, setPolylines] = useState([]);
  const [activities, setActivities] = useState([]);

  const client_id = '101017';
  const client_secret = 'c1e7e45a0017074bc741358378a4d8b0c2065ab0';
  const refresh_token = 'c2e26d6d39cfc0eda9e9c4bb23c236229d9cde43';
  const auth_link = "https://www.strava.com/oauth/token";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`
  const upload_id = `https://www.strava.com/api/v3/uploads`
  const stravaOrangeOptions = { color: '#f55202' }

  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`)
      ]);

      const stravaActivityResponse = await axios.get(`${activities_link}?per_page=200&access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data);
      setActivities(stravaActivityResponse.data);

      const polylines = [];
      for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
        const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
        const activity_name = stravaActivityResponse.data[i].name;
        polylines.push({ activityPositions: polyline.decode(activity_polyline), activityName: activity_name });
        setPolylines(polylines)
      }
      console.log('444', polylines)
    }

    fetchData();
  }, []);


  function minTommss(minutes) {
    const sign = minutes < 0 ? "-" : "";
    const min = Math.floor(Math.abs(minutes));
    const sec = Math.floor((Math.abs(minutes) * 60) % 60)
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function formatDate(date) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dateObj = new Date(date)
    const formattedMonth = months[dateObj.getMonth()];
    const weekday = weekdays[dateObj.getDay()];
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const formattedTimeStamp = `${weekday}, ${formattedMonth} ${day}, ${year}`;
    return formattedTimeStamp

  }

  const curr = new Date; // get current date
  const first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6
  const firstday = new Date(curr.setDate(first));
  const lastday = new Date(curr.setDate(last));
  // console.log('curr', curr)
  // console.log('first', first)
  // console.log('last',  last)
  // console.log('firstDay', firstday)
  console.log('activities', activities)
  console.log('polyline', polylines)
  return (
    <div id="map container" style={{ "backgroundColor": "#FAFAFA" }}>
      <div>
        <div className="d-flex justify-content-center">
          <img
            src={stravaLogo}
            alt="about-me"
            className="ali"
            style={{ "height": "40px" }}
          />
        </div>
        <div className='row align-self-center' >
          {/*<div className="">
             <img
            src={stravaLogo}
            alt="about-me"
            className="ali"
            style={{ "height": "100px" }}
          /> 
            <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/48135828/latest-rides/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe> 
             <iframe height='160' width='300' frameborder='0' allowtransparency='false' scrolling='no' src='https://www.strava.com/athletes/48135828/activity-summary/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe>
  </div>*/}
          <div className="col-4 text-center align-self-center">
            <h6>{formatDate(firstday)} - {formatDate(lastday)}</h6>
          </div>
          <div className="col-4 align-self-center mb-2">
            <ul className="list-group list-group-horizontal justify-content-between" style={{ "list-style-type": "none" }}>
              <li>Distance: 0 mi</li>
              <li>Time: 0h 0m</li>
              <li>Elevation: 0ft</li>
            </ul>
          </div>
          <div className="col-4 text-center align-self-center mb-2">
            <a href="https://www.strava.com/athletes/anderson_bradford" className="btn" style={{ "color": "white", "backgroundColor": "#f55202" }} role="button">
              View all of Brad's strava  activity »
            </a>
          </div>
          {/* <div className="row justify-content-end col-lg-8 mt-5 ">
          <div className="col text-center">
            <h6 style={{ "text-decoration": "underline" }}>Best</h6>
            <h5>Bank of America Chicago Marathon: 3:35</h5>
          </div>
          <div className="col text-center ">
            <h6 style={{ "text-decoration": "underline" }}>Goal</h6>
            <h5>Boston 25' (2:50 time) </h5>
          </div>
        </div> */}
          <hr></hr>
        </div>

       <div className="container-fluid pb-2">
          <div className="d-flex flex-wrap" style={{ position: 'relative', height: '500px', overflow: 'auto', display: 'block' }}>
            {activities.map((activity, i) => {
              const noRouteAvailable = activity.map.summary_polyline == ''; 
              // const noRouteAvailable = activity.sport_type == "StairStepper"
              return (
                // <div>
                //   {noRouteAvailable ? (
                //     <h1>yes</h1>
                //   ):(
                //     <h2>no</h2>
                //   )}
                // </div>
                <div className="col-sm-4">
                  <div className="row borderCustom rounded mb-2" >
                    <div className="col-2 mt-3">
                      {/* indoor workout wont show lat and long so need to put a condition */}
                        {noRouteAvailable ? (
                          <img src={runningman} style={{"height" : "6rem" , "width" : "6rem"}}/>
                        ):(

                          <MapContainer className=" mapContainer" style={{ "height": "6rem", "width": "6rem" }} center={[activity.start_latlng[0], activity.start_latlng[1]]} zoom={10} zoomControl={false} attributionControl={false} scrollWheelZoom={false}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                        <Polyline pathOptions={stravaOrangeOptions} positions={polyline.decode(activity.map.summary_polyline)}></Polyline>

                      </MapContainer>
                      )
                      }
                    </div>
                    <div className="col mt-2" style={{ "marginLeft": "3rem", "marginBottom": "8px" }} >
                      <div className="row">
                        <strong className="col-10">
                          <h1 style={{ "color": "#3a8fbf", "fontSize": "16px", "fontWeight": "bold" }}>{activity.name}</h1>
                          <h2 className="text-muted" style={{ "fontSize": "1rem", "marginTop": "-.5rem", "fontWeight": "300" }}>{formatDate(activity.start_date)}</h2>
                        </strong>
                        {activity.commute == true ?
                          <div className="col-2">
                            <i className="bi bi-star-fill" style={{ "color": "#3a8fbf" }}></i>
                          </div>
                          :
                          <div></div>
                        }

                      </div>

                      <div>
                        <ul className="list-group list-group-horizontal justify-content-between" style={{ "list-style-type": "none" }}>
                          <li>
                            <p className="mb-0">Pace</p>
                            <p>{minTommss((26.8224 / activity.average_speed)).replace(/^0(?:0:0?)?/, '')} </p>
                          </li>
                          <li>
                            <p className="mb-0">Dist.</p>
                            <p>{(activity.distance / 1609).toFixed(2).replace(/^0(?:0:0?)?/, '')} mi</p>
                          </li>
                          <li>
                            <p className="mb-0">Time</p>
                            <p>{new Date(activity.moving_time * 1000).toISOString().slice(11, 19).replace(/^0(?:0:0?)?/, '')}</p>
                          </li>
                          <li>
                            <p className="mb-0">Elev.</p>
                            <p>{Math.round(activity.total_elevation_gain * 3.281)}</p>
                          </li>
                        </ul>

                      </div>


                      {/* <div className="row">
                      <div className="col" style={{ "fontSize": ".9rem" }}>{minTommss((26.8224 / activity.average_speed))}</div>
                      <div className="col" style={{ "fontSize": ".9rem" }}>{(activity.distance / 1609).toFixed(2)}</div>
                      <div className="col" style={{ "fontSize": ".9rem" }}>{new Date(activity.moving_time * 1000).toISOString().slice(11, 19)}</div>
                      <div className="col" style={{ "fontSize": ".9rem" }}>{Math.round(activity.total_elevation_gain * 3.281)} ft</div>
                      <div className="text-muted" style={{ "fontSize": ".9rem" }}>{activityDate(activity.start_date)}</div>
                    </div> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
      </div>
    </div>
  )
}
export default Strava;

