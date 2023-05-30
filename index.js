const express = require('express');
const airplaneSetting = require( "./routes/airplaneSetting.route");
const app = express();
const settingQueryMiddleware=require("./middlewares/settingQuery.middleware")


// accept Get Query request  accepts  seats and passengers
// For example http://localhost:8080/api/airplane/setting?seats= [[3, 2], [4, 3], [2, 3], [3, 4]]&passengers=30

// returns
// [
//     [
//         19,25,1,"lane",2,26,27,3,"lane",4, 5,"lane", 6,28,20 ],
//     [
//         21,29,7,"lane",8,30,"s",9,"lane",10, 11,"lane",12,"s",22],
//     [
//         "","","","lane",13,"s","s",14,"lane",15,16,"lane",17,"s",23],
//     [
//         "","","","lane","","","","","lane", "","","lane",18,"s",24 ]]
// note s mean  free seat

app.use('/api/airplane/setting',settingQueryMiddleware ,airplaneSetting);
const port =  8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
