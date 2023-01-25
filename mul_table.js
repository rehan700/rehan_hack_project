function tablefunc() {
    var x = Number(document.forms.myform.mytable.value);
    let html = "<div>";
    for (let i = 0; i < 10; i++) {
        html += x + " x " + (i + 1) + " = " + x * (i + 1) + "<br>";
    }
    html += "</div><br>";
    document.getElementById("show").innerHTML = html;
}
function num_avg() {
    let num = document.forms.myform.count.value;
    //console.log(num);
    const myarr = num.split(",");
    var sum = 0;
    for (let i = 0; i < myarr.length; i++) {
        sum += Number(myarr[i]);
    }
    document.getElementById("avg").innerHTML = "Avg of " + myarr.length + " numbers = " + sum / myarr.length;
    //document.getElementById("avg").innerHTML = myarr[1];
}