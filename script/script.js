/// UYGA VAZIFA ////
/// 1-misol
// let son = prompt("uch xonali sonni kiriting: ");
// let yuzlar = Math.floor(son / 100);
// let onlar = Math.floor((son % 100) / 10);
// let birliklar = son % 10;
// console.log(birliklar, onlar, yuzlar);


// 2-misol
// let son = prompt("1 dan 12 gacha bo'lgan sonni kiriting: ");
// switch (son) {
//     case "1":
//         console.log("Yanvar");
//         break;
//     case "2":
//         console.log("Fevral");
//         break;
//     case "3":
//         console.log("Mart");
//         break;
//     case "4":
//         console.log("Aprel");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("Iyun");
//         break;
//     case "7":
//         console.log("Iyul");
//         break;
//     case "8":
//         console.log("Avgust");
//         break;
//     case "9":
//         console.log("Sentabr");
//         break;
//     case "10":
//         console.log("Oktyabr");
//         break;
//     case "11":
//         console.log("Noyabr");
//         break;
//     case "12":
//         console.log("Dekabr");
//         break;
//     default:
//         console.log("12 dan katta son kiritdingiz: ");
//         break;
// }

// 3-misol
// let  uzunligi = prompt("balandligingizni kiriting: ");
// if (uzunligi>= 180 && uzunligi<= 200) {
//     console.log("siz uzun bo'y");
// }else if (uzunligi >= 160 && uzunligi< 180) {
// console.log("siz o'rta bo'y");
    
// }else if (uzunligi  >= 150 && uzunligi< 160) {
//     console.log("siz kichik bo'y");

// }  else {
//     console.log("sizning bo'yingiz judayam kichik");
// }

//  4-misol
// let a = prompt("birinchi sonni kiriting: ");  
// let b = prompt("ikkinchi sonni kiriting: ");

// if (a === b) {
//     console.log("Ikkala son teng.");
// } else {
//     console.log("Ikkala son teng emas.");
// }


// 5-misol
// let a = prompt("birinchi sonni kiriting: ");  
// let b = prompt("ikkinchi sonni kiriting: ");
// if (a % b === 0) {
//     console.log(a + " raqami " + b + " raqamiga qoldiqsiz bo'linadi.");
// } else {
//     console.log(a + " raqami " + b + " raqamiga qoldiq bilan bo'linadi.");
// }


//  6-misol
// let word = prompt("Iltimos, biror so'z kiriting:"); 
// let length = word.length;  

// if (length > 5) {
//     console.log("Bu so'z uzun.");  
// } else {
//     console.log("Bu so'z qisqa.");  
// }


// 7-msiol
// let number = prompt("Iltimos, biror raqam kiriting:");  
// number = Number(number);  

// if (number > 0) {
//     number++;  
//     console.log("Musbat raqam, 1 ga oshirilgan natija: " + number);
// } else if (number < 0) {
//     number--;  
//     console.log("Manfiy raqam, 1 ga kamaytirilgan natija: " + number);
// } else {
//     console.log("Raqam nolga teng.");
// }



//  8-misol
// let temp = prompt("Iltimos, haroratni kiriting:");  
// temp = Number(temp);  

// if (temp < 0) {
//     console.log("Sovuq");
// } else if (temp >= 0 && temp <= 20) {
//     console.log("Salqin");
// } else {
//     console.log("Issiq");
// }


// 9-misol
// let fan1 = prompt("1-fan bo'yicha ballni kiriting:");
// let fan2 = prompt("2-fan bo'yicha ballni kiriting:");
// let fan3 = prompt("3-fan bo'yicha ballni kiriting:");
// let fan4 = prompt("4-fan bo'yicha ballni kiriting:");
// let fan5 = prompt("5-fan bo'yicha ballni kiriting:");
// let ortacha_baho = (fan1 + fan2 + fan3 + fan4 + fan5) / 5;
// console.log("Umumiy o'rtacha baho: " + ortacha_baho);

// if (ortacha_baho >= 60) {
//     console.log("Imtihondan o‘tdi");
// } else {
//     console.log("Imtihondan yiqildi");
// }


