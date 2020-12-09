function h1(){
    let counter = 0;
    const $elem = document.querySelector('.squere1text2');
    const text = $elem.textContent; // "Некоторый текст"
    $elem.innerHTML = '';
    counter += 1;

    if (counter === 1) {
        const $elem1 = document.querySelector('.d1');
        const text1 = $elem1.textContent;
        $elem1.innerHTML = text;
        counter += 1;

        if (counter === 2) {
            const $elem2 = document.querySelector('.text2');
            const text2 = $elem2.textContent;
            $elem2.innerHTML = text1;
            counter += 1;


            if (counter === 3) {
                const $elem3 = document.querySelector('.text3');
                const text3 = $elem3.textContent;
                $elem3.innerHTML = text2;
                counter += 1;

                if (counter === 4) {
                    const $elem4 = document.querySelector('.text4');
                    const text4 = $elem3.textContent;
                    $elem4.innerHTML = text3;
                    counter += 1;



                }
            }
        }
    }
}
window.setInterval(function(){
    for(var i = 1; i < 2; i++){
        h1(i);
    }
}, 5000);