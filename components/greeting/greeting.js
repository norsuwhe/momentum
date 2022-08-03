class Greeting {
    constructor() {
        this.time = new Date().toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' }).split(':').join('');
        this.greetingText = document.querySelector('.greeting__text')
        this.input = document.querySelector('.greeting__name')
        this.name = ''
        this.setGreetingText();
        this.setEvents();
    }

    setLocalStore = () => {
        localStorage.setItem('name', this.name);
    }

    getLocalStorage = () => {
        if (localStorage.getItem('name')) {
            this.name = localStorage.getItem('name')
            this.input.value = this.name
            this.resizeInput();
        }
    }

    setGreetingName = (e) => {
        this.name = e.target.value;
        this.setLocalStore();
        if (this.input.value.length < 1) this.setDefaulInputSize();
    }

    setDefaulInputSize = () => {
        this.input.style.width = '190px'
    }

    resizeInput = () => {
        this.input.style.width = this.input.value.length + 'ch';
    }

    setGreetingText = () => {
        if (this.time > 600 & this.time < 1159) return this.greetingText.textContent = 'Good Morning,'
        if (this.time > 1200 & this.time < 1759) return this.greetingText.textContent = 'Good Afternoon,'
        if (this.time > 1800 & this.time < 2359) return this.greetingText.textContent = 'Good Evening,'
        return this.greetingText.textContent = 'Good Night,'
    }

    setEvents = () => {
        this.input.addEventListener('change', this.setGreetingName)
        this.input.addEventListener('input', this.resizeInput)
        window.addEventListener('load', this.getLocalStorage)
    }
}

const greeting = new Greeting();