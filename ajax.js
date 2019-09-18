"use struct";

/*function loadDoc() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange =function(){
if(this.readyState == 4 && this.status == 200) {
   myfunction(this);

}

    }

xhttp.open("GET", "proba.txt", true);
xhttp.send();

}

function myfunction(that){
    let szoveg = that.responseText;
    let tomb = szoveg.split("\n")
    let kiir ="";
    for(let i=0; i < tomb.length; i++) {
        kiir +=tomb[i] + "<br />";viszlát
    }
    document.getElementById("ide").innerHTML=kiir;
}
*/
function loadDoc(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            myfunction(this);
        }


    }
    xhttp.open("GET", "nobel.csv", true);
    xhttp.send();

}
function myfunction(that) {
    let szoveg= that.responseText;
    let tomb = szoveg.split('\n')
    int ev= document.forms["urlap"]["year"].value;
    int ev= document.forms["urlap"]["price"].value;
    let txt ="";
    for(let i=1; i < tomb.length; i++) {
        let ideig=tomb[i].split(';')
        for(let j=1; j < tomb.length; j++)
        
            txt +="<div>";
            txt +=`<p>Év: ${ideig[0]}</p>`;
            txt +=`<p>Miért: ${ideig[1]}</p>`;
            txt +=`<p>Név: ${ideig[2]} ${ideig[3]}</p>`;
            txt +="</div>";
        }
    
    document.getElementById("ide").innerHTML=txt;
}
*/





}