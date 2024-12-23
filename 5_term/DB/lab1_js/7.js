"use strict";

let student = {
  last_name: "Жданов",
  first_name: "Андрей",
  patronymic: "Вадимович",
  birth_year: 2005,
  class: 9,
  favorite_disciplines: ["Математика", "Физика", "Физ-ра"],

  placeReg: {
    country: "Россия",
    city: "Нижний Новгород",
    num_house: 15,
    num_apartment: 24,
  },

  placeLiv: {
    country: "Россия",
    city: "Нижний Новгород",
    num_house: 2,
    num_apartment: 16,
  },

  Info: function () {
    document.writeln("Фамилия: " + this.last_name);
    document.writeln(`<p>Имя: ${this.first_name}</p>`);
    document.writeln(`<p>Отчество: ${this.patronymic}</p>`);
    document.writeln(`<p>Год рождения: ${this.birth_year}</p>`);
    document.writeln(`<p>Класс: ${this.class}</p>`);
    document.writeln(
      `<p>Любимые дисциплины: ${this.favorite_disciplines.join(", ")}</p>`
    );
    document.writeln(`<p>Страна места прописки: ${this.placeReg.country}</p>`);
    document.writeln(`<p>Город места прописки: ${this.placeReg.city}</p>`);
    document.writeln(
      `<p>Номер дома места прописки: ${this.placeReg.num_house}</p>`
    );
    document.writeln(
      `<p>Номер квартиры места прописки: ${this.placeReg.num_apartment}</p>`
    );
    document.writeln(
      `<p>Страна места проживания: ${this.placeLiv.country}</p>`
    );
    document.writeln(`<p>Город места проживания: ${this.placeLiv.city}</p>`);
    document.writeln(
      `<p>Номер дома места проживания: ${this.placeLiv.num_house}</p>`
    );
    document.writeln(
      `<p>Номер квартиры места проживания: ${this.placeLiv.num_apartment}</p>`
    );
  },
};

student.Info();
