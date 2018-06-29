# Javascript Alert and Confrim repalcement for Chrome (JAC_Handle.js)


With new Google Chrome since Chrome 57, Chromium Team had decided to reduce of [important on Javascript confirm and alert popup](https://developers.google.com/web/updates/2017/03/dialogs-policy) that was made with javascript to prevent the [harmfulness](https://blog.malwarebytes.com/cybercrime/2013/12/android-pop-ups-warn-of-infection/) with malware or etc. 
Problem with Chrome changed is, when Chrome browser confirm() by clickin event ot auto popup by code, and users accidentially click on other place than the popup confirmation box like other windows or other tab, Chrome will make action 'cancel' automatically to that Javascript confirm().
This simple Javascript will help to easily implement confirm and alert command with  `JAC_alert()` + `JAC_confirm()` command to call HTML5 tag `<dialog>` to use on Google Chrome and still use __old javascript method on Firefox and other browsers__. It will keep showing to user util they click button on the box.

##How to use

1. Add Javascript link to 'JAC_Handle.js`
```html
<html>
    <head>
            <script src="JAC_Handle.js"></script>
    </head>
<body>
```

2. Add `<span id='JAC_Dialogue_Temp'>` to your HTML document
```html
<span  id='JAC_Dialogue_Temp'></span>
```

3. Replace code: 
   - Replace Javascript `confirm ('Text'){}` with `JAC_Confirm('Text','FunctionName_to_run', 'FunctionName_to_cancel')`
   - Replace Javascript `alert('Text')` with `JAC_Alert('Text')`

```html
<button onclick="JAC_Confirm('Do something about confirm ?', 'show_ok', 'show_cancel')">Show dialog</button>


<button onclick="JAC_Alert('Be careful !!')">Show dialog</button>
```

Sameple in [test.html](test.html)



