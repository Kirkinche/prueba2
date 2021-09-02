// JavaScript Document	
var admin = require("firebase-admin");
				var serviceAccount = require("path/to/serviceAccountKey.json");
				//
	
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prototipo-beta1-default-rtdb.firebaseio.com"
});

exports.addAdmin = functions.https.onCall((data, context)=>{
	if (context.auth.token.moderator !== true){
		return {
			error: "Solicitud no autorizada, el usuario debe ser un administrador para ejecutar la solicitud."
		};
	}
	const email=data.email;
	return hacerAdministrador(email).then(()=>{
	return {
		result: "¡Solicitud aceptada! ${email} es ahora administrador"
	}
		
	})
})
async function hacerAdministrador (email){
	try{
		const user= await admin.auth().getUserByEmail(email);
		if (user.customClaims && user.customClaims.administrador == true){
				return;
				}
		return admin.auth().setCustomUserClaims(user.uid,{administrador : true});
	}catch(error){console.error("Error en hacerAdministrador: "+error.message);}
}