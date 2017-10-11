; (function ($) {


function isNumber(dig){
			if(dig.charCodeAt(0)>=48 && dig.charCodeAt(0)<=57){
				return true;
			}
			return false;
		}

		function isLetra(dig){
			if((dig.charCodeAt(0)>=65 && dig.charCodeAt(0)<=90)||(dig.charCodeAt(0)>=97 && dig.charCodeAt(0)<=122) ){
				return true;
			}
			return false;
		}

		function isSimbol(dig){
			if(dig.charCodeAt(0)>=33 && dig.charCodeAt(0)<=47){
				return true;
			}
			return false;
		}

	
$.fn.testaSenha=function(){

		$(this).append($("<textarea/>").addClass("senha"))
		 .append($("<span />").addClass("tipo"));		

		var qtd=0;
		 $(".senha").keyup(function(){

			var senha =  $(".senha").val();
			console.log(senha);
			var temLetra= false ;
			var temNum= false ;
			var temSimbol= false;

				for(var i = 0; i< senha.length;i++){
					if(isLetra(senha.charAt(i))){
						temLetra=true;
					}

					if(isSimbol(senha.charAt(i))){
						temSimbol=true;
					}

					if(isNumber(senha.charAt(i))){
						temNum=true;
					}
				}
				if(temNum==true && temSimbol==true && temLetra==true){
					qtd=3;
				}
				if (temNum==false && temSimbol==true && temLetra==true){
					qtd=2;
				}
				if (temNum==true && temSimbol==true && temLetra==false){
					qtd=2;
				}
				if (temNum==true && temSimbol==false && temLetra==true){
					qtd=2;
				}
				if(temNum==true && temSimbol==false && temLetra==false){
					qtd=1;
				}
				if(temNum==false && temSimbol==true && temLetra==false){
					qtd=1;
				}
				if(temNum==false && temSimbol==false && temLetra==true){
					qtd=1;
				}
				if(senha.length< 8){
					if (qtd==2){
						$(".tipo").attr("id","warning").text("Fraca!");
					}
					if(qtd==1){
						$(".tipo").attr("id","danger").text("Muito fraca!");
					}
					if(qtd==3){
						$(".tipo").attr("id","normal").text("Moderada!");
					}
				}else if(senha.length>= 8){
					if (qtd==2){
						$(".tipo").attr("id","normal").text("Moderada!");
					}
					if(qtd==1){
						$(".tipo").attr("id","warning").text("Fraca!");
					}
					if(qtd==3){
						$(".tipo").attr("id","strong").text("Forte!");
					}
				}



		 });

};


}) (jQuery);