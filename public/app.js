var textinput1 = document.getElementById("input1");
var texterror1 = document.getElementById("error1");
var textinput2 = document.getElementById("input2");
var texterror2 = document.getElementById("error2");
var textinput3 = document.getElementById("input3");
var texterror3 = document.getElementById("error3");
var textinput4 = document.getElementById("input4");
var texterror4 = document.getElementById("error4");
var textinput5 = document.getElementById("input5");
var texterror5 = document.getElementById("error5");
var textinput6 = document.getElementById("input6");
var texterror6 = document.getElementById("error6");
var aray = [];
 function submit() {
    var value = textinput1.value;
    if (value == "") {
        texterror1.value = "First Nmae"
    } else {
        aray.push(textinput1.value)
        console.log(aray);
    };
 
 var value2 = textinput2.value;
 if (value2 == "") {
    texterror2.value = "Last Name"
 } else {
    aray.push(textinput2.value)
    console.log(aray);
 };
 var value3 = textinput3.value;
 if (value3 == "") {
    texterror3.value = "Email"
} else {
    aray.push(textinput3.value)
    console.log(aray);
}
var value4 = textinput4.value;
if (value4 == "") {
    texterror4.value = " Contact No"
} else {
    aray.push(textinput4.value)
    console.log(aray);
}
var value5 = textinput5.value;
if (value5 == "") {
    texterror5.value = " Password"
} else {
    aray.push(textinput5.value)
    console.log(aray);
}
var value6 = textinput6.value;
if (value6 == "") {
    texterror6.value = "C.NIC"
    } else {
        aray.push(textinput6.value)
        console.log(aray);
    }
}
