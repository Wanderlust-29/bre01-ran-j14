window.addEventListener("DOMContentLoaded", function(){
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let firstName = document.createTextNode("Prénom");
    let lastName = document.createTextNode("Nom");
    
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    document.body.appendChild(table)
    
    table.appendChild(tr);
    tr.appendChild(th)
    tr.appendChild(th2);
    th.appendChild(firstName);
    th2.appendChild(lastName);
    
    for (let i=0; i< users.length; i++){
        let user = users[i];
        tr = document.createElement("tr");
        
        for (let j = 0; j<user.length; j++){
            let nameLastName = document.createTextNode(user[j]);
            let td = document.createElement("td");
            td.appendChild(nameLastName);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    

});