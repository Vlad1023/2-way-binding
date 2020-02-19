export function bind(domEl,model,propName){
  let domElement = document.body.querySelector(domEl);
  let func = function() {onEvent(event,model,propName);}
    Object.defineProperty(model, propName, {
        get(){
        return model['_' + propName];
        },
        set(value) {
        model['_' + propName] = value;  
        domElement.removeEventListener('change',func);
        domElement.value = value;
        domElement.addEventListener('change',func);
        }
      });
      if(model[propName]){
      domElement.value = model[propName];
      console.log("propery exist");
      }
      

      domElement.addEventListener("click", func , false);  

     
}
function onEvent(event,model,propName){
  if(event.target.checkValidity())
  model[propName] = event.target.value;
}
