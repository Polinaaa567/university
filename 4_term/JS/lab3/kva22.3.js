let slovar = new Map([
    ['Пушкин', ['Борис Годунов', 'Евгений Онегин']],
    ['Есенин', ['Бабушкины сказки']],
    ['Данцова', ['Страсти-мордасти рогоносца', 'Маникюр для покойника', 'Бегемот под майонезом']]
]);

for (var pair of slovar.entries()) {
    console.log(pair[0] + ": " + pair[1])
}