//  10-misol
// let transport = prompt("Iltimos, transport vositasini tanlang (avtobus, avtomobil, poyezd):");
// switch (transport.toLowerCase()) {
//     case "avtobus":
//         console.log("Avtobus uchun yo'l haqi: 5000 so'm");
//         break;
//     case "avtomobil":
//         console.log("Avtomobil uchun yo'l haqi: 15000 so'm");
//         break;
//     case "poyezd":
//         console.log("Poyezd uchun yo'l haqi: 10000 so'm");
//         break;
//     default:
//         console.log("Noma'lum transport vositasi tanlandi.");
// }


//  11-misol
// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let kopaytma = son1 * son2;
// if (kopaytma % 2 === 0) {
//     console.log("Ko'paytma juft son.");
// } else {
//     console.log("Ko'paytma toq son.");
// }


//  12-misol
// let yosh = prompt("Yoshingizni kiriting:");
// if (yosh < 13) {
//     console.log("Sizga bolalar filmi tavsiya qilinadi.");
// } else if (yosh >= 13 && yosh <= 18) {
//     console.log("Sizga o'smirlar uchun film tavsiya qilinadi.");
// } else if (yosh > 18) {
//     console.log("Sizga kattalar uchun film tavsiya qilinadi.");
// } else {
//     console.log("Noto'g'ri yosh kiritildi.");
// }


//   13-misol
// let number = prompt("Iltimos, biror raqam kiriting:");
// if (number >= 100 && number <= 999) {
//     console.log("Kiritilgan raqam uch xonali son.");
// } else {
//     console.log("Kiritilgan raqam uch xonali emas.");
// }


//   14-misol
// let a = prompt("1-o'zgaruvchini kiriting:");
// let b = prompt("2-o'zgaruvchini kiriting:");
// a++;
// if (a === b) {
//     console.log("O'zgaruvchilar teng.");
// } else {
//     console.log("O'zgaruvchilar teng emas.");
// }


//   15-misol
// let meva = prompt("Meva tanlang (olma, banan, apelsin):");
// let narx;
// if (meva === "olma") {
//     narx = 1000; // olma narxi
// } else if (meva === "banan") {
//     narx = 1200; // banan narxi
// } else if (meva === "apelsin") {
//     narx = 1500; // apelsin narxi
// } else {
//     narx = "Bunday meva mavjud emas."; 
// }
// console.log("Tanlangan meva: " + meva);
// console.log("Narxi: " + narx);


//    16-misol
// let yosh = prompt("Yoshingizni kiriting:");
// let jins = prompt("Jinsingizni kiriting (erkak/yosh):");
// let sportTuri;
// if (jins === "erkak") {
//     if (yosh < 18) {
//         sportTuri = "Futbol"; 
//     } else {
//         sportTuri = "Tennis";
//     }
// } else if (jins === "ayol") {
//     if (yosh < 18) {
//         sportTuri = "Ballet"; 
//     } else {
//         sportTuri = "Yoga";
//     }
// } else {
//     sportTuri = "Noma'lum jins";
// }
// console.log("Sizga tavsiya etilgan sport turi: " + sportTuri);


//    17-misol
// let raqam = prompt("Raqamni kiriting:");
// if (raqam % 5 === 0) {
//     console.log(raqam + " raqami 5 ga bo'linadi.");
// } else {
//     console.log(raqam + " raqami 5 ga bo'linmaydi.");
// }


//     18-misol
// let tezlik = prompt("O'rtacha tezlikni (km/soat) kiriting:");
// let vaqt = prompt("Vaqtni (soat) kiriting:");
// let masofa = tezlik * vaqt;h
// console.log("Avtomobil " + masofa + " km yo'l bosadi.");


//      19-misol
// let raqam1 = prompt("Birinchi raqamni kiriting:");
// let raqam2 = prompt("Ikkinchi raqamni kiriting:");
// let farq = raqam1 - raqam2;
// if (farq > 0) {
//     console.log("Farq ijobiy: " + farq);
// } else if (farq < 0) {
//     console.log("Farq manfiy: " + farq);
// } else {
//     console.log("Farq nolga teng.");
// }


//      20-misol
// let shahar = prompt("Shahar nomini kiriting:");
// let mamlakat;

