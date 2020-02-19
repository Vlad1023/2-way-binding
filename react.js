export function bind(domID,model,propName){
  let domElement = document.body.querySelector(domID);
  let onEventHolder = function() {onEvent(event,model,propName);}

  if(model[propName]) // if property already exist
    domElement.value = model[propName];
  

    Object.defineProperty(model, propName, {
        get(){
        return model['_' + propName];
        },
        set(value) {
        model['_' + propName] = value;  
        domElement.removeEventListener('change',onEventHolder);
        domElement.value = value;
        domElement.addEventListener('change',onEventHolder);
        }
      });
      domElement.addEventListener("click", onEventHolder);      
}
function onEvent(event,model,propName){
  if(event.target.checkValidity())
  model[propName] = event.target.value;
}
