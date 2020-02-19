import {bind} from '/react.js';
const pricing = {
    "studio": 10,
    "1bed": 15,
    "2bed": 20
  }
  let model = {
 'startdate' : 3
  };
  bind("#startdate", model, 'startdate');
  bind("#enddate", model, 'enddate');
  bind("#room", model, 'room');
  bind("#sum", model, 'sum');
  function calc() {
    if(model.startdate && model.enddate && model.room) {
      const days = Math.round((new Date(model.enddate) - new Date(model.startdate))/(24*60*60*1000));
      if(pricing[model.room]) {
        model.sum = pricing[model.room] * days;
        console.log("sum set");
      }
    }
  }   
  document.body.querySelector("button").addEventListener("click",calc); 
