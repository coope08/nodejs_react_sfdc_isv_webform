const httpClient = require('request');
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const url = require('url');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const templateId = process.env.TRIALFORCE_TEMPLATE_ID;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  global.exit = function exit(code, msg) { console.log(`ERROR: ${msg}`); process.exit(code || 1); }
  global.missing = function missing(variable) { exit(1, `${variable} environment variable required.`); }

  let { org, force } = require('./salesforce');


  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


  //Parses the text as JSON and exposes the resulting object on request.body
  app.use(bodyParser.json());

  //Parse the text as URL encoded data and expose the resulting object on request.body
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // Create a Trial.
  app.post('/newtrial', function(req, res) {
    if(!org.authenticated) { return; }

    console.log('body= ',req.body);


    if (!req.body) {
      res.status(400).send('Missing query parameter.');
      console.log('error: missing param');
      return;
    }


    let trial = force.createSObject('SignupRequest');
    trial.set('FirstName', req.body.firstName);
    trial.set('LastName', req.body.lastName);
    trial.set('SignupEmail', req.body.email);
    trial.set('Company', req.body.company);
    //trial.set('Phone', req.body.phone);
    trial.set('Username', req.body.uname);
    trial.set('Country', req.body.countryCode);
    //trial.set('ContactPreference', req.body.prefValue);
    //trial.set('PhonePreference', req.body.phoneValue);
    trial.set('TemplateId', templateId);

    trial.set('PreferredLanguage', 'en_US');

    //org.insert({ sobject: trial }, (err) => {
    //    if(err) {
    //       console.error(err);
    //        process.exit(1);
    //    }
    //    else {
    //        console.log('Trial Inserted');
    //    }
    //})

    res.status(200).send('Thank you for your interest. Check your email for login instructions.');
    
    //res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));

  });


  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });
  

}
