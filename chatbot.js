
// =======================================
// COLOCA AQUÍ TU API KEY DE GOOGLE AI
// =======================================


const API_KEY = "AQ.Ab8RN6IW9qvti8AQRKRzgVebPTgzXXoCWoxKZvdXofzKMk4AIA";



// Modelo Gemini

const URL = 
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="
+ API_KEY;




async function enviarPregunta(){


let entrada =
document.getElementById("pregunta");


let pregunta =
entrada.value;



if(pregunta=="") return;



mostrarMensaje(
pregunta,
"usuario"
);



entrada.value="";



let respuesta;



try{


let resultado =
await fetch(URL,{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

contents:[

{

parts:[

{

text:
"Eres un profesor experto en geometría para estudiantes. Responde de forma clara, divertida y con ejemplos relacionados con videojuegos. Pregunta del estudiante: "
+ pregunta

}

]

}

]

})


});



let datos =
await resultado.json();



respuesta =
datos.candidates[0]
.content.parts[0].text;



}

catch(error){


respuesta=
"⚠️ Error al conectar con el Maestro Geométrico.";


}



mostrarMensaje(
respuesta,
"bot"
);



}




function mostrarMensaje(texto,tipo){


let chat =
document.getElementById("chat");


let div =
document.createElement("div");


div.className =
"mensaje "+tipo;


div.innerHTML =
texto;


chat.appendChild(div);



chat.scrollTop =
chat.scrollHeight;


}
