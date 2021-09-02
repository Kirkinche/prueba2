// JavaScript Document

			updateList = function() {
								var input = document.getElementById('file');
								var output = document.getElementById('fileList');
								var children = "";
								for (var i = 0; i < input.files.length; ++i) {
											children += '<li>' + input.files.item(i).name + '</li>';
													}
								output.innerHTML = '<ul>'+children+'</ul>';
								}
	function rutaarchivos(file){
		    const fileList = file.files;
			var numFiles = fileList.length;
			var filepath="";
			var filename="";
			filepath=file.value;
			let L=fileList[0].name.length;	
			filepath=filepath.slice(0,-L);
			console.log(file.value+" "+filepath);return filepath;
			};
	
	function mensajeriasubmit(form){
			var panelmensajeria2=document.getElementById("panelmensajeria2");
			var muestradatos=document.getElementById("muestradatos");
			panelmensajeria2.style.display="none";
			var mensaje="hola, el mensaje es: "+form.mensajeusuario.value+" y los datos de archivos son: ";
			const p=document.createElement("p");
			p.textContent=mensaje;
			muestradatos.append(p);
			const fileList = form.file.files;
			var numFiles = fileList.length;
			var filepath="";
			var filename="";
			let filesize=0;
			filepath=rutaarchivos(form.file);
			/*filepath=form.file.value;
			let L=fileList[0].name.length;	
			filepath=filepath.slice(0,-L);*/
			console.log(form.file.value+" "+filepath);
			console.log(form.file.files);
			const fileListsend=document.getElementById('fileListsend');
				for (let i = 0; i < numFiles; i++) {
				console.log(fileList[i].name);
				filename=fileList[i].name;
				filesize=fileList[i].size/1000;	
				const li=document.createElement("li");
				li.textContent=filename+" "+filesize+"KB  "+filepath+filename;
				fileListsend.append(li);
					}
	
	}
	
					