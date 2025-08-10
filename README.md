# 🪙 Criando Carteira de Criptomoedas

#### Repositório do lab "Criando e Utilizando a Sua Carteira de Criptomoedas" da Digital Innovation One.

Projeto desenvolvido para gerar uma carteira teste de Bitcoin contendo endereço público (testnet), chave privada e seed phrase (frase mnemônica).

Inclui o código original proposto pelo professor (originalcode.js) e a versão ajustada por mim (createwallet.js) que está 100% funcional.




## 📂 Estrutura do projeto

- src/ 
    - originalcode.js (código proposto) 
    - createwallet.js (código corrigido)
- package.json
- package-lock.json



## Versões utilizadas
- NodeJs: v22.18.0
- Npm: 10.9.3
## 🚀 Como rodar o projeto

1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
cd NOME_DO_REPO
```

2️⃣ Instalar dependências

```bash
npm install
```

3️⃣ Executar a versão funcional

```bash
node src/createwallet.js
```

## 🛠 Tecnologias utilizadas
- Node.js

- Bibliotecas Bitcoin:
    - bip32: ^4.0.0
    - bip39: ^3.1.0,
    - bitcoinjs-lib: "^6.1.0,
    - tiny-secp256k1: ^2.2.4
## 📜 Sobre os arquivos
- createwallet.js → Versão adaptada e corrigida para rodar corretamente no Node.js atual.

- originalcode.js → Código original fornecido no desafio do professor, mantido apenas como referência.

- package.json → Lista de dependências e metadados do projeto.


## ⚠ Aviso de segurança
Este projeto tem finalidade educacional.
Não utilize chaves geradas aqui para armazenar valores reais — use apenas para testes e aprendizado.

### 📄 Licença
Distribuído sob a licença MIT.
Sinta-se livre para usar e modificar, desde que mantenha os créditos.