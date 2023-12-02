export default function () {
  return `
    <style>
    </style>

      <button class='ButtonExit'>EXIT</button>
      <div>
      <div><label>Название статьи </label><input class='Title'></input></div>
      <div><label>Автор/ы </label><input class='Author'></input></div>
      <div><label>Описание статьи </label><input class='body'></input></div>
      <div><label>Тэги </label><input class='tag'></input></div>
      </div>
      <button class='ButtonSave'>Добавить документ</button>
  `;
}
