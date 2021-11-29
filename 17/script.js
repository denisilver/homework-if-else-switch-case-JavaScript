let month = 7;

if ( month >= 1 && month <=2 ){
    alert('Зима');
}
if ( month >= 3 && month <= 5 ){
    alert('Весна');
}
if ( month >= 6 && month <= 8 ){
    alert('Лето');
}
if ( month >= 9 && month <= 11 ){
    alert('Осень');
}

//let month = 3;
switch (month) {
    case (month >= 1 && month <= 2):
       alert(Зима);
    break;
    case (month >= 3 && month <= 5):
        alert(Весна);
    break;
    case (month >= 6 && month <= 8):
        alert(Лето);
    break; 
    case (month >= 9 && month <= 11):
        alert(Осень);
    default:
        alert("What ist das?")
    break;
}
