/* 
6 bir mükemmel sayıdır çünkü kendisi hariç tüm bölenlerinin toplamı kendisine eşittir.
*/

function isPerfectNumber(number) {
    let sum = 0; //hem number'a hem de sum'a ihtiyacımız var
    for (let i = 1; i < number; i++) { //i'yi 1'den başlatıyor, i'nin sayıdan küçük olması gerekliliğini kontrol ediyor ve if clause'a iniyor.
        //i++ işlemi, i'yi her seferinde bir arttırır
        // şimdi number'ın i ile bölümünden kalanın sıfıra eşit olup olmadığını kontrol ediyoruz.
        if (number % i === 0) { //eğer number'ın i ile bölümündenkalan (%) 0'a eşitse i'yi sum'a ekliyoruz. Sum'ı sıfırdan başlatmamız burada önem kazanıyor. 
            sum += i; // for işlemi i number'dan küçük olduğu sürece devam edecek ve bu sayılar sum'a eklenecek:)
        }
    } //we're done:) 

    //şimdi number'ı ve sum'ı karşılaştırıyoruz. 
    if (number == sum) {
        console.log("Your number is a perfect number");
    } else {
        console.log("Your number is not a perfect number.");
    }
}

isPerfectNumber(6); 
isPerfectNumber(4444); 
isPerfectNumber(28); 
isPerfectNumber(496); 
isPerfectNumber(8128); 
