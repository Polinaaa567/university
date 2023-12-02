export default function () {
  return ` 
  <style>
  .divCell {
	margin: 25px;
  }
  p {
    font: 18px arial;
  }
  .button-margin {
    margin-right: 10px;
   }
   .input-margin {
    margin-left: 10px;
   }
  select {
    background-color: #209DCA;
    color: white;
    padding: 12px;
    width: 250px;
    border: none;
    font: bold 18px arial;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }
   select option {
    padding: 30px;
  }
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
    <div class="divCell">
    <button class="button-margin">список статей</button>     
    <input class="input-margin"></input>
    <button class="button-margin">Поиск по названию</button>     
    <select ></select class="input-margin">
    <button>Поиск по автору</button>
    </div>
    <div></div>
`;
}
