
function hitungKeliling() {
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    console.log('Sisi a:', sisiA);
    console.log('Sisi b:', sisiB);
    console.log('Sisi c:', sisiC);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        document.getElementById('hasilKeliling').innerText = 'Mohon masukkan nilai yang valid.';
        console.log('Input tidak valid untuk perhitungan keliling.');
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
    const teksHasil = `Keliling segitiga dengan sisi a = ${sisiA}, b = ${sisiB}, dan c = ${sisiC} adalah ${keliling}.`;

    document.getElementById('hasilKeliling').innerText = teksHasil;
    console.log('Keliling segitiga:', keliling);
}

function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    console.log('Alas:', alas);
    console.log('Tinggi:', tinggi);

    if (isNaN(alas) || isNaN(tinggi)) {
        document.getElementById('hasilLuas').innerText = 'Mohon masukkan nilai yang valid.';
        console.log('Input tidak valid untuk perhitungan luas.');
        return;
    }

    const luas = 0.5 * alas * tinggi;
    const teksHasil = `Luas segitiga dengan alas = ${alas} dan tinggi = ${tinggi} adalah ${luas}.`;

    document.getElementById('hasilLuas').innerText = teksHasil;
    console.log('Luas segitiga:', luas);
}

