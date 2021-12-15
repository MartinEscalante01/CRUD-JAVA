var args = location.search.substr(1).split('&');
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtApellido").value = parts[2][1]
document.getElementById("txtEmail").value = parts[3][1]
document.getElementById("txtEdad").value = parts[4][1]
document.getElementById("txtDocumento").value = parts[5][1]


function modificar() {

    let i = parseInt(document.getElementById("txtId").value)
    let n=document.getElementById("txtNombre").value 
    let apellido=document.getElementById("txtApellido").value
    let e=document.getElementById("txtEmail").value
    let edad=document.getElementById("txtEdad").value
    let documento=document.getElementById("txtDocumento").value
    

    let usuario = {
        id: i,
        nombre: n,
        apellido:apellido,
        email: e,
        edad:edad,
        documento:documento,
        
    }
    let url = "http://localhost:8080/registros"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
        })
        vm.$forceUpdate();
}