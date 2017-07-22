var tmi = require('tmi.js')

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "username",
    password: "apikey"
  },
  channels: ["username"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
  client.action("username", "Hello i am ExampleBot i am currently in beta.");
});

client.on('chat', function(channel, user, message, self) {
  if(message === "!twitter") {
  client.action("username", "twitter.com/ExampleBot");

}

  client.action("username", user['display-name'] + "Im currently doing something, so im good, and also hey.");
});
