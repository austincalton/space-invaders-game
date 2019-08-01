//init object globally
var objImage= null;
var pWidth = (window.innerWidth > 0) ? (window.innerWidth)/2 : (screen.width)/2;
var pHeight = (window.innerHeight > 0) ? (window.innerHeight)/2 : (screen.height)/2;
console.log('Width: ' + pWidth);
console.log('Height: ' + pHeight);
function init(){
    objImage=document.getElementById("image1");				
    objImage.style.position='relative';
    objImage.style.left=pWidth + 'px';
    objImage.style.top=pHeight + 'px';
}
function getKeyAndMove(e){				
    var key_code=e.which||e.keyCode;
    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;	
        }
    }
    function moveLeft(){
        objImage.style.left=parseInt(objImage.style.left)-5 +'px';
    }
    function moveUp(){
        objImage.style.top=parseInt(objImage.style.top)-5 +'px';
    }
    function moveRight(){
        objImage.style.left=parseInt(objImage.style.left)+5 +'px';
    }
    function moveDown(){
        objImage.style.top=parseInt(objImage.style.top)+5 +'px';
    }
    window.onload=init;