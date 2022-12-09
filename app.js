// function
function resetField(input, label = null){
    input.forEach(field => {
        field.value = "";
        field.removeAttribute('disabled');
    });
    if(label != null){
        label.setAttribute("disabled", true);
    }
}

function setDisabled(inp1, inp2){
    inp1.forEach(field => {
        field.onclick = function() {
            inp2.forEach(dbl => {
                dbl.setAttribute('disabled', true);
                console.log(dbl.input);
                
            });
        }
    });
}

// var
const sPersegi = document.querySelector('#sisiPersegi');
const hasil = document.querySelector('#hasil')
const kll = document.querySelector('.kll')
const luas = document.querySelector('.luas')
const lHasil = document.querySelector('#lHasil')
const reset = document.querySelector('.reset')
let result = 0;

kll.addEventListener('click', function(){
    result = 4 * (sPersegi.value);
    // alert(result);
    lHasil.textContent = "Hasil Keliling";
    hasil.value =  result;
});
luas.addEventListener('click', function(){
    result = (sPersegi.value) * (sPersegi.value);
    // alert(result);
    lHasil.textContent = "Hasil Luas";
    hasil.value = result;
});
reset.addEventListener('click', function(){
    hasil.value = "";
    sPersegi.value = "";
});

// persegi panjang
// pjg dan lbr valuenya string
const pjg = document.querySelector("#pPsgPjg");
const lbr = document.querySelector("#lPsgPjg");
const kllP = document.querySelector('.kllP')
const luasP = document.querySelector('.luasP')
const hasilP = document.querySelector('#hasilP')
const lHasilP = document.querySelector('#lHasilP')
const resetP = document.querySelector('.resetP')

kllP.addEventListener('click', () => {
    result = 2 * (Number(pjg.value) + Number(lbr.value));
    hasilP.value = result;
    lHasilP.textContent = "Hasil Keliling";  
});

luasP.addEventListener('click', () => {
    result = Number(pjg.value) * Number(lbr.value);
    hasilP.value = result;
    lHasilP.textContent = "Hasil Luas";  
});

resetP.addEventListener('click', function(){
    pjg.value = "";
    lbr.value = "";
    hasilP.value = "";
});

// segitiga
const alasS = document.getElementById('alasS');
const tinggiS = document.querySelector('#tinggiS');
const lHasilS = document.querySelector('#lHasilS');
const hasilS = document.querySelector('#hasilS');
const sisiA = document.querySelector('#sisiSA');
const sisiB = document.querySelector('#sisiSB');
const sisiC = document.querySelector('#sisiSC');
const kllS = document.querySelector('.kllS');
const luasS = document.querySelector('.luasS');
const resetS = document.querySelector('.resetS');
const fieldS = document.querySelector('#inputS').querySelectorAll("input");
const fieldLS = document.querySelector('#inputLS').querySelectorAll("input");

// console.log(fieldLS);
setDisabled(fieldS, fieldLS);
setDisabled(fieldLS, fieldS);


// console.log(alasS);
luasS.addEventListener('click', ()=> {
    if (alasS.value && tinggiS.value) {
        result = (Number(alasS.value) * Number(tinggiS.value)) / 2;
        hasilS.value = result;
        lHasilS.textContent = "Luas Segitiga";
    }else{
        hasilS.value = "Itu rumus Keliling bambank";
    }
    // console.log(alasS.value);
});

resetS.addEventListener('click', ()=>{
    resetField(fieldLS, hasilS);
    resetField(fieldS);
});

kllS.addEventListener('click', ()=>{
    if (sisiA.value && sisiB.value && sisiC.value) {
        result = Number(sisiA.value) + Number(sisiB.value) + Number(sisiC.value);
        hasilS.value = result;
        lHasilS.textContent = "Keliling Segitiga";
    }else{
        hasilS.value = "yang kau input itu rumus luas cuy";
    }
});

// Belah Ketupat
const sisiBK = document.querySelector('#sisiBK');
const diagA = document.querySelector('#diagA');
const diagB = document.querySelector('#diagB');
const hasilBK = document.querySelector('#hasilBK');
const LHasilBK = document.querySelector('#lHasilBK');
const kllBK = document.querySelector('.kllBK');
const luasBK = document.querySelector('.luasBK');
const resetBK = document.querySelector('.resetBK');
const fieldSBK = document.querySelector('#inputSBK').querySelectorAll("input");
const fieldDiag = document.querySelector('#inputDiag').querySelectorAll("input");

setDisabled(fieldSBK, fieldDiag);
setDisabled(fieldDiag, fieldSBK);

kllBK.addEventListener('click', () => {
    result = 4 * Number(sisiBK.value);
    hasilBK.value = result;
    LHasilBK.textContent = "Hasil Kelilingnya : ";
})

luasBK.addEventListener('click', ()=> {
    result = 2 * (Number(diagA.value) + Number(diagB.value));
    hasilBK.value = result;
    LHasilBK.textContent = "Hasil Luasnya : ";

})

resetBK.addEventListener('click', ()=> {
    resetField(fieldDiag);
    resetField(fieldSBK, hasilBK);
})

// trapesium
const traA = document.querySelector("#traA");
const traB = document.querySelector("#traB");
const traC = document.querySelector("#traC");
const traD = document.querySelector("#traD");
const tralasA = document.querySelector("#tralasA");
const tralasB = document.querySelector("#tralasB");
const traTinggi = document.querySelector("#traTinggi");
const lHasilTra = document.querySelector("#lHasilTra");
const hasilTra = document.querySelector("#hasilTra");
const kllTra = document.querySelector(".kllTra");
const luasTra = document.querySelector(".luasTra");
const resetTra = document.querySelector(".resetTra");
const traSisi = document.querySelector("#inputTraS").querySelectorAll("input");
const traAlas = document.querySelector("#inputAlasTra").querySelectorAll("input");

setDisabled(traSisi, traAlas);
setDisabled(traAlas, traSisi);
// console.log(kllTra);
kllTra.addEventListener('click', () => {
    result = Number(traA.value) + Number(traB.value) + Number(traC.value) + Number(traD.value);
    lHasilTra.textContent = "Hasil Keliling : ";
    hasilTra.value = result;
});
// console.log(tralasA, tralasB, traTinggi);
luasTra.addEventListener('click', () => {
    result = (Number(tralasA.value) + Number(tralasB.value)) * Number(traTinggi.value) ;
    hasilTra.value = result;
    lHasilTra.textContent = "Hasil Luas : ";
});

resetTra.addEventListener('click', ()=> {
    resetField(traSisi);
    resetField(traAlas, hasilBK);
})

