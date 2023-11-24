$(document).ready(function () {
	var url = window.location.href
	console.log(url);
	let id="ID_HERE"
	let pass="PASS_HERE"
	if( url.indexOf("fgtauth") > -1||url.indexOf("login?") > -1||url.indexOf("172.16.111.1:1000") > -1){
		document.getElementById('ft_un').value=id; 
		document.getElementById('ft_pd').value=pass; 
		document.getElementsByTagName('form')[0].submit();
	}

})