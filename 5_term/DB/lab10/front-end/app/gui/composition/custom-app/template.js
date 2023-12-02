export default function () {
  return ` 
  <style>
  .divCell {
	margin: 25px;
  }
  p {
    font: 18px arial;
  }
  .button-margin, .topButton, .AddArticle, .serchAuthor, .serchTitle {
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
    <button class="button-margin">Список статей</button>     
    <input class="input-margin"></input>
    <button class="serchTitle">Поиск по названию</button>     
    <select class='select'></select class="input-margin">
    <button class="serchAuthor">Поиск по автору</button>
    <button class="AddArticle">Добавить статью</button>
    <button class='topButton'>TOP 5</button>
    </div>
    <div class='DateDiff'>
    <label>Начало интервала</label> <input type='date' class='dateBegin'></input>
    <label>Конец интервала</label> <input type='date' class='dateEnd'></input>
    <button class='SendButton'>Отправить</button>
    </div>
    <div class='article'></div>
`;
}
