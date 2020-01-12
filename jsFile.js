var btnCV = document.getElementById('CV');
var btnFirst = document.getElementById('First');
var btnContact = document.getElementById('Contact'); 
var mainCont = document.getElementById('mainCont');





btnFirst.addEventListener('click',function(){
    mainCont.style.display = 'block';
});


btnCV.addEventListener('click',function(){
    mainCont.style.display = "none";
    });


btnContact.addEventListener('click',function(){
    mainCont.style.display = "none";
    });
