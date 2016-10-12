console.log('Loaded!');

var img=document.getElementById('bhanu');
img.onclick=function(){
    var marginLeft=0;
    function moveRight(){
        marginLeft = marginLeft+10;
        img.style.margin=marginLeft+'px';
    }
    var interval=setInterval(moveRight,100);
    img.style.marginleft='10px';
};