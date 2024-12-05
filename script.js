let saniye = 11;
let skor = 0;
let challange = parseInt(Math.random() * 100);

// 1. Butona basıldığı zaman rastgele bir sayı olusturulacak ve saniyemiz (10sec) olarak başlayacak ve Interval metodu ile her saniye azalacak
// 2. Bir tane tıklama alanı olacak, bu alana tıklanıldığında değişkenin değeri 1 artacak. Sonrasında bir etiketin tcontent'i olarak değişkenin değeri ayarlanacak.
// 3. Saniye bittiği zaman sayfaya location.href ile aynı sayfaya tekrardan bir url yönlendirilmesi yapılacak.

let oyunBaslaButon = document.querySelector('body .container button')
let tiklamaAlan = document.querySelector('body .container .tiklamaAlani')
let h3 = document.querySelector('body .container h3')
let h4 = document.querySelector('body .container h4')
let sure = document.querySelector('body .container #sure')
let skorAyar = document.querySelector('body .container input[type="text"]')
let txtAyar = document.querySelector('body .container #txtSure')

function arttir() {
    skor++;
    h3.textContent = skor;
    if (h3.textContent == challange) {
        alert('Kazandın.')
        location.href = 'index.html' // Kullanıcıyı index.html urlsine yönlendiriyorum.
    }
}

function zamaniBaslat(){
    setInterval(function(){
        --saniye;
        sure.textContent = `Süre: ${saniye}`
        if(saniye == 0 && skor != challange){
            alert(`Süren bitti, belirli skorun altındasın. ${skor}. Olması gereken. ${challange}`)
            location.href = 'index.html'
        }
        else if(saniye == 0){
            alert('Süren bitti.')
            location.href = 'index.html'
        }
        else if(skor >= challange){
            alert(`Kazandın, belirli skorun üstündesin. ${skor}. Olması gereken ${challange}`)
        }
    },1000);
}

document.addEventListener('DOMContentLoaded', function () {
    h4.textContent = `Tıklanılması gereken sayı: ${challange}`
})

skorAyar.addEventListener('keyup', function () {
    challange = Number(skorAyar.value);
    h4.textContent = `Tıklanılması gereken sayı: ${challange}`
})


txtAyar.addEventListener('keyup', function() { // Süre inputuna bir şey yazılırsa saniye değişkeninin değeri metin kutusundaki değer ile güncellenir.
    saniye = Number(txtAyar.value)
    sure.textContent = saniye;
})