import {Cliente} from './Cliente.js';
import {ContaCorrente} from './Conta/ContaCorrente.js';
import {ContaPoupanca} from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

// const cliente1 = new Cliente('Leandro',11122233309);
// const contaCorrenteLeandro = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// console.log(contaSalario);

const diretor = new Diretor('Leandro', 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente('Lele', 5000, 12365498701);
gerente.cadastrarSenha("123456789");

const cliente = new Cliente('Lais', 78945612379, '456');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);