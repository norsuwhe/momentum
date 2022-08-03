class BackgroundSlider {
    constructor() {
        this.background = document.querySelector('.background-slider');
        this.nextButton = document.querySelector('.background-slider__next-button')
        this.prevButton = document.querySelector('.background-slider__prev-button')
        this.time = this.time = new Date().toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' }).split(':').join('');
        this.timeOfDay = this.getTimeOfDay();
        this.currentImageNumber = 1;
        this.getBackground();
        this.setEvents();
    }

    getNextImage = () => {
        this.currentImageNumber === 20 ? this.currentImageNumber = 1 : this.currentImageNumber++;
        this.getBackground();
    }

    getPreviousImage = () => {
        this.currentImageNumber === 1 ? this.currentImageNumber = 20 : this.currentImageNumber--;
        this.getBackground();
    }

    getBackground = () => {
        const imageNumber = this.currentImageNumber < 10 ? 0 + "" + this.currentImageNumber : this.currentImageNumber;
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/norsuwhe/imgMomentum/master/${this.timeOfDay}/${imageNumber}.jpg`
        img.onload = () => {
            this.background.style.backgroundImage = `url(${img.src})`;
        };
    }

    getTimeOfDay = () => {
        if (this.time > 600 & this.time < 1159) return 'morning'
        if (this.time > 1200 & this.time < 1759) return 'afternoon'
        if (this.time > 1800 & this.time < 2359) return 'evening'
        return 'night'
    }

    setEvents = () => {
        this.nextButton.addEventListener('click', this.getNextImage)
        this.prevButton.addEventListener('click', this.getPreviousImage);

    }
}

const backgroundSlider = new BackgroundSlider();