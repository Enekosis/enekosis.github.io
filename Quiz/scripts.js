const quiz = document.getElementById('enaniquiz');
const resultDiv = document.getElementById('respuesta');

quiz.addEventListener("submit", e => {
    e.preventDefault();

    const tans = [];
    for (let i = 1; i <= 7; i++) {
        tans.push(quiz["Q" + i].value);
    }

    let count = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };

    tans.forEach(answer => {
        count[answer]++;
    });

    const maxCount = Math.max(...Object.values(count));
    const resultMessages = {
        a: "Usted no discrimina a los enanos. De hecho, usted no discrimina a ningun ser vivo de este planeta. Seguramente esta asociado a Greenpeace y si se encuentra una billetera por la calle la devuelve sin sacar plata.",
        b: "Usted discrimina moderadamente a los enanos, no los mataría, pero los haría sus esclavos. También es probable que se toque mirando las rayitas del codificado porque le calienta no saber si está viendo a una mina o un tipo.",
        c: "Usted odia a los enanos. Podría decirse que usted es algo así como 'el Hitler de los enanos'. Seguramente usted usa bigote, y en el próximo mundial va a hinchar por Alemania.",
        d: "Usted es un enano. Tenga cuidado con los que responden en su mayoría respuestas 'B' o 'C'."
    };

    const resultMessage = resultMessages[Object.keys(count).find(key => count[key] === maxCount)];
    resultDiv.innerHTML = resultMessage;
});
