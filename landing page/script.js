var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Nintendo_Switch"><img class="crs" src="data/im10.jpg" alt="nientendo switch"><div class="tover"><br>nintendo switch</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/PlayStation_2"><img class="crs" src="data/im11.jfif" alt="bmw"><div class="tover"><br>Playstation 2</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/File:PS2-Fat-Console-Vert.jpg"><img class="crs" src="data/im13.jfif" alt="bolero"><div class="tover"><br>Playstation 2 Fat</div></a></div>';
        l+=1;
    }
  
   
    else
    {
        alert('More Content will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}