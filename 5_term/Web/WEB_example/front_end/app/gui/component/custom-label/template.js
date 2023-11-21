console.log('Log:Exporting template for x-label');


export default function(vm) {return `  
<style> 
H1 {
  font-family:'Freestyle Script', serif;
  text-align: center;
  margin: 25px 10px;
  font-size: 45px;
  color: rgb(231, 63, 172);
  text-shadow: 0px 0px 5px rgb(72, 20, 71);
}  
</style> 
  <div class="divLableRow"> 
    <div> <label>User:  ${vm._userName}</label></div> 
    <div> <label>Всего задач: ${vm._quantityTasks}</label></div> 
    <div> <label> Задач выполнено: ${vm._doneTasks}</label></div>
    <div> <label> Задач обрабатываются: ${vm._performTasks}</label></div>
    <div> <label>Пустых задач: ${vm._emptyTasks}</label></div>
  </div>
 `}
// 
// 