// if (shahar === "Toshkent") {
//     mamlakat = "O‘zbekiston";
// } else if (shahar === "Nyu-York") {
//     mamlakat = "AQSh";
// } else if (shahar === "London") {
//     mamlakat = "Buyuk Britaniya";
// } else if (shahar === "Parij") {
//     mamlakat = "Fransiya";
// } else if (shahar === "Moskva") {
//     mamlakat = "Rossiya";
// } else {
//     mamlakat = "Bunday shahar mavjud emas.";
// }
// console.log("Tanlangan shahar: " + shahar);
// console.log("Bu shahar " + mamlakat + "ga tegishli.");


// 21-misol
// let raqam = prompt("Raqamni kiriting:");
// if (raqam % 2 === 0) {
//     console.log(raqam + " raqami juft.");
// } else {
//     console.log(raqam + " raqami toq.");
// }


//  22-misol
// let raqam = prompt("Raqamni kiriting:");
// if (raqam > 0) {
//     console.log(raqam + " raqami musbat.");
// } else if (raqam < 0) {
//     console.log(raqam + " raqami manfiy.");
// } else {
//     console.log("Siz nol kiritdingiz.");
// }


//   23-misol
// let baho = prompt("Bahoni kiriting (0-100):");
// if (baho >= 50) {
//     console.log("Siz o‘tdingiz.");
// } else {
//     console.log("Siz o‘tolmadingiz.");
// }


// 24-misol (chatgpdan so'rlagan misol..)
// // Foydalanuvchidan shaklni tanlashni so'rash
// let shakl = prompt("Shaklni tanlang (aylana yoki kvadrat):");

// // Shakl bo'yicha yuzani hisoblash
// if (shakl === "kvadrat") {
//     // Agar kvadrat tanlansa, tomon uzunligini so'rash
//     let tomon = prompt("Kvadratning tomon uzunligini kiriting:");
//     tomon = Number(tomon); // Stringni raqamga aylantirish
//     let kvadratYuzasi = tomon * tomon; // Kvadrat yuzasi formulasi: S = a^2
//     console.log("Kvadratning yuzasi: " + kvadratYuzasi + " kvadrat birlik.");
// } else if (shakl === "aylana") {
//     // Agar aylana tanlansa, radiusni so'rash
//     let radius = prompt("Aylaning radiusini kiriting:");
//     radius = Number(radius); // Stringni raqamga aylantirish
//     let aylanaYuzasi = Math.PI * radius * radius; // Aylana yuzasi formulasi: S = πr^2
//     console.log("Aylaning yuzasi: " + aylanaYuzasi.toFixed(2) + " kvadrat birlik."); // Natijani 2 xonali aniqlik bilan chiqarish
// } else {
//     // Noto'g'ri shakl tanlangan holat
//     console.log("Noto'g'ri shakl kiritildi. Faqat 'aylana' yoki 'kvadrat' tanlanishi mumkin.");
// }

// 25-misol
// let yosh = prompt("Yoshingizni kiriting:");
// if (yosh >= 0 && yosh <= 12) {
//     console.log("Siz bola toifasidasiz.");
// } else if (yosh >= 13 && yosh <= 19) {
//     console.log("Siz o‘spirin toifasidasiz.");
// } else if (yosh >= 20 && yosh <= 60) {
//     console.log("Siz kattalar toifasidasiz.");
// } else if (yosh > 60) {
//     console.log("Siz qariyalar toifasidasiz.");
// } else {
//     console.log("Noto‘g‘ri yosh kiritildi.");
// }


//  26-misol
// let son1 = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");
// let son3 = prompt("Uchinchi sonni kiriting:");
// let engKatta;

// if (son1 >= son2 && son1 >= son3) {
//     engKatta = son1;
// } else if (son2 >= son1 && son2 >= son3) {
//     engKatta = son2;
// } else {
//     engKatta = son3;
// }
// console.log("Eng katta son: " + engKatta);


// 27-misol
// let a = prompt("a qiymatini kiriting:");
// let b = prompt("b qiymatini kiriting:");
// let c = prompt("c qiymatini kiriting:");
// let D = b * b - 4 * a * c;

// if (D > 0) {
//     let x1 = (-b + Math.sqrt(D)) / (2 * a);
//     let x2 = (-b - Math.sqrt(D)) / (2 * a);
//     console.log("Tenglama ikkita haqiqiy ildizga ega: x1 = " + x1 + ", x2 = " + x2);
// } else if (D === 0) {
//     let x = -b / (2 * a);
//     console.log("Tenglama bitta haqiqiy ildizga ega: x = " + x);
// } else {
//     console.log("Tenglamaning haqiqiy ildizlari yo'q.");
// }



