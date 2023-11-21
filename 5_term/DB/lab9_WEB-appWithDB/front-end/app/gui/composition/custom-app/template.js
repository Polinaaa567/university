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
  </style>
    <div class="divCell">
    <custom-button class="button-margin">список статей</custom-button>     
    <custom-input class="input-margin"></custom-input>
    <custom-button class="button-margin">Поиск по названию</custom-button>     
    <select ></select class="input-margin">
    <custom-button>Поиск по автору</custom-button>
    </div>
    <div></div>
`;
}
