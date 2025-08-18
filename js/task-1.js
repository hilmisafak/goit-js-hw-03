"use strict";
/*
Sorunu çözmeden önce, yeni bir terim tanımlayalım!

Slug terimi — okunabilir URL'ler oluşturmak için web geliştirmede kullanılan insan tarafından okunabilir benzersiz bir tanımlayıcıdır.

Örneğin, kullanıcının adres çubuğunda mysite.com/posts/1q8fh74tx adresini görmesi yerine, makalenin başlığından bir slug oluşturabilirsiniz. Sonuç olarak, adres daha okunabilir olacaktır: mysite.com/posts/arrays-for-beginners.

Slug — her zaman küçük harfli bir dizedir ve sözcükler tire ile ayrılmıştır.

Anladınız mı? Şimdi elimizdeki göreve devam edelim!

Makalenin başlığını, title parametresini alan ve bu dizeden oluşturulan slug'ı döndüren bir slugify(title) işlevi yazın.

title parametresinin değeri, sözcükleri yalnızca boşluklarla ayrılmış dizeler olacaktır.
Tüm slug karakterleri küçük harf olmalıdır.
Tüm slug kelimeler bir tire ile ayrılmalıdır.
Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Konsol, sonuçları gösterecektir.
*/

function slugify(title) {
  return title
    .toLowerCase() // Convert to lowercase
    .split(" ") // Split by spaces
    .join("-"); // Join with hyphens
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
