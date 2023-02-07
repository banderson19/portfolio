import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';


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

const Strava = () => {

  // interface Node {
  //   activityPositions: any;
  //   activityName: string;
  // }

  const [polylines, setPolylines] = useState([]);

  const [activities, setActivities] = useState([]);

  const client_id = '101017';
  const client_secret = 'c1e7e45a0017074bc741358378a4d8b0c2065ab0';
  const refresh_token = 'c2e26d6d39cfc0eda9e9c4bb23c236229d9cde43';
  const auth_link = "https://www.strava.com/oauth/token";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`
  const limeOptions = { color: 'lime' }


  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`)
      ]);
      
      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data);
      setActivities(stravaActivityResponse.data);
      // console.log('activitie', activities)
      // console.log('polyline', activities[0].map.summary_polyline)

      const polylines = [];
      for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
        const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
        const activity_name = stravaActivityResponse.data[i].name;
        polylines.push({activityPositions: polyline.decode(activity_polyline), activityName: activity_name});
        setPolylines(polylines)
      }
      console.log('444', polylines)
    //   activities.map((activity, i) => {
    //     // console.log(polyline.decode(activity.map.summary_polyline))
    //     let activityPositions = polyline.decode(activity.map.summary_polyline);
    //     let activityName = activity.name
    //     polylines.push(polyline.decode(activity.map.summary_polyline), activity.name)
    // })
    //   setPolylinesData(polylines);
    //   console.log('333', polylinesData)
    }
    fetchData();
  }, []);

  function minTommss(minutes) {
    const sign =  minutes < 0 ? "-" : "";
    const min = Math.floor(Math.abs(minutes));
    const sec = Math.floor((Math.abs(minutes) * 60) % 60)
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
  }
  console.log('activities', activities)
  console.log('222', polylines)
  return (
    <div id="map">
      <MapContainer center={[40.758480, -111.888138]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {polylines.map((polyline, i) => {
          <Polyline key = {i} pathOptions={limeOptions} positions={polyline.activityPositions[i]}>
            <Popup>
              <div>
                <h2>{"Name: " + polyline.activityName}</h2>
              </div>
            </Popup>
          </Polyline>
        })}
        {/* <Marker position={[40.758480, -111.888138]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
      <div className="mt-3 border border-2 rounded" style={{ position: 'relative', height: '200px', overflow: 'auto', display: 'block'}}>

      <table className="table table-bordered table-striped">
        <thead style={{position: 'sticky'}}>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Sport Type</th>
            <th scope="col">Name</th>
            <th scope="col">Avg Speed</th>
            <th scope="col">Distance</th>
            <th scope="col">Time</th>
            <th scope="col">Elevation Gain</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, i) => {
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{activity.sport_type}</td>
                <td>{activity.name}</td>
                {/* minute per mile = 26.8224 ÷ (meter per second) */}
                <td>{minTommss((26.8224 / activity.average_speed))}</td>
                <td>{(activity.distance/1609).toFixed(2)} mi</td>
                <td>{new Date(activity.moving_time * 1000).toISOString().slice(11,19)}</td>
                <td>{Math.round(activity.total_elevation_gain * 3.281)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
          </div>
    </div>
  )
}
export default Strava;