//  28-misol
// let jins = prompt("Jinsingizni kiriting (erkak/ayol):");
// if (jins.toLowerCase() === "erkak") {
//     console.log("Assalomu alaykum, Janob!");
// } else if (jins.toLowerCase() === "ayol") {
//     console.log("Assalomu alaykum, Xonim!");
// } else {
//     console.log("Noto‘g‘ri jins kiritildi.");
// }


// 29-misol
// let harorat = prompt("Haroratni kiriting (Celsiusda):");
// if (harorat < 0) {
//     console.log("Qalin kiyim kiying, ob-havo sovuq.");
// } else if (harorat >= 0 && harorat <= 20) {
//     console.log("Salqin kiyim kiying, ob-havo o‘rtacha.");
// } else if (harorat > 20) {
//     console.log("Engil kiyim kiying, ob-havo issiq.");
// } else {
//     console.log("Noto‘g‘ri harorat kiritildi.");
// }


// 30-misol
// let son = prompt("Sonni kiriting:");
// if (son > 0) {
//     son = -son;  
// }

// console.log("Natija: " + son);


// 31-misol
// let haftaKunlari = Math.floor(prompt("hafta raqamini kiriting: "));
// switch (haftaKunlari) {
//     case 1:
//         console.log("dushanba");
//         break;
//     case 2:
//         console.log("seshanba");
//         break;
//     case 3:
//         console.log("chorshanba");
//         break;
//     case 4:
//         console.log("payshanba");
//         break;
//     case 5:
//         console.log("juma");
//         break;
//     case 6:
//         console.log("shanba");
//         break;
//     case 7:
//         console.log("yakshanba");
//         break;
//     default:
//         console.log("haftada 7 kun mavjud");
//         break;
// }


// 32-misol
// let son = prompt("1 dan 12 gacha bo'lgan sonni kiriting: ");
// switch (son) {
//     case "1":
//         console.log("Yanvar");
//         break;
//     case "2":
//         console.log("Fevral");
//         break;
//     case "3":
//         console.log("Mart");
//         break;
//     case "4":
//         console.log("Aprel");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("Iyun");
//         break;
//     case "7":
//         console.log("Iyul");
//         break;
//     case "8":
//         console.log("Avgust");
//         break;
//     case "9":
//         console.log("Sentabr");
//         break;
//     case "10":
//         console.log("Oktyabr");
//         break;
//     case "11":
//         console.log("Noyabr");
//         break;
//     case "12":
//         console.log("Dekabr");
//         break;
//     default:
//         console.log("12 dan katta son kiritdingiz: ");
//         break;
// }


//  33-misol
// let son1 = prompt("birinchi sonni kiriting: ");
// let son2 = prompt("ikkinchi sonni kiriting: ");
// let amal = prompt("qaysi amal orqali ishlansin: ");

// switch (amal) {
//     case "+":
//         console.log(parseInt(son1) + parseInt(son2));
//         break;
//     case "-":
//         console.log(parseInt(son1) - parseInt(son2));
//         break;
//     case "*":
//         console.log(parseInt(son1) * parseInt(son2));
//         break;
//     case "/":
//         console.log(parseInt(son1) / parseInt(son2));
//         break;
//     default:
//         console.log("Iltimos, ishora tanlang: ");
//         break;
// } 


//  34-misol
// let son = prompt("1 dan 12 gacha bo'lgan sonni kiriting: ");
// switch (son) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//     default:
//         console.log("12 dan katta son kiritdingiz: ");
//         break;
// }


//  35-misol
// let til = prompt("Tilni tanlang: 1 - Inglizcha, 2 - O‘zbekcha, 3 - Ruscha:");
// if (til === "1") {
//     console.log("Hello");
// } else if (til === "2") {
//     console.log("Salom");
// } else if (til === "3") {
//     console.log("Privet");
// } else {
//     console.log("Noto‘g‘ri tanlov.");
// }


