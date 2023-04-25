import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Leandro';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 44455566609;

const contaCorrenteLeandro = new ContaCorrente();
contaCorrenteLeandro.agencia = 1001;

contaCorrenteLeandro.depositar(100);
const valorSacado = contaCorrenteLeandro.sacar(50)
console.log(valorSacado);

console.log(contaCorrenteLeandro);