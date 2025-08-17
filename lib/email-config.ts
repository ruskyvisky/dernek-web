// EmailJS Configuration
// Bu dosyadaki değerleri EmailJS hesabınızdan alacağınız bilgilerle değiştirin

export const emailConfig = {
  // EmailJS'den alacağınız Service ID
  serviceId: 'service_qlx4089',
  
  // EmailJS'den alacağınız Template ID  
  templateId: 'template_awi8its',
  
  // EmailJS'den alacağınız Public Key
  publicKey: 'BRSbH8qxUKU8nLwzB',
  
  // Mesajların gönderileceği e-posta adresi
  toEmail: 'diricannuman@gmail.com'
};

// EmailJS kurulum adımları:
/*
1. https://www.emailjs.com/ adresine gidin ve ücretsiz hesap oluşturun
2. Email Services bölümünden Gmail/Outlook vb. servisinizi ekleyin
3. Email Templates bölümünde yeni template oluşturun
4. Template'de şu değişkenleri kullanın:
   - {{from_name}} - Gönderenin adı
   - {{from_email}} - Gönderenin e-postası  
   - {{phone}} - Telefon numarası
   - {{subject}} - Konu
   - {{message}} - Mesaj içeriği
   - {{to_email}} - Alıcı e-posta

5. Bu dosyadaki YOUR_SERVICE_ID, YOUR_TEMPLATE_ID ve YOUR_PUBLIC_KEY değerlerini
   EmailJS dashboard'unuzdan aldığınız gerçek değerlerle değiştirin.
*/
