function hideme() {
    if (document.getElementById("bt1").value=="Showbar") {
        document.getElementById("bt1").value="Hidebar"
        document.getElementById("menubar_mobile").style.display="g"
        document.getElementById("menubar_mobile").style.backgroundColor="#FC766AFF"
        document.getElementById("menubar_mobile").style.position="absolute"
        document.getElementById("menubar_mobile").style.top="50px"
        document.getElementById("menubar_mobile").style.left="0px"

            }
            else{
                document.getElementById("bt1").value="Showbar"
                document.getElementById("menubar_mobile").style.position="absolute"
                document.getElementById("menubar_mobile").style.top="0px"
                document.getElementById("menubar_mobile").style.left="-310px"

            }
}
