document.getElementById('yaz').addEventListener('focus', function () {
    var e = this.value.length;
    if (e == "") {
        var x = this.value = "+994-";
    }
    document.getElementById('yaz').addEventListener('keypress', function (a) {
        e++;     
        if (e <= 9) {
            if (e == 3||e==6||e==8||e==10) {
                var y = this.value += "-";
            }
            if (a.which < 58 && a.which > 47) {
            return true;
            }
            else{
                a.preventDefault();
                e--;
        return false;
            }
        }
        a.preventDefault();
        return false;
    });
});


















