require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");
const cron = require("node-cron");

const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

console.log("Twitter Bot running...");

cron.schedule(
  "0 12 * * *", //8PM MNL (Time is UTC Here)
  () => {
    client.v2
      .tweet("Hello.")
      .then((val) => {
        console.log("Tweet posted!");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  {
    scheduled: true,
  }
);
