// Sayfa içeriğini göster
function showPage(page) {
    let content = document.getElementById('page-content');
    
    switch(page) {
        case 'ekolojik-kredi':
            content.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, geri dönüşüm ve atık yönetimiyle ilgili yapılan katkılar karşılığında kazandığınız bir tür ödüllendirme sistemidir. Öğrenciler, geri dönüştürülebilir atıkları topladıkça belirli bir kredi kazanır ve bu kredi, çeşitli ödüllerle değiştirilebilir.</p>
            `;
            break;
        
        case 'hazirlayanlar':
            content.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        
        case 'geri-donusum':
            content.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların tekrar işlenerek yeni ürünler haline getirilmesi sürecidir. Bu, doğal kaynakların daha verimli kullanılmasını sağlar ve çevre kirliliğini azaltır. Her türlü geri dönüşüm işlemi, doğaya ve ekonomiye katkı sağlar.</p>
            `;
            break;
        
        case 'bize-ulasin':
            content.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>Email: ekolojikkreditubitak@gmail.com</p>
                <p>Adres: Torbalı Anadolu Lisesi, İzmir Torbalı</p>
                <p><a href="https://www.youtube.com/channel/UC-Link">YouTube Kanalımız</a></p>
            `;
            break;
        
        case 'kayit':
            content.innerHTML = `
                <h2>Kayıt Ol</h2>
                <form id="student-registration">
                    <label for="name">Adı:</label>
                    <input type="text" id="name" name="name" required><br><br>

                    <label for="surname">Soyadı:</label>
                    <input type="text" id="surname" name="surname" required><br><br>

                    <label for="studentNumber">Okul Numarası:</label>
                    <input type="text" id="studentNumber" name="studentNumber" required><br><br>

                    <label for="email">E-posta:</label>
                    <input type="email" id="email" name="email" required><br><br>

                    <label for="phone">Telefon Numarası:</label>
                    <input type="tel" id="phone" name="phone" required><br><br>

                    <label for="school">Okul Adı:</label>
                    <input type="text" id="school" name="school" required><br><br>

                    <label for="class">Sınıf:</label>
                    <input type="text" id="class" name="class" required><br><br>

                    <label for="city">İl:</label>
                    <input type="text" id="city" name="city" required><br><br>

                    <label for="district">İlçe:</label>
                    <input type="text" id="district" name="district" required><br><br>

                    <button type="submit">Kayıt Ol</button>
                </form>
            `;
            break;
        
        case 'veri-goruntuleme':
            content.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <form id="data-view">
                    <label for="viewEmail">E-posta:</label>
                    <input type="email" id="viewEmail" name="viewEmail" required><br><br>

                    <label for="viewStudentNumber">Okul Numarası:</label>
                    <input type="text" id="viewStudentNumber" name="viewStudentNumber" required><br><br>

                    <button type="submit">Veri Görüntüle</button>
                </form>
            `;
            break;

        case 'veri-giris':
            content.innerHTML = `
                <h2>Veri Girişi</h2>
                <form id="data-entry">
                    <label for="schoolName">Okul Adı:</label>
                    <input type="text" id="schoolName" name="schoolName" required><br><br>

                    <label for="schoolPassword">Okul Şifresi:</label>
                    <input type="password" id="schoolPassword" name="schoolPassword" required><br><br>

                    <label for="studentName">Öğrenci Adı:</label>
                    <input type="text" id="studentName" name="studentName" required><br><br>

                    <label for="studentSurname">Öğrenci Soyadı:</label>
                    <input type="text" id="studentSurname" name="studentSurname" required><br><br>

                    <label for="studentNumber">Öğrenci Numarası:</label>
                    <input type="text" id="studentNumber" name="studentNumber" required><br><br>

                    <label for="class">Sınıf:</label>
                    <input type="text" id="class" name="class" required><br><br>

                    <label for="wasteType">Atık Türü:</label>
                    <input type="text" id="wasteType" name="wasteType" required><br><br>

                    <label for="wasteWeight">Atık Ağırlığı (kg):</label>
                    <input type="number" id="wasteWeight" name="wasteWeight" step="0.01" required><br><br>

                    <label for="recordedBy">Kaydeden Kişi:</label>
                    <input type="text" id="recordedBy" name="recordedBy" required><br><br>

                    <button type="submit">Veri Kaydet</button>
                </form>
            `;
            break;

        default:
            content.innerHTML = `<p>Sayfa bulunamadı!</p>`;
    }
}

// Form verilerini işleme ve kaydetme
document.addEventListener("submit", function(event) {
    event.preventDefault();

    if (event.target.id === "student-registration") {
        const studentData = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            studentNumber: event.target.studentNumber.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            school: event.target.school.value,
            class: event.target.class.value,
            city: event.target.city.value,
            district: event.target.district.value
        };
        console.log("Öğrenci Kayıt Verisi:", studentData);
        alert("Kayıt başarılı!");
    }

    if (event.target.id === "data-entry") {
        const dataEntry = {
            schoolName: event.target.schoolName.value,
            schoolPassword: event.target.schoolPassword.value,
            studentName: event.target.studentName.value,
            studentSurname: event.target.studentSurname.value,
            studentNumber: event.target.studentNumber.value,
            class: event.target.class.value,
            wasteType: event.target.wasteType.value,
            wasteWeight: event.target.wasteWeight.value,
            recordedBy: event.target.recordedBy.value
        };
        console.log("Veri Girişi:", dataEntry);
        alert("Veri başarıyla kaydedildi!");
    }

    if (event.target.id === "data-view") {
        const viewData = {
            email: event.target.viewEmail.value,
            studentNumber: event.target.viewStudentNumber.value
        };
        console.log("Veri Görüntüleme:", viewData);
        alert("Veri görüntülendi!");
    }
});
