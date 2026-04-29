functionaddemployee(){
    let emp={
        name:document.getElementById("name").value,
        age:document.getElementById("age").value,
        department:document.getElementById("department").value,
        id:Document.getElementById("id").value
    }
}
function addemployee(){
    employees.push(emp);
    alert("Employee added successfully");
    