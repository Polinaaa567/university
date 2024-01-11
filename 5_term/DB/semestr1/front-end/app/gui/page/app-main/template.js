export default function () {
  return `      
  <style>
  table {
    width: 90%;
    margin-bottom: 30px;
    border: 5px solid #fff;
    border-top: 5px solid #fff;
    border-bottom: 3px solid #fff;
    border-collapse: collapse; 
    outline: 3px solid #ffd300;
    font-size: 15px;
    background: #fff!important;

  }
  table th {
    font-weight: bold;
    padding: 7px;
    background: #ffd300;
    border: none;
    text-align: center;
    font-size: 15px;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #ffd300;
  }
  table td {
    padding: 7px;
    border: none;
    border-left: 1px solid #ddd;
	  border-right: 1px solid #ddd;
    text-align: center;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    font-size: 15px;
    vertical-align: top;
  }
  table tr:nth-child(even){
    background: #f8f8f8!important;
  }
  table td:hover {
    background: #fffabe;
  }
  table td:hover:after {
    position: absolute;
    top: 0px;
    right: 0px; 
    bottom: 0px;    
    left: 0px;
  }
    button {
      font-weight: medium;
      text-decoration: none;
      color: #6b5770;
      background-image: linear-gradient(90deg, #fd7f34, #bd155b);
      display: inline-block;
      padding: 14px 30px;
      border: 1px solid;
      position: relative;
      z-index: 0;
      border-radius: 5px;
      box-sizing: border-box;
      margin: 0 15px 15px 0;
      outline: none;
      cursor: pointer;
      user-select: none;
      appearance: none;
      touch-action: manipulation;  
    }
    button:before {
      content: '';
      position: absolute;
      left: -2px;
      top: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background: linear-gradient(90deg, #daa520, #b57900);
      z-index: -2;
      transition: .4s;
      border-radius: 5px;
    }
    button:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #fff, #fff);
      z-index: -1;
      transition: .4s;
      border-radius: 4px;
    }
    button:hover {
      color: #fff;
      transition: .3s;
    }
    button:hover:after {
      background: linear-gradient(90deg, #daa520, #b57900);
    }
    button:active:after {
      background: linear-gradient(90deg, #eb9c00, #b87333);
    }
    button:focus-visible {
      box-shadow: 0 0 0 3px #fd7f34;
    }
    .select {
      font-weight: medium;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ffd300;
      outline: none;
      transition: background-color 0.3s ease-in-out;
      background: #ffd300;
      font-size: 15px;
      color: #6b5770;
      cursor: pointer;
    }
    .select option {
      font-weight: medium;
      background-color: #fff9d6;
      transition: background-color 0.3s ease-in-out;
      border-radius: 10px;
    }
    .select option:hover {
      background-color: #ffd300;
      color: #fff;
    }
    .select option:checked {
      background-color: #ffd300;
      color: #fff;
    }
  </style>
  <div class="divCell">     
  <label class="label_Row">Выберите название Коллекции</label>  
  <select class='select'></select>
  <button class="selectArticle">выбрать</button>
  </div>
  <div></div>
`;
}
