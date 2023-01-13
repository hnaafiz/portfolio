let i = 0
const button = document.querySelector('.button');
const output = document.querySelector('.output');
const reset = document.querySelector('.reset');
const decrese = document.querySelector('.decrese');

    button.addEventListener('click', function() {
       i = ++i;
        console.log(i);
        output.innerHTML = i;


    });

    reset.addEventListener('click', function() {
        i = 1000
        output.innerHTML = i;
        console.log(i);

    });

    decrese.addEventListener('click', function() {
        --i
        output.innerHTML = i;
        console.log(i);

    });

