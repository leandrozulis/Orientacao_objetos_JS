import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente('Leandro',11122233309);
const cliente2 = new Cliente('Alice', 44455566609);

const contaCorrenteLeandro = new ContaCorrente(1001, cliente1);
contaCorrenteLeandro.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteLeandro.transferir(200, conta2);

console.log(ContaCorrente.numeroDeConstas);