if ("ontouchstart" in document.documentElement)
{
    header = document.getElementById("cabecera");    
    header.classList.remove("sticky-top");
    let btnpc = document.getElementById("btndownload");
    btnpc.innerHTML = 
    "<a id='btndownloadpc' class='btn btn-outline-secondary' href='https://download944.mediafire.com/nwzujr63cmqg/lkvsw8ud1tsbyt9/registrapp-release-signed.apk'>Descargar APK</a>"
}
else
{
    let btnmobile = document.getElementById("btndownload");
    btnmobile.innerHTML =
    "<p>Escanea Aqui</p><img src='https://raw.githubusercontent.com/LETEX007/BootstrapRegistrApp/main/img/RegistrAPP.png' class'img-fluid' alt='RegistrAPP'></a>"
}