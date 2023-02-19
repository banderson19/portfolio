import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';
import stravaLogo from '../../assets/images/strava.webp';


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
  const upload_id = `https://www.strava.com/api/v3/uploads`
  const limeOptions = { color: 'lime' }
  const decodepoly = 'wnovFld_jTu@_@i@IEEWBaA@o@KIIAECa@@QV}@@OF{BAIC?BUByAPsEFm@H]LYNWZ_@^WXKPEPO^Gx@[\IVOl@IpABbBAxE?JALIZBTAVFxACFCLDfACh@B^HnA@bAGbA?\Fb@@p@An@Gr@Fx@?PAX@P?XG|AFzAALFBNAD@~BAtD@NCtIBfACVDv@ELCtA?t@@VEfCJnCr@vIFjABjAGvCUrCWdGE~ACjEB~BAp@@v@@dJA~H@jCEn@HfA@r@@HC^?`@BtBFJEPA\@HCPBPCh@BXEb@BzAA`@@R@~E@PA`A@zBAlABl@CFANDP@j@CT@lADPA`@@h@C^@h@AX?fABRAr@Bf@CP@h@ChA@lBCt@BxBAd@GH[B]E_@@EA_A@E@GFGPGHWBo@DcA?ECYBWAOBe@AK@a@CeAAm@FUEE@i@AUC[BSAKDEC[@KBMCw@Ae@@k@?EAcA?aA@_BA[@OCA@CEMBiACsA@e@CIEOFGCSBc@?Y@ECa@B_@AeABk@AKBuAA[@OA[?y@CgABWAU@i@C_@DKEEBUCu@?qABs@CY@kBAW@OCk@BWCM@i@AcBD_@AO@SCY?CCqADw@?EAi@@MCYD_@CQUMGc@ES@m@Ic@?MDIC_@@UCGAEOSQOEGEMq@IUKMAMQa@AY@{AD}@Hy@?WRwAL_B?QFSPoAHYDYHO@QPs@Fa@Py@`@gDXeBBCJ}@Le@Do@RgA?OTaAH}@Py@Dk@PaA\cDLw@ZyCFYBEBc@TeB?ST}ATwBLq@?GEQFQAGZ}ANyARuA@SRqAXgEH_B?sAFgD?{ADw@IcADmEEqCF}D@oGHuBG{DBkAAuC@y@BEHEPDX?JDTC^BRCh@?LCfADxATFBZFFDLAL@v@?ZHBDJ?bANvAb@LBDBd@?^Ir@Wr@ITADBn@FZ?h@C\@j@Jr@\b@Z'


  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`)
      ]);

      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data);
      setActivities(stravaActivityResponse.data);

      // const uploadId = [];
      // for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
      //   const activity_upload_id = stravaActivityResponse.data[i].upload_id;
      //   const uploadIds = await axios.get(`${upload_id}/${activity_upload_id}?access_token=${stravaAuthResponse[0].data.access_token}`)
      //   console.log('uploadid', uploadIds)
      //   // uploadId.push({activity_id})
      // }
      // console.log('activitie', activities)
      // console.log('polyline', activities[0].map.summary_polyline)

      const polylines = [];
      for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
        const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
        const activity_name = stravaActivityResponse.data[i].name;
        polylines.push({ activityPositions: polyline.decode(activity_polyline), activityName: activity_name });
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
    const sign = minutes < 0 ? "-" : "";
    const min = Math.floor(Math.abs(minutes));
    const sec = Math.floor((Math.abs(minutes) * 60) % 60)
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
  }
  console.log('activities', activities)
  console.log('polyline', polylines)
  return (
    <div id="map">
      <div className='row'>
        <div className="col col-lg-4 mt-4 ms-3">
          <img
            src={stravaLogo}
            alt="about-me"
            className="ali"
            style={{ "height": "100px" }}
          />
          <h6>follow my Strava</h6>
          {/* <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/48135828/latest-rides/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe>
        <iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/48135828/activity-summary/f1d64d43cfdb96bad50dbbb5fe348125094ddf9c'></iframe> */}
        </div>
        <div className="row justify-content-end col-lg-8 mt-5">
          <div className="col text-center mt-3">
            <h3>PR: 3:35</h3>
          </div>
          <div className="col text-center mt-3">
            <h3>Goal: 2:50</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">

          <MapContainer center={[40.550829051062465, -111.90492996945977]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <TileLayer
          url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
          maxZoom={20}
          subdomains={['mt1', 'mt2', 'mt3']}
        /> */}
            {activities.map((activity, i) => {
              return (
                <div>
                  <Polyline pathOptions={limeOptions} positions={polyline.decode(activity.map.summary_polyline)}>
                    <Popup>
                      <div>
                        <h2>{activity.name}</h2>
                      </div>
                    </Popup>
                  </Polyline>

                  <Marker position={[activity.start_latlng[0], activity.start_latlng[1]]}>
                    <Popup>
                      <div>
                        <h2>{activity.name}</h2>
                      </div>
                    </Popup>
                  </Marker>
                </div>

              )
            })}
          </MapContainer>
        </div>

        <div className="col-6 mt-3 mx-3 border border-2 rounded" style={{ position: 'relative', height: '500px', overflow: 'auto', display: 'block' }}>

          <table className="table table-bordered table-striped" style={{ position: 'relative' }}>
            <thead>
              <tr style={{ position: 'sticky' }}>
                <th scope="col">id</th>
                <th scope="col">Sport Type</th>
                <th scope="col">Name</th>
                <th scope="col">Mile Pace</th>
                <th scope="col">Distance</th>
                <th scope="col">Time</th>
                <th scope="col">Elevation Gain</th>
                {/* <th scope="col">polyline</th> */}
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{activity.sport_type}</td>
                    <td>{activity.name}</td>
                    {/* minute per mile = 26.8224 ÷ (meter per second) */}
                    <td>{minTommss((26.8224 / activity.average_speed))}</td>
                    <td>{(activity.distance / 1609).toFixed(2)} mi</td>
                    <td>{new Date(activity.moving_time * 1000).toISOString().slice(11, 19)}</td>
                    <td>{Math.round(activity.total_elevation_gain * 3.281)} ft</td>
                    {/* <td>{activity.map.summary_polyline}</td> */}
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
export default Strava;

