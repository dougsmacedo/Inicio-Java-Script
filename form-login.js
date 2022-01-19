
document.getElementById("tabela-usuarios").onload=listUser();

function listUser() {
    var tabUser = document.getElementById("tabela-usuarios");
    var db_usuarios = JSON.parse(localStorage.getItem("db_usuarios"));
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
                
        console.log("i: "+i);
        tabUser.innerHTML += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${usuario.nome}</td>
                <td>${usuario.login}</td>
                <td>${usuario.email}</td>
            </tr>`       
        // return true;
    }      
}

function uploadFile() {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    var imgNoticia = document.getElementById('imgNoticia');

    formData.append('imgNoticia', fileField.files[0],imgNoticia);

    var request = new XMLHttpRequest();
    request.open("POST", "imgs/galeria");
    request.send(formData);
}