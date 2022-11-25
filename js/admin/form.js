let botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let aluno = obtemAlunoDoFormulario(form);
 
    let erros = validaPaciente(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaAlunoNaTabela(aluno);

    form.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function obtemAlunoDoFormulario(form) {
    
    let aluno = {
        nome: form.nome.value,
        matricula: form.matricula.value,
        cpf: form.cpf.value,
        telefone: form.telefone.value,
        email: form.email.value
    }

    return aluno;
}

function montaTr(aluno) {
    let alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.matricula, "info-matricula"));
    alunoTr.appendChild(montaTd(aluno.cpf, "info-cpf"));
    alunoTr.appendChild(montaTd(aluno.telefone, "info-telefone"));
    alunoTr.appendChild(montaTd(aluno.email, "info-email"));

    return alunoTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(aluno) {

    let erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.matricula.length == 0) {
        erros.push("A matrícula não pode ser em branco");
    }

    if (aluno.cpf.length == 0) {
        erros.push("O cpf não pode ser em branco");
    }

    if (aluno.telefone.length == 0) {
        erros.push("O telefone não pode ser em branco");
    }
    if (aluno.email.length == 0) {
        erros.push("O e-mail não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaAlunoNaTabela(aluno) {
    let alunoTr = montaTr(aluno);
    let tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
}