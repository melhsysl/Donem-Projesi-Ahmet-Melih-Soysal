// Bu script tüm HTML dosyalarını güncellemek için kullanılacak

// Tüm HTML dosyalarını seçiyoruz
const htmlFiles = [
  'galeri.html',
  'blog.html',
  'iletisim.html',
  'teslimat.html',
  'yorumlar.html',
  'uretım.html'
];

// Her dosya için CSS ve JS bağlantılarını güncelliyoruz
htmlFiles.forEach(file => {
  // Dosya adından .html uzantısını kaldırıyoruz
  const baseName = file.replace('.html', '');
  
  // HTML dosyasını seçiyoruz
  const htmlFile = document.querySelector(`a[href="${file}"]`).closest('html');
  
  if (htmlFile) {
    // CSS bağlantısını güncelliyoruz
    const cssLink = htmlFile.querySelector('link[href="style.css"]');
    if (cssLink) {
      cssLink.setAttribute('href', `styles/${baseName}.css`);
    }
    
    // Script bağlantısını ekliyoruz
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', 'scripts/common.js');
    htmlFile.querySelector('body').appendChild(scriptTag);
  }
});

console.log('Tüm sayfalar güncellendi!');