const Modal = {
    open() {
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },

    close() {
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -10000,
        date: '05/02/2021'
    },
    {
        id: 2,
        description: 'Salário',
        amount: 169400,
        date: '05/02/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -8900,
        date: '05/02/2021'
    },
    {
        id: 4,
        description: 'Bico',
        amount: 5000,
        date: '05/02/2021'
    },
]


const Transaction = {
    incomes() {
        // somar as entradas
    },

    expenses() {
        // somar as saídas
    },
    total() {
        //entradas - saídas
    }
}


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },

    innerHTMLTransaction(transaction) {

        const CSSClass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `

        return html
    },


    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = "Soma das entradas"
        document.getElementById('expenseDisplay').innerHTML = "Soma das saídas"
        document.getElementById('totalDisplay').innerHTML = "total"
    }
     
}


const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100
        
        value = value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        
        return signal + value
    }
}


transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()


