class Time {
    constructor() {
        this.clock = document.querySelector('.time__clock')
        this.date = document.querySelector('.time__date')
        this.currentTime = new Date().toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })
        this.currentDate = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', weekday: 'long' });
        this.updateTime()
        this.updateClock()
        this.updateDate()
    }
    updateTime = () => {
        setInterval(() => {
            this.currentTime = new Date().toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })
            this.currentDate = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', weekday: 'long' })
            this.updateClock()
            this.updateDate();
        }, 1000)
    }
    updateClock = () => {
        this.clock.textContent = this.currentTime
    }
    updateDate = () => {
        this.date.textContent = this.currentDate
    }
}

const time = new Time();