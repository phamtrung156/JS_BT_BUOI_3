// 1, ngày tiếp theo
function ngayTiepTheo(event) {
    event.preventDefault();
    // đầu vào
    var date = document.getElementById("ngay").value;
    var month = document.getElementById("thang").value;
    var year = document.getElementById("nam").value;
    date = parseInt(date);
    month = parseInt(month);
    year = parseInt(year);
    var nextDay;
    var nextMonth;
    var nextYear = year;
    var lastDay;
    var lastMonth;
    var lastYear = year;
    // xử lý
    // nextdate
    if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && date == 31) {
        nextDay = date - 30;
        nextMonth = month + 1;
    } else if (month == 12 && date == 31) {
        nextDay = date - 30;
        nextMonth = month - 11;
        nextYear = year + 1;

    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && date == 30) {
        nextDay = date - 29;
        nextMonth = month + 1;
    } else if (month == 2 && date == 29) {
        nextDay = date - 28;
        nextMonth = month + 1;
    } else if (month == 2 && date == 28) {
        nextDay = date - 27;
        nextMonth = month + 1;
    } else {

        nextDay = date + 1;
        nextMonth = month;
    }
    // last date
    if (month == 1 && date == 1) {
        lastDay = date + 30;
        lastMonth = month + 11;
        lastYear = year - 1
    } else if (month == 3 && date == 1 && ((year % 4) == 0)) {
        lastDay = date + 28;
        lastMonth = month - 1;
    } else if (month == 3 && date == 1 && ((year % 4) !== 0)) {
        lastDay = date + 27;
        lastMonth = month - 1;
    } else if ((month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && date == 1) {
        lastDay = date + 29;
        lastMonth = month - 1;

    } else if ((month == 2 || month == 4 || month == 6 || month == 9 || month == 11) && date == 1) {
        lastDay = date + 29;
        lastMonth = month - 1;

    } else {

        lastDay = date - 1;
        lastMonth = month;
        lastYear = year;
    }
    // đầu ra
    console.log(nextDay); console.log(nextMonth); console.log(year);
    var result = document.createElement("div");
    result.innerHTML = "Ngày tiếp theo : " + nextDay + " / " + nextMonth + " / " + nextYear
    document.getElementById("ketQua1NangCao").innerHTML = "";
    document.getElementById("ketQua1NangCao").appendChild(result)

    var result1 = document.createElement("div");
    result1.innerHTML = "Ngày trước đó : " + lastDay + " / " + lastMonth + " / " + lastYear
    document.getElementById("ketQua1NangCao2").innerHTML = "";
    document.getElementById("ketQua1NangCao2").appendChild(result1)
}
// ===============================================================
// 2: ngày trong tháng
function ngayTrongThang(event) {
    event.preventDefault()
    // đầu vào
    var month_1 = Dom("txtThang").value;
    var year_1 = document.getElementById("txtNam").value;
    var dateOfMonth = 0;

    // xử lý
    if (month_1 == 1 || month_1 == 3 || month_1 == 5 || month_1 == 7
        || month_1 == 8 || month_1 == 10 || month_1 == 12) {
        dateOfMonth = 31;
    } else if (month_1 == 4 || month_1 == 6 || month_1 == 9 || month_1 == 11) {
        dateOfMonth = 30;
    } else if (month_1 == 2 && ((year_1 % 4) == 0)) {
        dateOfMonth = 29;
    } else {
        dateOfMonth = 28;
    }
    // đầu ra
    console.log(dateOfMonth);
    Dom("ketQua2NangCao").innerHTML = "Trong tháng " + month_1 + " năm " + year_1 + " có " + dateOfMonth + " ngày."


}

// ==========================================================

// 3 : Đọc số
var docSo = function (event) {
    event.preventDefault()
//  đầu vào
    var n = Dom("txtSo").value;
    n = parseInt(n);
    var tram = Math.floor(n / 100)
    var chuc = Math.floor((n % 100) / 10)
    var donVi = n % 10
    var readChuc;
    var readDonVi;
    console.log(tram); console.log(chuc); console.log(donVi);
// xử lý
    if (chuc == 0) {
        readChuc = " lẻ "
        chuc = ""
    } else if (chuc == 1) {
        readChuc = " mười "
        chuc = ""

    } else {
        readChuc = " mươi "
    }

    if ((chuc == 1 || chuc == 0) && donVi == 1) {
        readDonVi = ""
        donVi = n % 10
    } else if (chuc != 0 && donVi == 1) {
        readDonVi = " mốt "
        donVi = "";
    } else if (donVi == 0) {
        readDonVi = ""
        donVi = ""
    } else {
        readDonVi = ""
        donVi = n % 10
    }
// đầu ra
    Dom("ketQua3NangCao").innerHTML = tram + " trăm " + chuc + readChuc + readDonVi + donVi

}

// ==========================================================
// 4:  khoảng cách
function Dom(value) {
    return document.getElementById(value);
}
function distance(event) {
    event.preventDefault();
    // đầu vào
    var nameA = Dom("A").value;
    var xA = Dom("xA").value;
    xA = parseInt(xA);
    var yA = Dom("yA").value;
    yA = parseInt(yA);

    var nameB = Dom("B").value;
    var xB = Dom("xB").value;
    xB = parseInt(xB);
    var yB = Dom("yB").value;
    yB = parseInt(yB);

    var nameC = Dom("C").value;
    var xC = Dom("xC").value;
    xC = parseInt(xC);
    var yC = Dom("yC").value;
    yC = parseInt(yC);

    var xT = Dom("xT").value;
    xT = parseInt(xT);
    var yT = Dom("yT").value;
    yT = parseInt(yT);
    var n = 2;
    var kcAT = Math.sqrt(((xT - xA) ** n) + ((yT - yA) ** n))
    var kcBT = Math.sqrt(((xT - xB) ** n) + ((yT - yB) ** n))
    var kcCT = Math.sqrt(((xT - xC) ** n) + ((yT - yC) ** n))
    var nameXa = 0;
    var kcXa = 0;
    // xử lý
    if (kcAT > kcBT && kcAT > kcCT) {
        kcXa = kcAT;
        nameXa = nameA;
    } else if (kcBT > kcAT && kcBT > kcCT) {
        kcXa = kcBT;
        nameXa = nameB;
    } else if (kcCT > kcAT && kcCT > kcAT) {
        kcXa = kcCT;
        nameXa = nameC;
    } else {
        Dom("ketQua4NangCao").innerHTML = "không có ai xa nhất"
    }
    // đầu ra
    console.log(nameXa)
    console.log(kcXa)
    Dom("ketQua4NangCao").innerHTML = "Học sinh " + nameXa + " nhà ở xa trường nhất."



}