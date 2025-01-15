# Node.js Mikroservis API Örneği

Bu proje, Node.js ve MongoDB kullanılarak geliştirilmiş bir mikroservis API örneğidir.

## Özellikler

- Kullanıcı yönetimi (CRUD işlemleri)
- Ürün yönetimi (CRUD işlemleri)
- Sipariş yönetimi (Oluşturma, İptal, Durum Güncelleme)
- MongoDB veritabanı entegrasyonu
- RESTful API tasarımı

## Gereksinimler

- Node.js (v14 veya üzeri)
- MongoDB
- npm veya yarn

## Kurulum

1. Projeyi klonlayın:

```bash
git clone [proje-url]
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. `.env` dosyasını oluşturun ve gerekli değişkenleri ayarlayın:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/microservice-db
NODE_ENV=development
```

4. Uygulamayı başlatın:

```bash
npm run dev
```

## API Endpoints

### Kullanıcılar

- GET /api/users - Tüm kullanıcıları listele
- GET /api/users/:id - Tek kullanıcı getir
- POST /api/users - Yeni kullanıcı oluştur
- PUT /api/users/:id - Kullanıcı güncelle
- DELETE /api/users/:id - Kullanıcı sil

### Ürünler

- GET /api/products - Tüm ürünleri listele
- GET /api/products/:id - Tek ürün getir
- POST /api/products - Yeni ürün oluştur
- PUT /api/products/:id - Ürün güncelle
- DELETE /api/products/:id - Ürün sil
- GET /api/products/category/:category - Kategoriye göre ürünleri listele

### Siparişler

- GET /api/orders - Tüm siparişleri listele
- GET /api/orders/:id - Tek sipariş getir
- POST /api/orders - Yeni sipariş oluştur
- PUT /api/orders/:id - Sipariş durumunu güncelle
- PUT /api/orders/:id/cancel - Sipariş iptal et
- GET /api/orders/user/:userId - Kullanıcının siparişlerini listele

## Güvenlik

- Helmet.js ile güvenlik başlıkları
- CORS koruması
- Request limitleme
- Input validasyonu

## Hata Yönetimi

Uygulama, merkezi hata yönetimi ile tüm hataları yakalar ve uygun HTTP durum kodları ile birlikte anlamlı hata mesajları döndürür.

## Geliştirme

1. Yeni bir özellik eklemek için:

   - İlgili model dosyasını oluşturun
   - Controller mantığını yazın
   - Route'ları tanımlayın
   - Gerekli testleri yazın

2. Test etmek için:

```bash
npm test
```

## Lisans

MIT
