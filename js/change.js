const Wrap = document.getElementById('wrap'),
      lis = document.querySelectorAll('nav ul li'),
      A = document.querySelectorAll('nav ul li a');

function Remover() {
  for(i=0 ; i < lis.length ; i++){
    lis[i].classList.remove( 'on' );
  }
}   


for(i=0 ; i < lis.length ; i++){
  var j = 0
  lis[i].addEventListener('click', function(event){
    Remover();
    this.classList.add('on');
    Wrap.className = "";
    Wrap.classList.add(this.innerText);
    j = j + 1;
});}
      function changeTheme() {
        var now = new Date(),
            nhr = now.getHours();
        
          if(nhr >= 5 && nhr < 11){
            Wrap.className = "";
            Wrap.classList.add('morning');
            Remover();
            lis[0].classList.add('on');
      
          }else if(nhr >= 11 && nhr < 16){
            Wrap.className = "";
            Wrap.classList.add('afternoon');
            Remover();
            lis[1].classList.add('on');
      
          }else if(nhr >= 16 && nhr < 20){
            Wrap.className = "";
            Wrap.classList.add('evening');
            Remover();
            lis[2].classList.add('on');
      
          }else if(nhr >= 20 && nhr < 25 || nhr < 5){
            Wrap.className = "";
            Wrap.classList.add('night');
            Remover();
            lis[3].classList.add('on');
      
          }
        }
function init(){  changeTheme(); setInterval(changeTheme,600000); }
init();




















