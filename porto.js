let afficher=document.getElementsByClassName('afficher');
let cacher=document.getElementsByClassName('cacher');
let entete=document.getElementsByClassName('entete');

afficher[0].onclick=function(){
    afficher[0].style.display="none";
    cacher[0].style.display="block";
    entete[0].style.display="block";
};
cacher[0].onclick=function(){
    afficher[0].style.display="block";
    cacher[0].style.display="none";
    entete[0].style.display="none";
};