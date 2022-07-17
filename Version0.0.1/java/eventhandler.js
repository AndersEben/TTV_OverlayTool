const mouseTarget = document.getElementById('App');
const ButtonHolder = document.getElementById('buttonholder');


var isEntered = false;
var willexit = false;
var waittoremove= false;
var willremove = false;


var waitTimer, slideTimer, exitTimer;


function MouseEnter()
{
    if(!isEntered){
        isEntered = true;
        waittoremove = true;

        waitTimer = setTimeout(function() {
            waittoremove = false;

            if(willremove)
            {
                MouseLeave();
            }
        }, 3000);

        CreateButton();
    }

    if(waittoremove)
    {
        clearTimeout(waitTimer);
        clearTimeout(exitTimer);
        clearInterval(slideTimer);

        waitTimer = null;
        exitTimer = null;
        slideTimer = null;

        waitTimer = setTimeout(function() {
            willexit = false;
            waittoremove = false;

            if(willremove)
            {
                MouseLeave();
            }
        }, 3000);
    }
}

function CreateButton(){

    var HideButton;

    HideButton = document.createElement("IMG");
	HideButton.setAttribute("src", "Server/123.jfif");
	HideButton.setAttribute("id", "netStatus");
	HideButton.setAttribute("class", "slide-in");
    HideButton.setAttribute("onclick", "openNav()");

    ButtonHolder.appendChild(HideButton);
    mouseTarget.appendChild(ButtonHolder);
}

function KillButton(){

    var buttonholder = document.getElementById("buttonholder");

    while (buttonholder.firstChild) {
        buttonholder.removeChild(buttonholder.lastChild);
	}
}

function SlideButton()
{
    var $slider = document.getElementById('netStatus');
    var isOpen = $slider.classList.contains('slide-in');
    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
}

function MouseLeave(){

    if(!willexit && !waittoremove)
    {
        willexit = true;

        slideTimer = setInterval(function() 
        {
            SlideButton();
            setTimeout(function() {
                KillButton();
                isEntered=false;
            }, 500);

        }, 3000);
    
        exitTimer = setTimeout(function() {
            clearInterval(slideTimer);
            willexit = false;
        }, 3750);
    
    }else{
        willremove = true;
    }
}

mouseTarget.addEventListener('mouseleave', e => {
    MouseLeave();
});

mouseTarget.addEventListener('mousemove', e => {
    MouseEnter();
});

mouseTarget.addEventListener('mouseenter', e => {
    MouseEnter();
});