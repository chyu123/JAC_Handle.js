window.onload = function () {
    var browserx = BrowserDetection();
    if (browserx == "Chrome"){

        var Confirm_Dialog = "<dialog id='confirm_01'></dialog>";
        var Alert_Dialog = "<dialog id='alert_01'></dialog>";
        
   
 
        document.getElementById('JAC_Dialogue_Temp').innerHTML += Confirm_Dialog;
        document.getElementById('JAC_Dialogue_Temp').innerHTML += Alert_Dialog;
    }

};

function JAC_Confirm(dialogtext, runyesfunction, runnofunction)
{
    var browserx = BrowserDetection();

    if (browserx == "Chrome")
    {
        JAC_showconfirmdialogforchrome(dialogtext, runyesfunction, runnofunction);
    } else {
        JAC_showconfirmdialogforfirefox(dialogtext, runyesfunction, runnofunction);
    }    
}

function JAC_Alert(dialogtext)
{
    var browserx = BrowserDetection();

    if (browserx == "Chrome")
    {
        JAC_showalertdialogforchrome(dialogtext);
    } else {
        JAC_showalertdialogforfirefox(dialogtext);
    }
}

function BrowserDetection() {
    //Check if browser is IE
    if (navigator.userAgent.search("MSIE") >= 0) {
        return "MSIE";
    }
    //Check if browser is Chrome
    else if (navigator.userAgent.search("Chrome") >= 0) {
        return "Chrome";
    }
    //Check if browser is Firefox 
    else if (navigator.userAgent.search("Firefox") >= 0) {
        return "Firefox";
    }
    //Check if browser is Safari
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        return "Chrome";
    }
    //Check if browser is Opera
    else if (navigator.userAgent.search("Opera") >= 0) {
        return "Chrome";
    }
}

function JAC_showconfirmdialogforchrome(dialogtext, runyesfunction, runnofunction){
    
    
    var x = document.getElementById("confirm_01");
    x.innerHTML = dialogtext + " <menu> <button id='b01' onclick=\"Dclose('confirm_01', '" + runyesfunction + "')\">ok</button> <button onclick=\"Dclose('confirm_01', '" + runnofunction + "')\">Cancel</button></menu>";
    x.showModal();
    
    
}

function JAC_showconfirmdialogforfirefox(dialogtext, runyesfunction, runnofunction){
    if (confirm(dialogtext)) { 
        window[runyesfunction]();
    } else {
        window[runnofunction]();
        
    }
}

function JAC_showalertdialogforchrome(dialogtext){
    
    var x = document.getElementById("alert_01");
    x.innerHTML = dialogtext + "<menu> <button id='b01' onclick=\"Dclose('alert_01', 'nothing')\">ok</button></menu>";
    x.showModal();

}

function JAC_showalertdialogforfirefox(dialogtext){

    alert(dialogtext);

}





function show_ok()
{
    alert("press OK");
}

function show_cancel()
{
    alert("press cancel");
}



function Dclose(part, DoAction)
{
    
    var x2 = document.getElementById(part);
    if (DoAction.toLowerCase() != 'nothing')
    {
        window[DoAction]();
    }
    x2.close();

}

