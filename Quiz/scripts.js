const quiz = document.getElementById('enaniquiz');
const resultDiv = document.getElementById('respuesta')

quiz.addEventListener("submit", e =>{
    e.preventDefault();

    const ans1 = quiz.Q1.value
    const ans2 = quiz.Q2.value
    const ans3 = quiz.Q3.value
    const ans4 = quiz.Q4.value
    const ans5 = quiz.Q5.value
    const ans6 = quiz.Q6.value
    const ans7 = quiz.Q7.value

    let ca = 0
    let cb = 0
    let cc = 0
    let cd = 0
    let maxValor = ca

    switch (ans1) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
        break
    }

    switch (ans2) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    switch (ans3) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    switch (ans4) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    switch (ans5) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    switch (ans6) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    switch (ans7) {
        case 'a':
            ca += 1;
            break
        case 'b':
            cb += 1;
            break
        case 'c':
            cc += 1;
            break
        case 'd':
            cd += 1;
            break
    }

    if ( ca >= cb && ca >= cc && ca >= cd ) {
        resultDiv.innerHTML = 'Usted no discrimina a los enanos. De hecho, usted no discrimina a ningun ser vivo de este planeta. Seguramente esta asociado a Greenpeace y si se encuentra una billetera por la calle la devuelve sin sacar plata.'; 
    } else if ( cb >= ca && cb >= cc && cb >= cd ) {
        resultDiv.innerHTML = 'Usted discrimina moderadamente a los enanos, no los mataria, pero los haria sus esclavos. Tambien es probable que se toque mirando las rayitas del codificado porque le calienta no saber si esta viendo a una mina o un tipo';
    } else if ( cc >=ca && cc >= cb && cc >= cd ) {
        resultDiv.innerHTML = 'Usted odia a los enanos. Podria decirse que usted es algo asi como "el Hitler de los enanos". Seguramente usted usa bigote, y en el proximo mundial va a hinchar por Alemania.';
    } else if ( cd >= ca && cd >= cb && cd >= cc ) {
        resultDiv.innerHTML = 'Usted es un enano. Tenga cuidado con los que responden en su mayoria respuestas "B" o "C".';
    }

});

