/*
    All the data types needed for the scripts to function properly.

    Based off the iOS implementation by Brian Johncox (DecodeProgramming).
    https://github.com/PurdueHCR/PurdueHCR-iOS

*/
import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD8iqaRoxfgcdQhyYzsTjFm6uIVkjfBREs",
    authDomain: "purdue-hcr-test.firebaseapp.com",
    databaseURL: "https://purdue-hcr-test.firebaseio.com",
    projectId: "purdue-hcr-test",
    storageBucket: "purdue-hcr-test.appspot.com",
    messagingSenderId: "295129748467",
    appId: "1:295129748467:web:1426e40ef32c503f487886"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const PERMISSION_LEVELS = {
  resident: 0,
  rhp: 1,
  rec: 2,
  fhp: 3
};
Object.freeze(PERMISSION_LEVELS);

class PointType {
  static get permissionLevels() {
    return PERMISSION_LEVELS;
  }

  constructor(pv, pn, pd, rcs, pid, permissionLevel, isEnabled) {
    this.pointValue = pv;
    this.pointName = pn;
    this.pointDescription = pd;
    this.residentCanSubmit = rcs;
    this.pointID = pid;
    this.permissionLevel = permissionLevel;
    this.isEnabled = isEnabled;
  }
}

class House {
  constructor(id, points, hexColor, numResidents) {
    this.houseID = id;
    this.totalPoints = points;
    this.hexColor = hexColor;
    this.numResidents = numResidents;
  }

  getPPR() {
    return this.totalPoints / this.numResidents;
  }

  equals(h) {
    return this.houseID == h.houseID;
  }
}

class PointGroup {
  constructor(val) {
    this.points = new Set();
    this.pointValue = val;
  }

  add(pt) {
    this.points.add(pt);
  }
}

const REJECTED_STRING = "DENIED: ";
const SHREVE_RESIDENT = "(Shreve) ";

class PointLog {
    /*
        Initialization method for newly created points.
    */
    constructor(pointDescription, firstName, lastName, type, floorID, residentID, dateOccurred = db.Timestamp.now()) {
        this.pointDescription = pointDescription;
        this.firstName = firstName;
        this.lastName = lastName;
        this.type = type;
        this.floorID = floorID;
        this.residentID = residentID;
        this.dateOccurred = dateOccurred;
        this.dateSubmitted = db.Timestamp().now();
        this.wasHandled = false;

        this.rhpNotifications = 0;
        this.residentNotifications = 0;
    }

    /*
        Initialization method for points pulled from the Firestore database.
    */
    constructor(id, document) {
        this.logID = id;

        this.pointDescription = String(document["Description"]);
        this.firstName = String(document["ResidentFirstName"]);
        this.lastName = String(document["ResidentLastName"]);
        this.residentID = String(document["ResidentId"]);
        this.floorID = String(document["FloorID"]); // Bruh what?? Resident"Id" but Floor"ID"?? Bring this up at next meeting.
        this.dateOccurred = db.Timestamp.fromMillis(document["DateOccurred"]); //How does conversion work to Timestamp?? Just going to assume this works...
        this.dateSubmitted = db.Timestamp.fromMillis(document["DateSubmitted"]); 

        this.rhpNotifications = Number(document["RHPNotifications"]);
        this.residentNotifications = Number(document["ResidentNotifications"]);
        
        let idValue = Number(document["PointTypeID"]);
        if (idValue < 1) {
            this.wasHandled = false;
        } else {
            this.wasHandled = true;
        }

        // TODO: Initialization of this.type has something to do with a DataManager somewhere in the code??
        // I guess I'll look at that later...

        if (floorID === "Shreve") {
            this.firstName = SHREVE_RESIDENT + this.firstName;
        }
    }
}