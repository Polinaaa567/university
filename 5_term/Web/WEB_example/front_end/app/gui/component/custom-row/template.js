export default function() {return ` 
<style> 
.divTableRow {
	display: table-row;
}
.divTableCell {
	border: 1px solid #999999;
	display: table-cell;
	padding: 3px 5px;
}
.divTableCellAnswer {
	border: 1px solid #999999;
	padding: 3px 5px;
  width:140px;
}
.divTableCellStatus {
	border: 1px solid #999999;
	padding: 3px 5px;
  width:112px;
}
</style> 
  <div class="divTableRow">
    <div class="divTableCell"><custom-input></custom-input>+<custom-input></custom-input></div>
    <div class="divTableCell"><custom-button>▶</custom-button></div>
    <div class="divTableCellAnswer"><label></label></div>
    <div class="divTableCell"><custom-button>🚯♻️</custom-button></div>
    <div class="divTableCellStatus"><label></label></div>
    <div class="divTableCell"><custom-button>🔄</custom-button></div>
  </div> 
`}
