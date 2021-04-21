function hideme() {
    if (document.getElementById("bt1").value=="Showbar") {
        document.getElementById("bt1").value="Hidebar"
        document.getElementById("menubar_mobile").style.display="unset"
        document.getElementById("menubar_mobile").style.backgroundColor="#FC766AFF"


            }
            else{
                document.getElementById("bt1").value="Showbar"
                document.getElementById("menubar_mobile").style.display="hide"
            }
}
