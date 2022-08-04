export class Quote {
    constructor() {
        this.refreshButton = document.querySelector('.quote__refresh')
        this.quoteText = document.querySelector('.quote__text')
        this.quoteAuthor = document.querySelector('.quote__author')
        this.quotes = []
        this.getQuotes();
        this.setEvent();
    }

    pickRandomQuote = () => {
        const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.quoteText.textContent = `"${quote.text}"`
        this.quoteAuthor.textContent = `- ${quote.author}`
    }

    getQuotes = async () => {
        try {
            const response = await fetch('https://type.fit/api/quotes/')
            const result = await response.json();
            this.quotes = result.filter(quote => quote.author !== null)
            this.pickRandomQuote()
        } catch (error) {
            console.log(error);
        }
    }

    setEvent = () => {
        this.refreshButton.addEventListener('click', (e) => {
            setTimeout(() => {
                this.pickRandomQuote();
            }, 600)
        })
    }
}