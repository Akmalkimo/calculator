const h2 = document.getElementById("input");
const h3 = document.getElementById("output");
const nums = document.getElementById("nums");

var count = 0;

nums.addEventListener('click', function(e) {
    if (e.target.className === "button clear") {
        h2.innerHTML = "";
        h3.innerHTML = "";
        console.clear();
        count = 0;
    }

    else if (e.target.className === "button delete") {
        h2.innerHTML = h2.innerHTML.slice(0, -1);
        count = count.slice(0, -1);
        console.log(count);
    }

    else if (e.target.className === "button percent") {
        if (h2.innerHTML === "") {
            alert('You need to enter numbers first!');
        } else if (count.charAt((count.length) - 1) === '%') {
            alert("you can't write that!");
        } else {
            h2.innerHTML = h2.innerHTML.concat("%");
            count += '/100';
            console.log(count);
            } 

    }

    else if (e.target.className === "button divide") {
        if (h2.innerHTML === "") {
            alert('You need to enter numbers first!');
        } else if (count.charAt((count.length) - 1) === '/') {
            alert("you can't write that!");
        } else {
            h2.innerHTML = h2.innerHTML.concat("/");
            count += '/';
            console.log(count);
            } 
    }

    else if (e.target.className === "button seven") {
        h2.innerHTML = h2.innerHTML.concat("7");
        count += String(7);
        console.log(count);
    }

    else if (e.target.className === "button eight") {
        h2.innerHTML = h2.innerHTML.concat("8");
        count += String(8);
        console.log(count);
    }

    else if (e.target.className === "button nine") {
        h2.innerHTML = h2.innerHTML.concat("9");
        count += String(9);
        console.log(count);

    }

    else if (e.target.className === "button multiply") {
        if (h2.innerHTML === "") {
            alert('You need to enter numbers first!');
        } else if (count.charAt((count.length) - 1) === '*') {
            alert("you can't write that!");
        } else {
            h2.innerHTML = h2.innerHTML.concat("x");
            count += '*';
            console.log(count);
            } 
    }

    else if (e.target.className === "button four") {
        h2.innerHTML = h2.innerHTML.concat("4");
        count += String(4);
        console.log(count);
    }

    else if (e.target.className === "button five") {
        h2.innerHTML = h2.innerHTML.concat("5");
        count += String(5);
        console.log(count);
    }

    else if (e.target.className === "button six") {
        h2.innerHTML = h2.innerHTML.concat("6");
        count += String(6);
        console.log(count);
    }

    else if (e.target.className === "button minus") {
        if (h2.innerHTML === "") {
            alert('You need to enter numbers first!');
        } else if (count.charAt((count.length) - 1) === '-') {
            alert("you can't write that!");
        } else {
            h2.innerHTML = h2.innerHTML.concat("-");
            count += '-';
            console.log(count);
            } 
    }

    else if (e.target.className === "button one") {
        h2.innerHTML = h2.innerHTML.concat("1");
        count += String(1);
        console.log(count);
    }

    else if (e.target.className === "button two") {
        h2.innerHTML = h2.innerHTML.concat("2");
        count += String(2);
        console.log(count);
    }

    else if (e.target.className === "button three") {
        h2.innerHTML = h2.innerHTML.concat("3");
        count += String(3);
        console.log(count);
    }

    else if (e.target.className === "button plus") {
        if (h2.innerHTML === "") {
            alert('You need to enter numbers first!');
        } else if (count.charAt((count.length) - 1) === '+') {
            alert("you can't write that!");
        } else {
            h2.innerHTML = h2.innerHTML.concat("+");
            count += '+';
            console.log(count);
            } 
    }

    else if (e.target.className === "button zero") {
        h2.innerHTML = h2.innerHTML.concat("0");
        count += String(0);
        console.log(count);
    }

    else if (e.target.className === "button blank") {
        h2.innerHTML = h2.innerHTML.concat("0");
        count += String(0);
        console.log(count);
    }

    else if (e.target.className === "button dot") {
        h2.innerHTML = h2.innerHTML.concat(".");
        count += String('.');
        console.log(count);
    }

    else if (e.target.className === "button equal") {
        count = count.slice(1)
        console.log(eval(count));
        h3.innerHTML = eval(count);
    }
})