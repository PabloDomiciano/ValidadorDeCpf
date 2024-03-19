function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    if (
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
    ) {
        return false;
    }

    let add = 0;
    let rev = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i), 10) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9), 10)) {
        return false;
    }

    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i), 10) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10), 10)) {
        return false;
    }
    return true;
}

document.getElementById('validarCPF').addEventListener('click', function () {
    const cpfInput = document.getElementById('cpfInput').value;
    const resultado = validarCPF(cpfInput);
    if (resultado) {
        document.getElementById('resultado').innerText = 'CPF válido';
    } else {
        document.getElementById('resultado').innerText = 'CPF inválido';
    }
});

function validarCPFWithEnter(event) {
    if (event.key === "Enter") {
        validarCPFOnClick();
    }
}

function validarCPFOnClick() {
    const cpfInput = document.getElementById('cpfInput').value;
    const resultado = validarCPF(cpfInput);
    if (resultado) {
        document.getElementById('resultado').innerText = 'CPF válido';
    } else {
        document.getElementById('resultado').innerText = 'CPF inválido';
    }
}

document.getElementById('validarCPF').addEventListener('click', validarCPFOnClick);
document.getElementById('cpfInput').addEventListener('keypress', validarCPFWithEnter);
document.getElementById('cpfInput').addEventListener('input', function () {
    this.value = formatarCPF(this.value);
});
