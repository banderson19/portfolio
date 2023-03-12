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

  // const [polylines, setPolylines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);


  const client_id = '101017';
  const client_secret = 'c1e7e45a0017074bc741358378a4d8b0c2065ab0';
  const refresh_token = 'c2e26d6d39cfc0eda9e9c4bb23c236229d9cde43';
  const auth_link = "https://www.strava.com/oauth/token";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`
  const upload_id = `https://www.strava.com/api/v3/uploads`
  const stravaOrangeOptions = { color: '#f55202' }

  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6
  const firstWeekDay = new Date( new Date(curr.setDate(first)).setHours(0,0,0,0)); // make time set to 00:00:00
  const lastWeekDay = new Date( new Date(curr.setDate(last)).setHours(0,0,0,0));
  const month = new Date();
  const firstMonthDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastMonthDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = months[curr.getMonth()]
  
  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`)
      ]);

      const stravaActivityResponse = await axios.get(`${activities_link}?per_page=200&access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log('activities', stravaActivityResponse.data);
      setActivities(stravaActivityResponse.data);

      // fetching monthly data
      const thisMonthsData = [];
      stravaActivityResponse.data.map((activity, i) => {
        const month_activity_date = new Date(new Date(activity.start_date).setHours(0,0,0,0))
        const activity_type = activity.type
        // console.log(activity_date)
        // console.log('firstMonthDay', firstMonthDay)
        // add `&& activity_type == 'Run'` later to just get running stats

        if (month_activity_date >= firstMonthDay && month_activity_date <= lastMonthDay) {
          thisMonthsData.push(activity)
        }
      })
      setMonthlyData(thisMonthsData)
      console.log('monthlyData', monthlyData)

      // fetching weekly data
      const thisWeeksData = [];
      stravaActivityResponse.data.map((activity, i) => {
        const week_activity_date = new Date(new Date(activity.start_date).setHours(0,0,0,0))
        const activity_type = activity.type

        // console.log(week_activity_date)
        // console.log('firstWeekDay', firstWeekDay)
        // add `&& activity_type == 'Run'` later to just get running stats
        if (week_activity_date >= firstWeekDay && week_activity_date <= lastWeekDay ) {
          thisWeeksData.push(activity)
        }
      })
      setWeeklyData(thisWeeksData)
      console.log('weeklyData', weeklyData)
    }

    fetchData();
  }, []);

  // Monthly Data
  {/* {console.log(monthlyData.reduce(function (acc, obj) { return acc + obj.distance; }, 0))} */}
  const monthlyDistance = monthlyData.reduce(function(acc, obj) {return acc + obj.distance}, 0)
  const monthlyTime =  monthlyData.reduce(function(acc, obj)  {return acc + obj.elapsed_time}, 0)
  const monthlyElevation =  monthlyData.reduce(function(acc, obj)  {return acc + obj.total_elevation_gain}, 0)
  // Weekly Data
  const weeklyDistance = weeklyData.reduce(function(acc, obj) { return acc + obj.distance}, 0)
  const weeklyTime = weeklyData.reduce(function(acc, obj) {return acc + obj.elapsed_time}, 0)
  const weeklyElevation = weeklyData.reduce(function(acc, obj) {return acc + obj.total_elevation_gain}, 0)

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

  console.log('calculate monthly distance in meters', monthlyDistance)
  console.log('calculate monthly time in seconds', monthlyTime)
  console.log('calculate monthly elevation in meters', monthlyElevation)

  // console.log('curr', curr)
  // console.log('first', first)
  // console.log('last',  last)
  console.log('weeklyData', weeklyData)
  console.log('monthlyData', monthlyData)
  console.log('firstMonthDay', firstMonthDay)
  console.log('lastMonthDay', lastMonthDay)
  console.log('firstWeekDay', firstWeekDay)
  console.log('lastWeekDay', lastWeekDay)
  // console.log('activities', activities)
  // console.log('polyline', polylines)
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

          {/* <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/48135828/latest-rides/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe>  */}
          {/* <iframe height='160' width='300' frameborder='0' allowtransparency='false' scrolling='no' src='https://www.strava.com/athletes/48135828/activity-summary/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe> */}

          <div className="col-4 text-center align-self-center mb-2 pe-2">
            <h6>Month of {currentMonth} <span><strong>running</strong></span> stats</h6>
            <ul className="list-group list-group-horizontal justify-content-around" style={{ "list-style-type": "none" }}>
              <li>Distance: {(monthlyDistance / 1609).toFixed(2).replace(/^0(?:0:0?)?/, '')}mi</li>
              <li>Time: {new Date(monthlyTime * 1000).toISOString().slice(11, 19).replace(/^0(?:0:0?)?/, '')}</li>
            </ul>         
            </div>
          <div className="col-4 align-self-center mb-2">
          <h6 className="text-center">{formatDate(firstWeekDay)} - {formatDate(lastWeekDay)}</h6>
            <ul className="list-group list-group-horizontal justify-content-between" style={{ "list-style-type": "none" }}>
              <li>Distance: {(weeklyDistance / 1609).toFixed(2).replace(/^0(?:0:0?)?/, '')}mi</li>
              <li>Time: {new Date(weeklyTime * 1000).toISOString().slice(11, 19).replace(/^0(?:0:0?)?/, '')}</li>
              <li>Elevation: {Math.round(weeklyElevation * 3.281)}ft</li>
            </ul>
          </div>
          <div className="col-4 text-center align-self-center mb-2">
            <a href="https://www.strava.com/athletes/anderson_bradford" className="btn" style={{ "color": "white", "backgroundColor": "#f55202" }} role="button">
              View all of Brad's strava  activity »
            </a>
          </div>
          <hr></hr>
        </div>

        <div className="container-fluid pb-2">
          <div className="d-flex flex-wrap" style={{ position: 'relative', height: '500px', overflow: 'auto', display: 'block' }}>
            {activities.map((activity, i) => {
              const noRouteAvailable = activity.map.summary_polyline == '';
              return (
                <div className="col-sm-4">
                  <div className="row borderCustom rounded mb-2" >
                    <div className="col-2 mt-3">
                      {/* indoor workout wont show route (lat and long) so need to put a condition */}
                      {noRouteAvailable ? (
                        <img src={runningman} style={{ "height": "6rem", "width": "6rem" }} />
                      ) : (
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

