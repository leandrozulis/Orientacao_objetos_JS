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
contaCorrenteLeandro.cliente = cliente1;
contaCorrenteLeandro.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = 0;
conta2.agencia = 102;
console.log(conta2.cliente);
console.log(conta2.saldo);

contaCorrenteLeandro.transferir(200, conta2);

// console.log(contaCorrenteLeandro);
console.log(conta2);