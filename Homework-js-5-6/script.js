let newPlant = document.getElementById("plus-form");
let close = document.getElementById('close');



table.onclick = function(){
    let allTable = document.getElementById("all-table");
    let onePlant = document.getElementsByClassName('one-plant');
    var p1 = document.getElementById('page_1');
    var p2 = document.getElementById('page_2');
    var p3 = document.getElementById('page_3');

    var len = allTable.childElementCount;

    p1.style.flexDirection="column";
    p2.style.flexDirection="column";
    p3.style.flexDirection="column";

    for (var i = 0; i<8; i++){
        onePlant[i].style.flexDirection = "row"
    }

}

list.onclick = function(){
    let allTable = document.getElementById("all-table");
    let onePlant = document.getElementsByClassName('one-plant');
    var p1 = document.getElementById('page_1');
    var p2 = document.getElementById('page_2');
    var p3 = document.getElementById('page_3');

    var len = allTable.childElementCount;

    p1.style.flexDirection="row";
    p2.style.flexDirection="row";
    p3.style.flexDirection="row";

    for (var i = 0; i<8; i++){
        onePlant[i].style.flexDirection = "column"
    }
}

plus.onclick = function(){
    newPlant.style.display="inline-block";
}

close.onclick = function(){
    newPlant.style.display="none";
}


//SEND FORM
send.onclick = function(){

    let allTable = document.getElementById("all-table");
    let onePlant = document.getElementsByClassName('one-plant');

    var nameInp = document.getElementById('name-form').value;
    var priceInp = document.getElementById('price-form').value;
    var descInp = document.getElementById('descr-form').value;
    var sizeInp = document.getElementById('size-form').value;
    var imgInp = document.getElementById('image-form');

    var curFiles = imgInp.files;

    var divOnePlant = document.createElement('div');
    divOnePlant.className = "one-plant";

    var imgPlant = document.createElement('img');
    if(imgInp = 'undefined'){
        alert('No image')
    }
    else{
        imgPlant.src = window.URL.createObjectURL(curFiles[0]);

    }

    var divInfo = document.createElement('div');
    divInfo.className = "info";

    var divName = document.createElement('div');
    divName.className = "name";

    var pDescript = document.createElement('p');
    pDescript.id = "descript";

    var pSizes = document.createElement('p');
    pSizes.id = "sizes";

    var hTitle = document.createElement('h4');
    hTitle.id = "title";

    var hPrice = document.createElement('h4');
    hPrice.id = "price-plant";
    
    allTable.appendChild(divOnePlant);
    divOnePlant.appendChild(imgPlant);
    divOnePlant.appendChild(divInfo);
    divInfo.appendChild(divName);
    divInfo.appendChild(pDescript);
    divInfo.appendChild(pSizes);
    divName.appendChild(hTitle);
    divName.appendChild(hPrice);

    if(nameInp === ''){
        nameInp = 'Title'
    }
    if(priceInp === ''){
        priceInp = 'Price'
    }
    if(descInp === ''){
        descInp = 'Description'
    }
    if(sizeInp === ''){
        sizeInp = 'Size'
    }

    hTitle.innerHTML = nameInp;
    hPrice.innerHTML = '$ ' + priceInp;
    pDescript.innerHTML = descInp;
    pSizes.innerHTML = sizeInp;
    imgPlant.innerHTML = imgInp.value;

    newPlant.style.display="none";
    

    if(allTable.style.flexDirection === "row"){
        for (var i = 0; i<len; i++){
            onePlant[i].style.flexDirection = "column";
        }
    }

    if(allTable.style.flexDirection === "column"){
        for (var i = 0; i<len; i++){
            onePlant[i].style.flexDirection = "row";
        }
    }
};


//Pages
let page1 = document.getElementById("page_1");
let page2 = document.getElementById("page_2");
let page3 = document.getElementById("page_3");
let pluss = document.getElementById(plus);
let pag = document.getElementsByClassName('pagin');


first.onclick = function(){
    page1.style.display="flex";
    page2.style.display="none";
    page3.style.display="none";
    plus.style.display="none";

    pag[1].classList.remove('foc');
    pag[2].classList.remove('foc');
    pag[0].classList.add('foc');
    return false;
}

second.onclick = function(){
    page1.style.display="none";
    page2.style.display="flex";
    page3.style.display="none";
    plus.style.display="none";

    pag[0].classList.remove('foc');
    pag[2].classList.remove('foc');
    pag[1].classList.add('foc');
    return false;
}

third.onclick = function(){
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="flex";
    plus.style.display="flex";

    pag[1].classList.remove('foc');
    pag[0].classList.remove('foc');
    pag[2].classList.add('foc');
    return false;
}
