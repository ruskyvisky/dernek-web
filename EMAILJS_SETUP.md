# 📧 EmailJS Kurulum Rehberi

Bu rehber, iletişim formunuzun çalışması için EmailJS servisini nasıl kuracağınızı açıklar.

## 🚀 Adım 1: EmailJS Hesabı Oluşturun

1. [https://www.emailjs.com/](https://www.emailjs.com/) adresine gidin
2. "Sign Up" butonuna tıklayarak ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

## 📮 Adım 2: Email Servisinizi Ekleyin

1. Dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. Gmail, Outlook veya kullandığınız e-posta servisini seçin
4. E-posta hesabınızla bağlantı kurun
5. Service ID'yi not alın (örnek: `service_abc123`)

## 📝 Adım 3: Email Template Oluşturun

1. "Email Templates" bölümüne gidin
2. "Create New Template" butonuna tıklayın
3. Template'i aşağıdaki gibi düzenleyin:

### Template Ayarları:
- **Template Name**: İletişim Formu
- **Subject**: `İletişim Formu: {{subject}}`

### Template İçeriği:
```
Yeni bir iletişim formu mesajı alındı:

Gönderen: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj web sitenizden otomatik olarak gönderilmiştir.
```

4. Template'i kaydedin ve Template ID'yi not alın (örnek: `template_xyz789`)

## 🔐 Adım 4: Public Key Alın

1. "Account" bölümüne gidin
2. "API Keys" sekmesine tıklayın
3. Public Key'i kopyalayın (örnek: `user_abc123xyz`)

## ⚙️ Adım 5: Kodunuzu Güncelleyin

`lib/email-config.ts` dosyasını açın ve aşağıdaki değerleri güncelleyin:

```typescript
export const emailConfig = {
  serviceId: 'service_abc123',     // Adım 2'de aldığınız Service ID
  templateId: 'template_xyz789',   // Adım 3'te aldığınız Template ID
  publicKey: 'user_abc123xyz',     // Adım 4'te aldığınız Public Key
  toEmail: 'info@edirnecochakhakları.org' // Mesajların geleceği e-posta
};
```

## 🧪 Adım 6: Test Edin

1. Web sitenizi çalıştırın: `npm run dev`
2. İletişim sayfasına gidin
3. Formu doldurup test mesajı gönderin
4. E-posta kutunuzu kontrol edin

## 🚨 Sorun Giderme

### "Template not found" Hatası
- Template ID'nin doğru olduğundan emin olun
- Template'in "Published" durumda olduğunu kontrol edin

### "Service not found" Hatası  
- Service ID'nin doğru olduğundan emin olun
- E-posta servisinizin aktif olduğunu kontrol edin

### "Invalid public key" Hatası
- Public Key'in doğru olduğundan emin olun
- Public Key'de boşluk veya fazladan karakter olmadığını kontrol edin

### E-posta Gelmiyor
- Spam klasörünü kontrol edin
- Template'deki değişken isimlerinin doğru olduğundan emin olun
- EmailJS dashboard'da "Logs" bölümünden hata mesajlarını kontrol edin

## 💡 İpuçları

- EmailJS ücretsiz planında ayda 200 e-posta gönderebilirsiniz
- Daha fazla e-posta için ücretli planlara geçebilirsiniz
- Template'te HTML formatı da kullanabilirsiniz
- Auto-reply (otomatik yanıt) özelliği de ekleyebilirsiniz

## 📞 Destek

Herhangi bir sorunla karşılaştığınızda [EmailJS Documentation](https://www.emailjs.com/docs/) sayfasını ziyaret edebilirsiniz.