// 36-misol
// let son = prompt("Raqamni kiriting:");
// let amal = prompt("Amalni tanlang: 1 - Kvadratga ko'tarish, 2 - Ildizini topish, 3 - 10 ga ko'paytirish, 4 - 2 ga bo'lish");
// if (amal === "1") {
//     console.log("Natija: " + (son * son));  
// } else if (amal === "2") {
//     console.log("Natija: " + Math.sqrt(son)); 
// } else if (amal === "3") {
//     console.log("Natija: " + (son * 10));  
// } else if (amal === "4") {
//     console.log("Natija: " + (son / 2));  
// } else {
//     console.log("Noto‘g‘ri tanlov.");
// }


//  37-misol
// let transport = prompt("Transport turini tanlang: 1 - Avtobus, 2 - Poyezd, 3 - Samolyot:");
// if (transport === "1") {
//     console.log("Avtobus yo'l haqi: 5000 so'm.");
// } else if (transport === "2") {
//     console.log("Poyezd yo'l haqi: 30000 so'm.");
// } else if (transport === "3") {
//     console.log("Samolyot yo'l haqi: 150000 so'm.");
// } else {
//     console.log("Noto'g'ri tanlov.");
// }


//   38-misol
// let son = prompt("1 dan 12 gacha bo'lgan sonni kiriting: ");
// switch (son) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//     default:
//         console.log("12 dan katta son kiritdingiz: ");
//         break;
// }


//   39-misol
// let valyuta = prompt("Valyutani tanlang: 1 - USD, 2 - EUR, 3 - GBP:");
// let miqdor = prompt("Miqdorni kiriting:");
// if (valyuta === "1") {
//     console.log(miqdor + " USD = " + (miqdor * 11300) + " so'm");  // USD -> so'm
// } else if (valyuta === "2") {
//     console.log(miqdor + " EUR = " + (miqdor * 12000) + " so'm");  // EUR -> so'm
// } else if (valyuta === "3") {
//     console.log(miqdor + " GBP = " + (miqdor * 14000) + " so'm");  // GBP -> so'm
// } else {
//     console.log("Noto'g'ri tanlov.");
// }


//    40-misol
// let menyu = prompt("Menyu raqamini tanlang:\n1 - Ma'lumotlar\n2 - O‘yin\n3 - Chiqarish");
// if (menyu === "1") {
//     console.log("Ma'lumotlar: Bu erda sizga kerakli ma'lumotlar ko'rsatiladi.");
// } else if (menyu === "2") {
//     console.log("O‘yin: O'yin boshlanadi, tayyor bo'ling!");
// } else if (menyu === "3") {
//     console.log("Chiqarish: Dasturdan chiqyapsiz. Xayr!");
// } else {
//     console.log("Noto'g'ri tanlov. Iltimos, 1, 2 yoki 3 ni tanlang.");
// }


//   41-misol
// let ishStaji = prompt("Yillik ish stajingizni kiriting (yil):");
// let maosh = prompt("Yillik maoshingizni kiriting (so'm):");
// let bonus = 0;
// if (ishStaji > 5) {
//     bonus = maosh * 0.1; 
// } else {
//     bonus = 0; 
// }
// let umumiyMiqdor = maosh + bonus;
// console.log("Yillik maosh: " + maosh + " so'm");
// console.log("Bonus: " + bonus + " so'm");
// console.log("Umumiy miqdor: " + umumiyMiqdor + " so'm");


//   42-misol
// let soat = prompt("Soatni kiriting (0-23 oralig'ida):");
// if (soat >= 0 && soat <= 11) {
//     console.log("Xayrli tong!");
// } else if (soat >= 12 && soat <= 17) {
//     console.log("Xayrli kun!");
// } else if (soat >= 18 && soat <= 23) {
//     console.log("Xayrli kech!");
// } else {
//     console.log("Noto'g'ri soat kiritdingiz. Iltimos, 0 dan 23 gacha raqam kiriting.");
// }


//   43-misol
// let narx = prompt("Tovar narxini kiriting (so'm):");
// let yangiNarx;
// if (narx > 100) {
//     let chegirma = narx * 0.1; 
//     yangiNarx = narx - chegirma; 
//     console.log("Tovar narxi 100 dan katta. Chegirma: " + chegirma + " so'm.");
// } else {
//     yangiNarx = narx;
//     console.log("Tovar narxi 100 dan kam yoki teng. Chegirma yo'q.");
// }
// console.log("Yangi narx: " + yangiNarx + " so'm.");


