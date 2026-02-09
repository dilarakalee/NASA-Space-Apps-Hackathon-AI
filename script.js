document.addEventListener('DOMContentLoaded', function() {
    let inputAlani = document.getElementById('kullaniciGirdisi');
    
    inputAlani.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            mesajGonder();
        }
    });
});

function mesajGonder() {
    let input = document.getElementById('kullaniciGirdisi');
    let chatKutusu = document.getElementById('chatKutusu');
    let mesajMetni = input.value.trim();

    if (mesajMetni === "") {
        return;
    }

    mesajEkle(mesajMetni, 'user-message');
    input.value = '';

    botCevapla(mesajMetni);
    asagiKaydir();
}

function mesajEkle(mesaj, className) {
    let chatKutusu = document.getElementById('chatKutusu');
    let yeniDiv = document.createElement('div');
    yeniDiv.classList.add('message', className);
    yeniDiv.textContent = mesaj;
    chatKutusu.appendChild(yeniDiv);
}

function botCevapla(kullaniciMesaji) {
    let cevap = `"${kullaniciMesaji}" hakkında gPlant veritabanı aranıyor...`;
    
    let kucukMesaj = kullaniciMesaji.toLowerCase();

    if (kucukMesaj.includes("gül")) {
        cevap = "Gül (Rosa), iyi drenajlı toprak ve bol güneş ışığı ister. Siyah leke hastalığına karşı düzenli kontrol önemlidir.";
    } else if (kucukMesaj.includes("sulama")) {
        cevap = "Genel olarak, toprağın üst yüzeyi kuruduğunda sulama yapın. Aşırı sulama kök çürümesine yol açabilir.";
    }

    setTimeout(function() {
        mesajEkle(cevap, 'bot-message');
        asagiKaydir();
    }, 1000);
}

function asagiKaydir() {
    let chatKutusu = document.getElementById('chatKutusu');
    chatKutusu.scrollTop = chatKutusu.scrollHeight;
}