function swapPrice(value) {
    var yearly = document.getElementById("yearly");
    var monthly = document.getElementById("monthly");
    if (value == 'Yearly') {
      yearly.className = 'db';
    } else {
      yearly.className = 'dn';
    }
    if (value == 'Monthly') {
      monthly.className = 'db';
    } else {
      monthly.className = 'dn';
    }
}

function reviewSwap(val) {
    var s1 = document.getElementById("speech1");
    var s2 = document.getElementById("speech2");
    var s3 = document.getElementById("speech3");
    if (val == 'tap1') {
        s1.className = 'db';
        s2.className = 'dn';
        s3.className = 'dn';
    } else {
        s1.className = 'dn';
    }
    if (val == 'tap2') {
        s2.className = 'db';
        s1.className = 'dn';
        s3.className = 'dn';
    } else {
        s2.className = 'dn';
    }
    if (val == 'tap3') {
        s3.className = 'db';
        s1.className = 'dn';
        s2.className = 'dn';
    } else {
        s3.className = 'dn';
    }
}