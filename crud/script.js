var selectedRow=null;
function OnFormSubmit(e){
    event.preventDefault();
    var formData=ReadFormatData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{
        UpdateRecord(formData);
}
    resetForm();

}
// Retrieve the data
function ReadFormData(){
    var formData={};
    formData["productCode"]= document.getElementById("productCode").value;
    formData["product"]= document.getElementById("product").value;
    formData["qty"]= document.getElementById("qty").value;
    formData["perPrice"]= document.getElementById("perPrice").value;
    return formData;
}
// Insert the data
function insertNewRecord(data){
    var table= document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perPrice;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onClick='OnEdit(this)'>Edit</button> <button>Delete</button>`


}
//Edit the data
function OnEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value=selectedRow.cell[0].innerHTML;
    document.getElementById('product').value=selectedRow.cell[1].innerHTML;
    document.getElementById('qty').value=selectedRow.cell[2].innerHTML;
    document.getElementById('perPrice').value=selectedRow.cell[3].innerHTML;
}
function UpdateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.qty;
    selectedRow.cells[3].innerHTML=formData.perPrice;

}
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row.td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
        resetForm();
}
function resetForm()
{
    document.getElementById('productCode').value=" ";
    document.getElementById('product').value=" ";
    document.getElementById('qty').value=" ";
    document.getElementById('perPrice').value=" ";

}