//    44-misol
// let oy = prompt("Oy raqamini kiriting (1-12):");
// let kunlarSoni;

// if (oy === 1) {
//     kunlarSoni = 31; // Yanvar
// } else if (oy === 2) {
//     let yil = prompt("Yilni kiriting (masalan, 2024):");
//     yil = Number(yil);
//     // Kabisa yilini tekshirish
//     if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
//         kunlarSoni = 29; // Kabisa yili
//     } else {
//         kunlarSoni = 28; // Oddiy yil
//     }
// } else if (oy === 3) {
//     kunlarSoni = 31; // Mart
// } else if (oy === 4) {
//     kunlarSoni = 30; // Aprel
// } else if (oy === 5) {
//     kunlarSoni = 31; // May
// } else if (oy === 6) {
//     kunlarSoni = 30; // Iyun
// } else if (oy === 7) {
//     kunlarSoni = 31; // Iyul
// } else if (oy === 8) {
//     kunlarSoni = 31; // Avgust
// } else if (oy === 9) {
//     kunlarSoni = 30; // Sentabr
// } else if (oy === 10) {
//     kunlarSoni = 31; // Oktabr
// } else if (oy === 11) {
//     kunlarSoni = 30; // Noyabr
// } else if (oy === 12) {
//     kunlarSoni = 31; // Dekabr
// } else {
//     console.log("Noto'g'ri oy raqami. Iltimos, 1 dan 12 gacha raqam kiriting.");
// }
// if (kunlarSoni) {
//     console.log(oy + "-oyda " + kunlarSoni + " kun bor.");
// }


//     45-misol
// let valyuta = prompt("Valyutani tanlang:\n1 - USD\n2 - EUR\n3 - GBP");
// let summa = prompt("Konvertatsiya qilish uchun summani kiriting:");
// // Konvertatsiya qilish uchun valyuta kurslari
// const kurslar = {
//     USD: 11300, // 1 USD = 11300 so'm
//     EUR: 12200, // 1 EUR = 12200 so'm
//     GBP: 14000  // 1 GBP = 14000 so'm
// };
// let natija;

// if (valyuta === "1") {
//     natija = summa * kurslar.USD; // USD uchun hisoblash
//     console.log(summa + " USD = " + natija + " so'm");
// } else if (valyuta === "2") {
//     natija = summa * kurslar.EUR; // EUR uchun hisoblash
//     console.log(summa + " EUR = " + natija + " so'm");
// } else if (valyuta === "3") {
//     natija = summa * kurslar.GBP; // GBP uchun hisoblash
//     console.log(summa + " GBP = " + natija + " so'm");
// } else {
//     console.log("Noto'g'ri valyuta tanlandi. Iltimos, 1, 2 yoki 3 ni tanlang.");
// }


// 46-misol
// let amal = prompt("Amalni tanlang:\n1 - Qo'shish\n2 - Ayirish\n3 - Ko'paytirish\n4 - Bo'lish");
// let raqam1 = prompt("Birinchi raqamni kiriting:");
// let raqam2 = prompt("Ikkinchi raqamni kiriting:");
// let natija;

// if (amal === "1") {
//     natija = raqam1 + raqam2; 
//     console.log(raqam1 + " + " + raqam2 + " = " + natija);
// } else if (amal === "2") {
//     natija = raqam1 - raqam2; 
//     console.log(raqam1 + " - " + raqam2 + " = " + natija);
// } else if (amal === "3") {
//     natija = raqam1 * raqam2; 
//     console.log(raqam1 + " * " + raqam2 + " = " + natija);
// } else if (amal === "4") {
//     if (raqam2 !== 0) {
//         natija = raqam1 / raqam2; 
//         console.log(raqam1 + " / " + raqam2 + " = " + natija);
//     } else {
//         console.log("Noto'g'ri amal: nolga bo'lib bo'lmaydi.");
//     }
// } else {
//     console.log("Noto'g'ri amal tanlandi. Iltimos, 1 dan 4 gacha raqam tanlang.");
// }


//  47-misol
// let fasl = prompt("Faslni tanlang:\n1 - Qish\n2 - Bahor\n3 - Yoz\n4 - Kuz");
// let tavsiyalar;

