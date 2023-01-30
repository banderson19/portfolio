import React, { useState } from 'react'

{/* Get athorization code from authorization page. this is a one time, manual step.
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

*/}
const Strava = () => {
  const [activity, setActivity] = useState([]);
  const auth_link = "https://www.strava.com/oauth/token"
  function getActivites(res) {

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
      .then((res) => console.log('strava data', res.json()))
      // .then(data => {
      //   setActivity(data)
      //   console.log('111', activity)
      // })
  }

  function reAuthorize() {
    fetch(auth_link, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'

      },

      body: JSON.stringify({

        client_id: '101017',
        client_secret: 'c1e7e45a0017074bc741358378a4d8b0c2065ab0',
        refresh_token: 'c2e26d6d39cfc0eda9e9c4bb23c236229d9cde43',
        grant_type: 'refresh_token'
      })
    }).then(res => res.json())
      .then(res => getActivites(res))
  }

  reAuthorize()
  return (
    <div>

      <h1>strava</h1>
    </div>
  )
}
export default Strava;

