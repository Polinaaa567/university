export default function () {
  return `       
 <style>
 button {
    margin:20px auto;
    color: #FFFFFF;
    font: bold 21px arial;
    height: 35px auto;
    line-height: 35px;
    text-align: center;
    text-decoration: none;

    width: 160px auto;
        background: linear-gradient(to bottom, #209DCA, #0F84AF);
    transition: all 0.5s linear 0s;
        border-radius: 4px;
  }
  </style>
    <button>
        <slot></slot>  
    </button>              
`;
}
