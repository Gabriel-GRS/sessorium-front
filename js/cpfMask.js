const inputCpf = document.getElementById('cpf')

inputCpf.addEventListener('keypress', () => {
    let inputCpfLength = inputCpf.value.length

    if (inputCpfLength == 3 || inputCpfLength == 7) {
        inputCpf.value += '.'
    }else if (inputCpfLength == 11) {
        inputCpf.value += '-'
    }
})
