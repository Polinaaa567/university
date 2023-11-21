console.log("Log:Exporting template for custom-input");

export default function (vm) {
  return `  
  <style>
    input {
      margin:20px auto;
      color: #FFFFFF;
      font: bold 21px arial;
      height: 35px auto;
      line-height: 35px;
      text-align: center;
      text-decoration: none;
      width: 160px auto;
      background: linear-gradient(to bottom, #1ca9c9, #0F84AF);
      transition: all 0.5s linear 0s;
      border-radius: 4px;
    }
  </style>
  <slot></slot>       
    <input type='text' value=${vm._xValue}>            
  `;
}
