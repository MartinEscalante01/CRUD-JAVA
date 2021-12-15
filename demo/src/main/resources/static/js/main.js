const app=new Vue({
    el:"#app",
    data:{
        usuarios:[],
        errored:false,
        loading: true
    },
    created(){
        var url='http://localhost:8080/registros'
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        eliminar(id){
            const url = 'http://localhost:8080/registros/'+id;
                      
            var options = {
                method: 'DELETE',
               }
            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
           // this.$forceUpdate();

        }
    }
})


function guardar(){
    let n=document.getElementById("txtNombre").value 
    let apellido=document.getElementById("txtApellido").value
    let e=document.getElementById("txtEmail").value
    let edad=document.getElementById("txtEdad").value
    let documento=document.getElementById("txtDocumento").value
    
    let usuario={
        nombre:n,
        apellido:apellido,
        email:e,
        edad:edad,
        documento:documento,
        
        
    }
    let url="http://localhost:8080/registros"
        var options = { 
            body: JSON.stringify(usuario),
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow'
        }
        fetch(url, options)
        .then(function() {
            console.log("creado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
        })


}

function modificar(){
    
    let i=parseInt(document.getElementById("txtId").value )
    let n=document.getElementById("txtNombre").value 
    let apellido=document.getElementById("txtApellido").value
    let e=document.getElementById("txtEmail").value
    let edad=document.getElementById("txtEdad").value
    let documento=document.getElementById("txtDocumento").value
    let p=parseInt(document.getElementById("txtPrioridad").value )
    

    let usuario={
        id:i,
        nombre:n,
        apellido:apellido,
        email:e,
        edad:edad,
        documento:documento,
        prioridad:p
    }
    let url="http://localhost:8080/registros"
        var options = { 
            body: JSON.stringify(usuario),
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow'
        }
        fetch(url, options)
        .then(function() {
            console.log("creado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
        })
}