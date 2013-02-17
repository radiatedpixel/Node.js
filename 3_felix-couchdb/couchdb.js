//server.js
var  couchdb = require('felix-couchdb'),
     client = couchdb.createClient(5984, 'localhost'),
     db = client.db('newtestdatabase');

db.create(function(error){
    if (error) throw new Error("Error creating DB: " + error);
    console.log('Created new db. with name '+JSON.stringify(db.name));
  });

db.getDoc('newtestdocument', function(er, doc) {
  if (er) throw new Error(JSON.stringify(er));
  console.log("Data from the document named "+JSON.stringify(doc._id)+" and data are "+JSON.stringify(doc));
  doc.newtestfield2 = "newtestfield2value";
  db.saveDoc(doc._id, doc, function(error, ok) {
    if (error) throw new Error(JSON.stringify(error));
    console.log('Saved doc named '+JSON.stringify(doc._id)+' to the couch! operation info: '+JSON.stringify(ok));
  });
});
db.getDoc('newtestdocument', function(er, doc) {
  if (er) throw new Error(JSON.stringify(er));
  console.log("Data from the document named "+JSON.stringify(doc._id)+" and data are "+JSON.stringify(doc));
});