//menghitung luas persegi
let sisi = prompt(`masukan sisi persegi`),
    hasil = sisi*sisi;

    alert(`luas persegi adalah ${hasil}`);
//menghitung luas segitiga
let tinggi = prompt(`masukan tinggi`),
    alas = prompt (`masukan alas`)
    hasil = 0.5*tinggi*alas;

    alert(`luas segitiga adalah ${hasil}`);
//menghitung persegi panjang
let panjang = prompt (`masukan panjang`),
    lebar = prompt (`masukan lebar`)
    hasil = panjang*lebar;

    alert(`luas persegi panjang adalah ${hasil}`);
//menghitung luas lingkaran
let jari2 = prompt (`masukan jarijari`)
    hasil = 3.14*jari2

    alert(`luas lingkaran adalah ${hasil}`)
//menghitung luas trapesium
let sisia = prompt (`masukan sisi a`)
    sisib = prompt (`masukan sisi b`)
    tinggi = prompt (`masukan tinggi`)
    hasil = 0.5*(sisia+sisib)*tinggi

    alert(`luas trapesium adalah ${hasil}`)