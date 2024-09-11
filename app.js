function showMore() {
    var institute = document.querySelector('.institute');
    var education = document.querySelector('.inner-education');
    var year = document.querySelector('.year');
    var button = document.querySelector('.down');
    if (institute.style.display === 'none') {
        institute.style.display = 'block';
        education.style.display = 'block';
        year.style.display = 'block';
        button.innerHTML = 'Ʌ';
    }
    else {
        institute.style.display = 'none';
        education.style.display = 'none';
        year.style.display = 'none';
        button.innerHTML = 'V';
    }
}
function showMoreExp() {
    var exp = document.querySelector('.experience');
    var yearExp = document.querySelector('.year-experince');
    var buttons = document.querySelector('.down');
    if (exp.style.display === 'none') {
        exp.style.display = 'block';
        yearExp.style.display = 'block';
        buttons.innerHTML = 'Ʌ';
    }
    else {
        exp.style.display = 'none';
        yearExp.style.display = 'none';
        buttons.innerHTML = 'V';
    }
}
