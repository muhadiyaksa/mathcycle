// JavaScript Document
let tombolHitungdprob = document.getElementById('dprob'); 
let tombolHitungdkum = document.getElementById('dkum'); 
let tombolHitungInterval = document.getElementById('interval');
let tombolHitungAkhir = document.getElementById('hasilakhir');

let pelangganNol = document.getElementById('pelanggannol');
let pelangganSatu = document.getElementById('pelanggansatu');
let pelangganDua = document.getElementById('pelanggandua');
let pelangganTiga = document.getElementById("pelanggantiga");
let pelangganEmpat = document.getElementById("pelangganempat");
let pelangganLima = document.getElementById("pelangganlima");

let nilaisatu = document.getElementById("nilaisatu");
let nilaidua = document.getElementById("nilaidua");
let nilaitiga = document.getElementById("nilaitiga");
let nilaiempat = document.getElementById("nilaiempat");
let nilailima = document.getElementById("nilailima");
let nilaienam = document.getElementById("nilaienam");

function hitungDprob(){
    let nol = parseInt(pelangganNol.value);
    let satu = parseInt(pelangganSatu.value);
    let dua = parseInt(pelangganDua.value);
    let tiga = parseInt(pelangganTiga.value);
    let empat = parseInt(pelangganEmpat.value);
    let lima = parseInt(pelangganLima.value);
    
    let gabunganNilai = [nol , satu , dua , tiga , empat , lima];
    
    totalfrekuensi =0;
    for (let i = 0; i < gabunganNilai.length ; i++){
        if(!gabunganNilai[i]){
            gabunganNilai[i] = 0;
        }
        totalfrekuensi += gabunganNilai[i];
    }

    let gabunganHasilDprob = [];
    for (let j = 0; j< gabunganNilai.length; j++ ){
        hasilBagi = gabunganNilai[j]/totalfrekuensi;
        gabunganHasilDprob.push(hasilBagi.toFixed(2));
    }

    return gabunganHasilDprob;
    

}

function hitungDkum(){
    let hasilDprob = hitungDprob();

    let hasilDkum = [];
    hasilDkum.push(parseFloat(hasilDprob[0]).toFixed(2));
    dkumsatu = 0;
    for (let i=0 ; i<hasilDprob.length - 1 ; i++){
        tambahsatu = parseFloat(hasilDprob[i+1]);
        if (tambahsatu !== 0){
        dkumsatu = parseFloat(hasilDkum[i]) + tambahsatu;
        hasilDkum.push(dkumsatu.toFixed(2));
        }
        else { 
            hasilDkum.push(0);
        }
    }

    let hasilDkumAkhir = []
    for (let j=0; j<hasilDkum.length; j++){
        if(hasilDkum[j] == 1.01 ){
            nilai01 = parseFloat(hasilDkum[j]) - 0.01 ;
            hasilDkumAkhir.push(nilai01); 
        }
        else if (hasilDkum[j] == 0.99){
            nilai01 = parseFloat(hasilDkum[j]) + 0.01 ;
            hasilDkumAkhir.push(nilai01); 
        }
        else{
            hasilDkumAkhir.push(hasilDkum[j]);
        }
    }

    return hasilDkumAkhir;
}

function hitungNilaiInterval(){
    let hasilDkum = hitungDkum();

    let hasilInterval = [];
    let hasilInduk = 0;
    let hasilAnak =0 ;
    hasilInterval.push(1);
    for (let i=0; i<hasilDkum.length ; i++){
        if (hasilDkum[i] == 0 || !hasilDkum[i]){
            hasilInduk = 0;
            hasilAnak = 0;
            hasilInterval.push(hasilInduk.toFixed(0));
            hasilInterval.push(hasilAnak.toFixed(0)); 
        }
        else{
            hasilInduk = parseFloat(hasilDkum[i]) * 100;
            hasilAnak = hasilInduk + 1 ;
            hasilInterval.push(hasilInduk.toFixed(0));
            hasilInterval.push(hasilAnak.toFixed(0)); 
        }
    }
    return hasilInterval;
}

