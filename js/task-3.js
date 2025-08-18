"use strict";
/*
Parametre olarak bir sayı dizisi ve bir değer alan bir filterArray(numbers, value) fonksiyonu yazın. Fonksiyon, numbers dizisinden yalnızca value değerinden büyük olan sayılardan oluşan yeni bir dizi döndürmelidir.



Özelliklerin içinde:

Eşleşen sayıları ekleyeceğiniz boş bir dizi oluşturun.
numbers dizisinin her bir öğesi üzerinde yineleme yapmak için bir döngü kullanın.
Her bir öğeyi kontrol etmek ve dizinize eklemek için döngü içindeki koşullu if ifadesini kullanın.
Sonuç olarak eşleşen sayıları içeren yeni dizinizi döndürün.
Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.
*/

function filterArray(numbers, value) {
  const result = [];
  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
