var nameEle = document.querySelector("#name");
var ageEle = document.querySelector("#age");
var btnEle = document.querySelector("#btn");

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var age = ageEle.value;
        var name = nameEle.value;
        if(!(age && name)){
            alert("Please enter valid details");
            
        }
        return;
        if(age < 18){
            reject(`Oh sorry ${name}. You aren't old enough `);
        }
        else {
            resolve(`Welcome,${name}. You can vote`);
        }
    }, 4000);

});

function callPromise(){
    return promise;
}

function handlSubmit(e){
    e.preventDefault();
    callPromise().then(alert).catch(alert);
}

btnEle.addEventListener("click", handlSubmit);
