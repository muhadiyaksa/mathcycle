const tombolclose = document.querySelector('.close');
const mainwindow = document.querySelector('.main');

const tombolTambahSatu = document.getElementById('tambahSatu');
const tombolTambahDua = document.getElementById('tambahDua');
const tombolTambahTiga = document.getElementById('tambahTiga');
const tombolTambahEmpat = document.getElementById('tambahEmpat');
const tombolTambahLima = document.getElementById('tambahLima');

const tombolKurangDua = document.getElementById('kurangDua');
const tombolKurangTiga = document.getElementById('kurangTiga');
const tombolKurangEmpat = document.getElementById('kurangEmpat');
const tombolKurangLima = document.getElementById('kurangLima');
const tombolKurangEnam = document.getElementById('kurangEnam');

const barisDua = document.getElementById('barisdua');
const barisTiga = document.getElementById('baristiga');
const barisEmpat = document.getElementById('barisempat');
const barisLima =  document.getElementById('barislima');
const barisEnam =  document.getElementById('barisenam');




tombolclose.addEventListener('click', function(){
  mainwindow.style.visibility = 'hidden';      
});


//PROSES TOMBOL TAMBAH
tombolTambahSatu.addEventListener('click', function(){
  barisDua.style.display = 'block';
  tombolTambahSatu.style.visibility = 'hidden';
});

tombolTambahDua.addEventListener('click', function(){
  barisTiga.style.display = 'block';
  tombolTambahDua.style.visibility = 'hidden';
  tombolKurangDua.style.visibility = 'hidden';
});

tombolTambahTiga.addEventListener('click', function(){
  barisEmpat.style.display = 'block';
  tombolKurangTiga.style.visibility = 'hidden';
  tombolTambahTiga.style.visibility = 'hidden';
});

tombolTambahEmpat.addEventListener('click', function(){
  barisLima.style.display = 'block';
  tombolKurangEmpat.style.visibility = 'hidden';
  tombolTambahEmpat.style.visibility = 'hidden';

});

tombolTambahLima.addEventListener('click', function(){
  barisEnam.style.display = 'block';
  tombolKurangLima.style.visibility = 'hidden';
  tombolTambahLima.style.visibility = 'hidden';

});

//PROSES TOMBOL KURANG 
tombolKurangDua.addEventListener('click', function(){
  barisDua.style.display = 'none';
  tombolTambahSatu.style.visibility = 'visible';
});

tombolKurangTiga.addEventListener('click', function(){
  barisTiga.style.display = 'none';
  tombolKurangDua.style.visibility = 'visible';
  tombolTambahDua.style.visibility = 'visible';
});

tombolKurangEmpat.addEventListener('click', function(){
  barisEmpat.style.display = 'none';
  tombolKurangTiga.style.visibility = 'visible';
  tombolTambahTiga.style.visibility = 'visible';
});

tombolKurangLima.addEventListener('click', function(){
  barisLima.style.display = 'none';
  tombolKurangEmpat.style.visibility = 'visible';
  tombolTambahEmpat.style.visibility = 'visible';
});
tombolKurangEnam.addEventListener('click', function(){
  barisEnam.style.display = 'none';
  tombolKurangLima.style.visibility = 'visible';
  tombolTambahLima.style.visibility = 'visible';
});


const tclose = document.getElementById('tutup');
const peringatan = document.querySelector('.boxnotif');

if (tclose){
  tclose.addEventListener('click', function(){
    for (x = 10; x >= 0 ;x--){
      peringatan.style.opacity = 0.1 * x;
    }
    peringatan.style.transition = '0.5s';
  });
}


  
// tombolkontak.addEventListener('click', function(){
//   if (isikontak.style.display === "none"){
//     isikontak.style.display = "block";
//   }
//   else{
//     isikontak.style.display = "none";
//   }
// });