function hitungNilaiAkhir(){
    let skalaInterval = hitungNilaiInterval();
    let hasilSkalaInterval = [];

    for (let l = 0 ; l<skalaInterval.length; l++){
        if (parseInt(skalaInterval[l]) > 100 ){
            nilaiSkala = 0;
            hasilSkalaInterval.push(nilaiSkala);
        }
        else{
            hasilSkalaInterval.push(parseInt(skalaInterval[l]));
        }
    }

    let hari_ = 0;
    let prediksi = document.getElementById("form1").kategori.value;
    let peringatan = document.querySelector(".boxnotif");
    if (prediksi == "tujuh"){
        hari_ = 7;
    }
    else if (prediksi == "limabelas"){
        hari_= 15;
    }
    else if (prediksi == "tigapuluh"){
        hari_ = 30;
    }
    else{
        hari_ = 0;
        
        peringatan.style.display = 'block';
        setTimeout(function() {
            for (x = 0; x < 450 ; x++){
                peringatan.style.right = -1 * x + 'px';
                if(x == 400){
                    peringatan.style.visibility = 'hidden';
                }
            }
            
            peringatan.style.transition = '0.5s';
        }, 5000 );
        
        
    }

    let bilanganacak = [];
    for (i = 0 ; i < hari_ ; i++){
        bilacak = Math.floor(Math.random()*100);
        bilanganacak.push(bilacak.toFixed(0));
    }

    let nsatu = parseInt(nilaisatu.value);
    let ndua = parseInt(nilaidua.value);
    let ntiga = parseInt(nilaitiga.value);
    let nempat = parseInt(nilaiempat.value);
    let nlima = parseInt(nilailima.value);
    let nenam = parseInt(nilaienam.value);

    let gabunganNilai = [nsatu, ndua , ntiga , nempat , nlima , nenam];
    let gabunganNilaiAkhir = [];
    for (let i=0; i<gabunganNilai.length; i++){
        if (!gabunganNilai[i]){
            isiNilai = 0;
        }
        else{
            isiNilai = gabunganNilai[i];
            gabunganNilaiAkhir.push(isiNilai);
        }
    }


    let hasilseleksiinterval= [];
    for (j =0; j < hari_ ; j++){
        nilaibil = bilanganacak[j];
        if (nilaibil <= hasilSkalaInterval[1]) { 
            nilaiakhirinterval = gabunganNilaiAkhir[0];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else if (nilaibil >= hasilSkalaInterval[2] && nilaibil <= hasilSkalaInterval[3]){ 
            nilaiakhirinterval = gabunganNilaiAkhir[1];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else if (nilaibil >= hasilSkalaInterval[4] && nilaibil <= hasilSkalaInterval[5]){ 
            nilaiakhirinterval = gabunganNilaiAkhir[2];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else if (nilaibil >= hasilSkalaInterval[6] && nilaibil <= hasilSkalaInterval[7]){ 
            nilaiakhirinterval = gabunganNilaiAkhir[3];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else if (nilaibil >= hasilSkalaInterval[8] && nilaibil <= hasilSkalaInterval[9]){ 
            nilaiakhirinterval = gabunganNilaiAkhir[4];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else if (nilaibil >= hasilSkalaInterval[10] && nilaibil <= hasilSkalaInterval[11]){ 
            nilaiakhirinterval = gabunganNilaiAkhir[5];
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
        else { 
            nilaiakhirinterval = 0;
            hasilseleksiinterval.push(nilaiakhirinterval);
        }
    }

    let totalAkhirSimulasi =0
    for ( let m=0; m<hasilseleksiinterval.length ; m++){
        totalAkhirSimulasi += hasilseleksiinterval[m];
        
    }
    let nilaiAkhirSimulasi = totalAkhirSimulasi / hari_;
    let akhir = Math.ceil(nilaiAkhirSimulasi);
    return akhir;
}




tombolHitungdprob.addEventListener('click', function(){
    let hasilDprob = hitungDprob();

    let dprobAkhir= [];
    for(let i = 0 ;  i<hasilDprob.length; i++){
        if (hasilDprob[i] == 0 ){
            isi = "-";
            dprobAkhir.push(isi);
        }
        else{
            dprobAkhir.push(hasilDprob[i]);
        }
        
    }

    document.getElementById('hasildprobnol').innerHTML = "[ 0 ] "+dprobAkhir[0]+"";
    document.getElementById("hasildprobsatu").innerHTML ="[ 1 ] = "+dprobAkhir[1]+"";
    document.getElementById("hasildprobdua").innerHTML ="[ 2 ] = "+dprobAkhir[2]+"";
    document.getElementById('hasildprobtiga').innerHTML = "[ 3 ] = "+dprobAkhir[3]+"";
    document.getElementById("hasildprobempat").innerHTML ="[ 4 ] = "+dprobAkhir[4]+"";
    document.getElementById("hasildproblima").innerHTML ="[ 5 ] = "+dprobAkhir[5]+"";
});

tombolHitungdkum.addEventListener('click', function(){
    let hasilDkum = hitungDkum();

    let dkumAkhir= [];
    for(let i = 0 ;  i<hasilDkum.length; i++){
        if (hasilDkum[i] == 0 || !hasilDkum[i] ){
            isi = "-";
            dkumAkhir.push(isi);
        }
        else{
            dkumAkhir.push(hasilDkum[i]);
        }
        
    }
    document.getElementById('hasildkumnol').innerHTML = "[ 0 ] "+dkumAkhir[0]+"";
    document.getElementById("hasildkumsatu").innerHTML ="[ 1 ] = "+dkumAkhir[1]+"";
    document.getElementById("hasildkumdua").innerHTML ="[ 2 ] = "+dkumAkhir[2]+"";
    document.getElementById('hasildkumtiga').innerHTML = "[ 3 ] = "+dkumAkhir[3]+"";
    document.getElementById("hasildkumempat").innerHTML ="[ 4 ] = "+dkumAkhir[4]+"";
    document.getElementById("hasildkumlima").innerHTML ="[ 5 ] = "+dkumAkhir[5]+"";

});

tombolHitungInterval.addEventListener('click', function(){
    let hasilInterval = hitungNilaiInterval();

    let intervalAkhir = [];
    for(let i = 0 ;  i<hasilInterval.length; i++){
        if (hasilInterval[i] == 0 || !hasilInterval[i] ){
            isi = " ";
            intervalAkhir.push(isi);
        }
        else if(parseInt(hasilInterval[i]) > 100){
            isi = " ";
            intervalAkhir.push(isi);
        }
        else{
            intervalAkhir.push(hasilInterval[i]);
        }
        
    }
    document.getElementById('hasilintnol').innerHTML = " "+intervalAkhir[0]+" - "+intervalAkhir[1]+" ";
    document.getElementById("hasilintsatu").innerHTML =" "+intervalAkhir[2]+" - "+intervalAkhir[3]+" ";
    document.getElementById("hasilintdua").innerHTML =" "+intervalAkhir[4]+" - "+intervalAkhir[5]+" ";
    document.getElementById('hasilinttiga').innerHTML = " "+intervalAkhir[6]+" - "+intervalAkhir[7]+" ";
    document.getElementById("hasilintempat").innerHTML =" "+intervalAkhir[8]+" - "+intervalAkhir[9]+" ";
    document.getElementById("hasilintlima").innerHTML =" "+intervalAkhir[10]+" - "+intervalAkhir[11]+" ";
});


tombolHitungAkhir.addEventListener('click', function(){
    let nilaiAkhir = hitungNilaiAkhir();

    document.getElementById("letakHasilAkhir").innerHTML =""+nilaiAkhir+" Elemen";

});