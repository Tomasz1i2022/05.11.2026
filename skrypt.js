const submitBtn = document.getElementById("submitBtn");
const copiesNum = document.getElementById("copies");
const result = document.getElementById("result");
const imageInp = document.getElementById("imageInp");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let image = imageInp.files[0];
    let imageURL = URL.createObjectURL(image);
    let copies = parseInt(copiesNum.value);
    let paper = document.querySelector("input[name='papier']:checked").value;
    let price;

    if (paper == 1) {
        price = copies * 1.5;
    } else {
        price = copies * 2;
    }
    result.innerHTML +=
    '<div class="zamowienie">' +
        '<img src="' + imageURL + '">' +
        '<div>' +
            '<p>Liczba kopii: ' + copies + '</p>' +
            '<p>Cena: ' + price + ' zł</p>' +
        '</div>' +
    '</div>';
});