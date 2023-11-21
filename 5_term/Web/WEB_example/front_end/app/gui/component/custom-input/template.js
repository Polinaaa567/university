console.log('Log:Exporting template for custom-input');

export default function(vm) {return ` 
  <style> 
  input {
    width: 300px;
    height: 50px;
    font-size: 45px;
    padding: 10px;
    font-family:'Freestyle Script', serif;
    border: 5px solid rgb(72, 20, 71);
    border-radius: 10px;
    background-color: rgb(247, 185, 224);
    margin: 25px;
  }
  </style> 
  <slot></slot>       
   <input type='text' value=${vm._xValue}>            
   `}