// if (fasl === "1") {
//     tavsiyalar = "Qishda qalin kiyimlar kiying, shuningdek, teplovka va do‘mboq kiyish tavsiya etiladi. Qishki sport turlari, masalan, chang‘i yoki muzda suzish bilan shug‘ullanishingiz mumkin.";
// } else if (fasl === "2") {
//     tavsiyalar = "Bahorda engil kiyimlar kiying, ammo shamolga qarshi kiyimni ham oling. Bahor faslida tabiatni tomosha qilish, piyoda yurish va bahorgi festivalga borish yaxshi bo'ladi.";
// } else if (fasl === "3") {
//     tavsiyalar = "Yozda engil va ochiq rangli kiyimlar kiying. Yozda suzish, plyajga borish, sayr qilish va ochiq havoda dam olish tavsiya etiladi.";
// } else if (fasl === "4") {
//     tavsiyalar = "Kuzda qalin ko‘ylaklar va jo‘nlar kiying, chunki havo soviy boshlaydi. Kuzda tabiatni tomosha qilish, hosil yig‘ish va piknik o‘tkazish yaxshi.";
// } else {
//     tavsiyalar = "Noto'g'ri fasl tanlandi. Iltimos, 1 dan 4 gacha raqam kiriting.";
// }
// console.log(tavsiyalar);


//  48-misol
// let oy = prompt("Oy raqamini kiriting (1-12):");
// let fasl;

// switch (oy) {
//     case "12": // Dekabr
//     case "1":  // Yanvar
//     case "2":  // Fevral
//         fasl = "Qish";
//         break;
//     case "3":  // Mart
//     case "4":  // Aprel
//     case "5":  // May
//         fasl = "Bahor";
//         break;
//     case "6":  // Iyun
//     case "7":  // Iyul
//     case "8":  // Avgust
//         fasl = "Yoz";
//         break;
//     case "9":  // Sentabr
//     case "10": // Oktyabr
//     case "11": // Noyabr
//         fasl = "Kuz";
//         break;
//     default:
//         fasl = "Noto'g'ri oy raqami. Iltimos, 1 dan 12 gacha raqam kiriting.";
// }
// console.log("Fasl: " + fasl);


//   49-misol (chatgpdan olingan..)
// Valyuta konvertatsiyasi uchun kurslar
// const kurslar = {
//     "USD": {
//         "EUR": 0.85,
//         "GBP": 0.75
//     },
//     "EUR": {
//         "USD": 1.18,
//         "GBP": 0.88
//     },
//     "GBP": {
//         "USD": 1.33,
//         "EUR": 1.14
//     }
// };

// // Foydalanuvchidan manba valyuta va maqsad valyutani tanlashni so'rash
// let manbaValyuta = prompt("Manba valyutani tanlang (USD, EUR, GBP):");
// let maqsadValyuta = prompt("Maqsad valyutani tanlang (USD, EUR, GBP):");
// let miqdor = prompt("Miqdorni kiriting:");

// // Miqdorni raqamga aylantirish
// miqdor = Number(miqdor);

// // Natijani hisoblash
// let natija;

// if (manbaValyuta in kurslar && maqsadValyuta in kurslar[manbaValyuta]) {
//     natija = miqdor * kurslar[manbaValyuta][maqsadValyuta]; // Konvertatsiya
//     console.log(`${miqdor} ${manbaValyuta} = ${natija.toFixed(2)} ${maqsadValyuta}`);
// } else {
//     console.log("Noto'g'ri valyuta tanlandi. Iltimos, USD, EUR yoki GBP tanlang.");
// }


// 50-misol
// let mahsulot = prompt("Mahsulot turini tanlang:\n1 - Telefon\n2 - Kompyuter\n3 - Televizor");
// let narx;

// switch (mahsulot) {
//     case "1": // Telefon
//         narx = 500; // $500
//         console.log("Telefon narxi: $" + narx);
//         break;
//     case "2": // Kompyuter
//         narx = 1000; // $1000
//         console.log("Kompyuter narxi: $" + narx);
//         break;
//     case "3": // Televizor
//         narx = 800; // $800
//         console.log("Televizor narxi: $" + narx);
//         break;
//     default:
//         console.log("Noto'g'ri mahsulot tanlandi. Iltimos, 1, 2 yoki 3 ni tanlang.");
// }
