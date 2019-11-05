var goods = [
    {ratingRevievs: "264 отзыва", price: {oldUan: "4333 грн", newUan: "3799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"}, 
    {ratingRevievs: "1355 отзывов", price: "4999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"}, 
    {ratingRevievs: "426 отзывов", price: "5199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, 
    {ratingRevievs: "403 отзыва", price: "4349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"}, 
    {ratingRevievs: "488 отзывов", price: "6199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, 
    {ratingRevievs: "198 отзывов", price: {oldUan: "3495 грн", newUan: "2995 грн"}, name: "Lenovo K5 (A6020a40) Silver"}, 
    {ratingRevievs: "352 отзыва", price: {oldUan: "9799 грн", newUan: "7999 грн"}, name: "Apple iPhone 5s 16GB Space Gray"}, 
    {ratingRevievs: "59 отзывов", price: "5999 грн", name: "Nokia 5 Dual Sim Tempered Blue"}, 
    {ratingRevievs: "119 отзывов", price: "11999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"}, 
    {ratingRevievs: "1106 отзывов", price: "3999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"}, 
    {ratingRevievs: "380 отзывов", price: "2199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"}, 
    {ratingRevievs: "86 отзывов", price: {oldUan: "24999 грн", newUan: "22999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"}, 
    {ratingRevievs: "177 отзывов", price: "6499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, 
    {ratingRevievs: "347 отзывов", price: "4299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, 
    {ratingRevievs: "709 отзывов", price: "2799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, 
    {ratingRevievs: "527 отзывов", price: "3999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, 
    {ratingRevievs: "66 отзывов", price: "16499 грн", name: "Apple iPhone 6s 32GB Gold"}, 
    {ratingRevievs: "14 отзывов", price: "11499 грн", name: "Apple iPhone 6 32GB Space Gray"}, 
    {ratingRevievs: "70 отзывов", price: {oldUan: "7399 грн", newUan: "5999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"}, 
    {ratingRevievs: "45 отзывов", price: "4299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, 
    {ratingRevievs: "376 отзывов", price: "3899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"}, 
    {ratingRevievs: "111 отзывов", price: {oldUan: "9999 грн", newUan: "7999 грн"}, name: "Sony Xperia X Dual (F5122) White"}, 
    {ratingRevievs: "40 отзывов", price: "2222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"}, 
    {ratingRevievs: "93 отзыва", price: "18999 грн", name: "Apple iPhone 7 32GB Black"}, 
    {ratingRevievs: "33 отзыва", price: "16999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, 
    {ratingRevievs: "71 отзыв", price: {oldUan: "2399 грн", newUan: "1999 грн"}, name: "LG K5 X220ds Gold"}, 
    {ratingRevievs: "39 отзывов", price: "2995 грн", name: "Lenovo C2 Power (K10a40) Black"}, 
    {ratingRevievs: "156 отзывов", price: "2599 грн", name: "Nous NS 5006 Gold"}, 
    {ratingRevievs: "40 отзывов", price: "19689 грн", name: "LG G6 Mystic White"}, 
    {ratingRevievs: "24 отзыва", price: "5995 грн", name: "Motorola MOTO G5 (XT1676) Grey"}, 
    {ratingRevievs: "7 отзывов", price: {oldUan: "10999 грн", newUan: "9999 грн"}, name: "HTC One X10 Dual Sim Silver"}, 
    {ratingRevievs: "18 отзывов", price: {oldUan: "5999 грн", newUan: "4999 грн"}, name: "Sony Xperia L1 Dual Black"}
]

for(var k = 0; k < goods.length; k++){
    var p = document.createElement("p");
    source.appendChild(p);
    var tempRev = goods[k].ratingRevievs;
    var tempPrice = goods[k].price;
    var tempName = goods[k].name
    if(typeof(tempPrice) === 'object'){
        var tempPrice = goods[k].price.newUan;
    }
    p.innerHTML = tempName + "   |   " + tempRev + "   |   " + tempPrice;
}


function sort_increase(){
    document.getElementById("sortIncrease").innerHTML = "";
    document.getElementById("source").style.display="none";
    document.getElementById("sortDecrease").style.display="none";
    document.getElementById("priceIncrease").style.display="none";
    document.getElementById("priceDecrease").style.display="none";
    var endI = goods.length-1;
    for(var i=0; i<endI; i++){
        for(var j = 0, endJ = endI - i; j < endJ; j++){
    
            var count1 = goods[j].ratingRevievs.split(' ');
            var count2 = goods[j+1].ratingRevievs.split(' ');
    
            if(+count1[0] > +count2[0]){
                var swap = goods[j];
                goods[j] = goods[j+1];
                goods[j+1] = swap;
            }
        }
    }

    for(var k = 0; k < goods.length; k++){
        var p = document.createElement("p");
        sortIncrease.appendChild(p);
        var tempRev = goods[k].ratingRevievs;
        var tempPrice = goods[k].price;
        var tempName = goods[k].name;
        if(typeof(tempPrice) === 'object'){
            var tempPrice = goods[k].price.newUan;
        }
        p.innerHTML = tempName + "   |   " + tempRev + "   |   " + tempPrice;
    }

    document.getElementById("sortIncrease").style.display="block";
}



function sort_decrease(){
    document.getElementById("sortDecrease").innerHTML = "";
    document.getElementById("source").style.display="none";
    document.getElementById("sortIncrease").style.display="none";
    document.getElementById("priceIncrease").style.display="none";
    document.getElementById("priceDecrease").style.display="none";

    var endI = goods.length-1;
    for(var i=0; i<endI; i++){
        for(var j = 0, endJ = endI - i; j < endJ; j++){
    
            var count1 = goods[j].ratingRevievs.split(' ');
            var count2 = goods[j+1].ratingRevievs.split(' ');
    
            if(+count1[0] < +count2[0]){
                var swap = goods[j];
                goods[j] = goods[j+1];
                goods[j+1] = swap;
            }
        }
    }

    for(var k = 0; k < goods.length; k++){
        var p = document.createElement("p");
        sortDecrease.appendChild(p);
        var tempRev = goods[k].ratingRevievs;
        var tempPrice = goods[k].price;
        var tempName = goods[k].name
        if(typeof(tempPrice) === 'object'){
            var tempPrice = goods[k].price.newUan;
        }
        p.innerHTML = tempName + "   |   " + tempRev + "   |   " + tempPrice;
    }

    document.getElementById("sortDecrease").style.display="block";
}


function price_increase(){
    document.getElementById("priceIncrease").innerHTML = "";
    document.getElementById("source").style.display="none";
    document.getElementById("sortIncrease").style.display="none";
    document.getElementById("sortDecrease").style.display="none";
    document.getElementById("priceDecrease").style.display="none";


    var endI = goods.length-1;
    for(var i=0; i<endI; i++){
        for(var j = 0, endJ = endI - i; j < endJ; j++){
            
            var count1 = goods[j].price;
            var count2 = goods[j+1].price;

            if(typeof(count1) === 'object'){
                var count1 = goods[j].price.newUan.split('');
            }
            else{
                var count1 = goods[j].price.split('');
            }


            if(typeof(count2) === 'object'){
                var count2 = goods[j+1].price.newUan.split('');
            }
            else{
                var count2 = goods[j+1].price.split('');
            }

            for(var a = 0; a<3; a++){
                count1.pop();
            }
            var cost1 = Number(count1.join(''));

            for(var b = 0; b<3; b++){
                count2.pop();
            }
            var cost2 = Number(count2.join(''));


            if(+cost1 > +cost2){
                var swap = goods[j];
                goods[j] = goods[j+1];
                goods[j+1] = swap;
            }
        }
    }

    for(var k = 0; k < goods.length; k++){
        var p = document.createElement("p");
        priceIncrease.appendChild(p);
        var tempRev = goods[k].ratingRevievs;
        var tempPrice = goods[k].price;
        var tempName = goods[k].name
        if(typeof(tempPrice) === 'object'){
            var tempPrice = goods[k].price.newUan;
        }
        p.innerHTML = tempName + "   |   " + tempRev + "   |   " + tempPrice;
    }

    document.getElementById("priceIncrease").style.display="block";
}

function price_decrease(){
    document.getElementById("priceDecrease").innerHTML = "";
    document.getElementById("source").style.display="none";
    document.getElementById("sortIncrease").style.display="none";
    document.getElementById("sortDecrease").style.display="none";
    document.getElementById("priceIncrease").style.display="none";


    var endI = goods.length-1;
    for(var i=0; i<endI; i++){
        for(var j = 0, endJ = endI - i; j < endJ; j++){
            
            var count1 = goods[j].price;
            var count2 = goods[j+1].price;

            if(typeof(count1) === 'object'){
                var count1 = goods[j].price.newUan.split('');
            }
            else{
                var count1 = goods[j].price.split('');
            }


            if(typeof(count2) === 'object'){
                var count2 = goods[j+1].price.newUan.split('');
            }
            else{
                var count2 = goods[j+1].price.split('');
            }

            for(var a = 0; a<3; a++){
                count1.pop();
            }
            var cost1 = Number(count1.join(''));

            for(var b = 0; b<3; b++){
                count2.pop();
            }
            var cost2 = Number(count2.join(''));


            if(+cost1 < +cost2){
                var swap = goods[j];
                goods[j] = goods[j+1];
                goods[j+1] = swap;
            }
        }
    }

    for(var k = 0; k < goods.length; k++){
        var p = document.createElement("p");
        priceDecrease.appendChild(p);
        var tempRev = goods[k].ratingRevievs;
        var tempPrice = goods[k].price;
        var tempName = goods[k].name
        if(typeof(tempPrice) === 'object'){
            var tempPrice = goods[k].price.newUan;
        }
        p.innerHTML = tempName + "   |   " + tempRev + "   |   " + tempPrice;
    }

    document.getElementById("priceDecrease").style.display="block";
}