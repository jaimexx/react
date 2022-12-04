const form= document.querySelector('.forms');
const lleno = [];

mayores = 0;
cntsexto = 0;
cntseptimo = 0;
cntoctavo = 0;
cntnoveno = 0;
cntdecimo = 0;
cntonce = 0;
cntm = 0;
cntf= 0; 
cntpv= 0;
cntplaya= 0;
cntmalambo= 0;
cntbarranquilla= 0;
cntgalapa = 0;
const validarFormulario = (e) =>{
    e.preventDefault();


    const nombre = document.querySelector('#Nombre').value;
    const apellido = document.querySelector('#Apellidos').value;
    const curso = document.querySelector('#curso').value;
    const edad = document.querySelector('#edad').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    if (sexo == null) {
        sexo = "";
    } else {
        sexo = sexo.value;
    }
    const estado = document.querySelector('#Estado_Civil').value;
    var pv = document.querySelector('input[name="pv"]:checked');
    if (pv == null) {
        pv = "";
    } else {
        pv = pv.value;
    }
    const ubicacion = document.querySelector('#ubicacion').value;

    if([nombre, apellido, curso, edad, sexo, estado, pv, ubicacion].includes("")){
        alert("todos los campos deben estar completos");
    }

   
    alert("Datos guardados");

    const datos = {
        nombre,
        apellido,
        curso,
        edad,
        sexo,
        estado,
        pv,
        ubicacion
    };

    form.reset();
    lleno.push(datos);


    console.table(lleno);
    if (edad >= 18){
        mayores = mayores + 1

    }
    if (curso == "Sexto"){
        cntsexto = cntsexto + 1 
        }
    if (curso == "Septimo"){
        cntseptimo = cntseptimo +1
    }
    if (curso == "Octavo"){
        cntoctavo = cntoctavo +1
    }
    if (curso == "Noveno"){
        cntnoveno = cntnoveno +1
    }
    if (curso == "Decimo"){
        cntdecimo = cntdecimo +1
    }
    if (curso== "Undecimo"){
        cntonce = cntonce + 1
    }
    if (sexo == "masculino"){
        cntm = cntm +1
    }
    if (sexo == "femenino"){
        cntf = cntf+1
    }
    if (pv=="si"){
        cntpv = cntpv + 1
    }
    if (ubicacion == "La playa"){
        cntplaya = cntplaya + 1
    }
    if (ubicacion == "Malambo" ){
        cntmalambo = cntmalambo+ 1
    }
    if (ubicacion == "Barranquilla"){
        cntbarranquilla = cntbarranquilla + 1
    }
    if (ubicacion == "Galapa"){
        cntgalapa = cntgalapa + 1
    }
};
console.log(mayores)
console.log(cntsexto)
console.log(cntseptimo)
console.log(cntoctavo)
console.log(cntnoveno)
console.log(cntdecimo)
console.log(cntonce)
console.log(cntm)
console.log(cntf)
console.log(cntpv)
console.log(cntplaya)
console.log(cntmalambo)
console.log(cntbarranquilla)
console.log(cntgalapa)
form.addEventListener("submit", validarFormulario);

