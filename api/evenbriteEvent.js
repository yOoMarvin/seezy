/*jshint esversion: 6  */
(function () {'use strict';}());

class seezyEvent {
    constructor(title, description, startTime, endTime, headerImage, category, venue) {
        this.title = title;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.headerImage = headerImage;
        this.category = category;
        this.venue = venue;
    }
}

module.exports = seezyEvent;