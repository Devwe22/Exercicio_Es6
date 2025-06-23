const alunos = [
    {nome: 'Wendel', nota: 9.5},
    { nome: 'David', nota: 7.2 },
    { nome: 'Samuel', nota: 5.9 },
    { nome: 'Junior', nota: 6.8 },
    { nome: 'Helena', nota: 5.4 }
]

const alunosAprovados = alunos.filter(aprovados => aprovados.nota >= 6)


console.log(alunosAprovados)