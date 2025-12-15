# 🧪 Testes Automatizados de API – PokéAPI com Cypress

## 📌 Visão Geral

Este projeto demonstra a **automação de testes de API REST utilizando Cypress**, aplicando boas práticas de QA para validação de **fluxo positivo** e **fluxo negativo** em uma API pública amplamente utilizada para estudos: a **PokéAPI**.

O objetivo principal é validar o comportamento correto da API tanto em cenários de sucesso quanto em cenários de erro, garantindo que o contrato da API seja respeitado.

---

## 🎯 Objetivos dos Testes

* Validar o **status code** das respostas da API
* Confirmar a integridade dos dados retornados
* Testar o comportamento da API em **cenários válidos e inválidos**
* Demonstrar organização, clareza e legibilidade dos testes
* Servir como **projeto de portfólio** para testes automatizados de API

---

## ✅ Cenários de Teste Implementados

### 1️⃣ Cenário Positivo – Buscar Pokémon existente

**Descrição:**
Realiza uma requisição GET para buscar o Pokémon **Pikachu** e valida se a API retorna corretamente os dados esperados.

**Validações realizadas:**

* Status code **200 (OK)**
* Nome do Pokémon retornado igual a `pikachu`

---

### 2️⃣ Cenário Negativo – Buscar Pokémon inexistente

**Descrição:**
Realiza uma requisição GET para um Pokémon inexistente, validando o comportamento da API em caso de erro.

**Validações realizadas:**

* Status code **404 (Not Found)**
* Mensagem retornada no body igual a `Not Found`

Este teste garante que a API responde corretamente quando o recurso solicitado não existe.

---

## 🛠️ Tecnologias Utilizadas

* **Cypress** – Framework de automação de testes
* **JavaScript** – Linguagem utilizada para escrita dos testes
* **PokéAPI** – API REST pública para testes e estudos
* **Node.js** – Ambiente de execução

---

## 📁 Estrutura do Projeto

```bash
cypress/
 └── e2e/
     └── pokemon.cy.js
```

---

## ▶️ Como Executar o Projeto

1. Clone este repositório

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências

```bash
npm install
```

3. Execute o Cypress

```bash
npx cypress open
```

ou

```bash
npx cypress run
```

---

## 📈 Diferenciais do Projeto

* Testes **positivos e negativos** no mesmo arquivo
* Validações claras e objetivas
* Uso correto de `failOnStatusCode: false`
* Código limpo, legível e bem comentado
* Ideal para **demonstração técnica em processos seletivos**

---

## 👨‍💻 Autor

Projeto desenvolvido por **Analista de Testes (QA)** com foco em automação de testes de API, boas práticas de qualidade de software e construção de portfólio profissional.

---

🚀 *Este projeto faz parte de uma iniciativa contínua de aprimoramento em automação de testes e qualidade de software.*
