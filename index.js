import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const EtkinlikListesi = () => {
  const [etkinlikler, setEtkinlikler] = useState([
    { baslik: ' İSTİKLAL MARŞI KONULU RESİM SERGİSİ ', tarih: '2021-12-27', konum: 'Tantavi Kültür ve Sanat Merkezi',aciklama: 'Meram Belediyesi, Necmettin Erbakan Üniversitesi ve Türkiye Yazarlar Birliği Konya Şubesi’nin iş birliğiyle Tantavi Kültür ve Sanat Merkezi’nde 27 Aralık Pazartesi günü resim sergisinin açılışı gerçekleştirilecek. Düzenlenen yarışmaya katılan resimlerin sergileneceği programda dereceye giren eser sahipleri ödüllerini protokol üyelerinin elinden alacak.
' },
    { baslik: 'TANTAVİ Kültür Merkezi KIŞ AKŞAMLARI MÜZİK DİNLETİSİ', tarih: '2023-01-15', konum: 'Tantavi Kültür ve Sanat Merkezi', aciklama: 'Meram Belediyesi tarafından organize edilen ‘Tantavi Kış Akşamları’ etkinlikleri ‘Gedavet Sesler Topluluğu’nun konseriyle start aldı. Tantavi Kültür ve Sanat Merkezi’nin ev sahipliğinde gerçekleştirilen konserde, şefliğini Eda Şentürk’ün yaptığı Gedavet Sesler Topluluğu, müzik dinletisi sundu. Çoğunluğunu öğretmenlerin oluşturduğu topluluğun sunduğu dinleti, izleyenlerine unutulmaz, eşsiz ve eğlenceli bir gece yaşattı.' },
    { baslik: 'Satranç turnuvası', tarih: '2023-09-19', konum: 'Meram Belediyesi', aciklama: 'Meram Belediyesi, Cumhuriyet’in 100. yılı etkinlikleri çerçevesinde satranç turnuvası düzenliyor. 27-29 Ekim tarihleri arasında gerçekleştirilecek turnuvanın başvuruları ise 25 Ekim tarihine kadar devam edecek. Meram Belediye Başkanı Mustafa Kavuş, tüm satranç sever hemşehrilerini bu anlamlı turnuvaya katılmaya davet etti.' },
    { baslik: 'KLASİK OTOMOBİL SERGİSİ', tarih: '2023-09-27', konum: '80 Binde Devr-i Alem Parkı', aciklama: 'Klasik otomobil tutkunlarının heyecanla beklediği ‘Klasik Otomobil Sergisi’ Meram Belediyesi 80 Binde Devr-i Alem Parkı otoparkında açıldı. Açılışa Meram Belediye Başkanı Mustafa Kavuş, AK Parti Meram İlçe Başkanı Mustafa Dolular, AK Parti Meram Kadın Kolları Başkanı Serpil Yurdaışık, Konya Klasik Otomobilciler Derneği Başkanı Muammer Deveci ve dernek yöneticileri ile klasik otomobil severler ve vatandaşlar katıldı. Otomobil, traktör ve motorsikletlerden oluşan yaklaşık yüz araçlık sergi renkli görüntülere sahne oldu.' },
    
  ]);

  const handleEtkinlikEkle = (event) => {
    event.preventDefault();

    const yeniEtkinlik = {
      baslik: event.target.baslik.value,
      tarih: event.target.tarih.value,
      konum: event.target.konum.value,
      aciklama: event.target.aciklama.value,
    };

    setEtkinlikler([...etkinlikler, yeniEtkinlik]);
    event.target.reset();
  };

  return (
    <div className="etkinlik-listesi">
      <header>
        <h1>Meram Belediyesi Etkinlikleri</h1>
      </header>
      <main>
        <section className="etkinlik-ekle">
          <h2>Etkinlik Ekle</h2>
          <form onSubmit={handleEtkinlikEkle}>
            <label htmlFor="baslik">Başlık:</label>
            <input type="text" id="baslik" name="baslik" required />

            <label htmlFor="tarih">Tarih:</label>
            <input type="date" id="tarih" name="tarih" required />

            <label htmlFor="konum">Konum:</label>
            <input type="text" id="konum" name="konum" required />

            <label htmlFor="aciklama">Açıklama:</label>
            <textarea id="aciklama" name="aciklama" rows="4"></textarea>

            <button type="submit">Etkinlik Ekle</button>
          </form>
        </section>

        <section className="etkinlikler">
          <h2>Yaklaşan Etkinlikler</h2>
          <ul>
            {etkinlikler.map((etkinlik, index) => (
              <li key={index} className="etkinlik-item">
                <h3>{etkinlik.baslik}</h3>
                <p>Tarih: {etkinlik.tarih}</p>
                <p>Konum: {etkinlik.konum}</p>
                <p>{etkinlik.aciklama}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Meram Belediyesi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<EtkinlikListesi />, document.getElementById('root'));
