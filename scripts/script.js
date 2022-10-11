var contenido = document.querySelector('#contenido')

    function traer(){
        fetch("https://reqres.in/api/users?delay=3")
        .then(res => res.json() )
        .then(data => {
//console.log(datos)

tabla (data)
        })
    }
function tabla(data){
    //console.log(datos)
    contenido.innerHTML =''
    for (let valor of data.data){

       // console.log(valor.nombre)
       contenido.innerHTML += `
    
                  <tr>
                    <th scope="row">${valor.id}</th>
                    <td>${valor.email}</td>
                    <td>${valor.first_name}</td>
                    <td>${valor.last_name}</td>
                     <td>${valor.avatar}</td>
                  </tr>
                  `
    }

}
