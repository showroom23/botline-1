const { LineBot } = require("bottender");
const { createServer } = require("bottender/express");
const bot = new LineBot({
  // ubah ke access token dan channelSecret dibawah, sesuai dengan yang ada di line console
  accessToken: "1jlMxMS0VlyLnUS9SWLsZoas2QeTgWndw6OQIztgzGIOC6UM1Ne9Viku5fqMEunQcGGARTRwsDQ5zi6sp8GkgytJRMjdL0LbEZxJfBNnGJLhGRoML0KgWFjm6zlYDQ7Sufm7Pe6TfhkP9Cmf87uOgAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "e0a5c2dd96a9679242dd4e4184499173"
});
