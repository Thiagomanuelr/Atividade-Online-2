
let DataValida = true
let Idade = 23
let NumeroDeParticipantes = 65

if(DataValida == false)
{
    console.log("O cadastro para o evento não esta mais disponivel")
}
else if(Idade < 18)
{
    console.log("Cadastro negado")
}
else if(NumeroDeParticipantes >= 100)
{
    console.log("Vagas esgotadas")

}
else
{
    console.log("Cadastrado")
}

