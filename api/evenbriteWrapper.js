/*jshint esversion: 6  */
(function () {'use strict';}());

//Needed, except express
let express = require("express");
let request = require("request");

//Own
let SeezyEvent = require('./eventbriteEvent.js');

//Start server
let app = express();

//Can be deleted
app.use(express.static("./public"));

function getVenue(vId) {
    let venueURL = "https://www.eventbriteapi.com/v3/venues/" + vId + "/?token=Z3EQJWBRMAUAIOPIFPSH";
    request(venueURL, function (error, response, body) {
        let venuesObj = JSON.parse(body);
        let venue = venuesObj.name;

        return venue;
    });
}

function getCategorie(cId) {
    let categoryURL = "https://www.eventbriteapi.com/v3/categories/" + cId + "/?token=Z3EQJWBRMAUAIOPIFPSH";

    request(categoryURL , function (error, response, body) {
        let categoriesObj = JSON.parse(body);
        let category = categoriesObj.name;

        return category;
    });
}
var eventList = [];
function getEvents(lat, long, radius) {
    let eventURL = "https://www.eventbriteapi.com/v3/events/search/?location.latitude=" + lat + "&location.longitude=" + long + "&location.within=" + radius + "km&token=Z3EQJWBRMAUAIOPIFPSH";

    request(eventURL, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response.statusCode);

        let eventsObj = JSON.parse(body);
        let events = eventsObj.events;

        for (let event of events) {
            let title = event.name.text;
            let description = event.description.text;
            let startTime = event.start.local;
            let endTime = event.end.local;
            let categoryId = event.category_id;
            let headerImage = event.logo.original.url;
            let venueId = event.venue_id;

            let tempSeezyEvent = new SeezyEvent(title, description, startTime, endTime, headerImage, categoryId, venueId);
            eventList.push();
        }
    });
}

app.listen(5000, () => {
    console.log("App was started on port 5000");

    //Test Value Calls
    getEvents(48.775846, 9.182932, 50);
});

