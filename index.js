import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import {ContaPoupanca} from './ContaPoupanca.js';
import {Conta} from './Conta.js';

const cliente1 = new Cliente('Leandro',11122233309);

const contaCorrenteLeandro = new ContaCorrente(cliente1, 1001);
contaCorrenteLeandro.depositar(500);
contaCorrenteLeandro.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaCorrenteLeandro);
console.log(contaPoupanca);