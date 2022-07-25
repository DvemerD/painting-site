export default class Toast {
    constructor({ title, text, theme, autohide, interval }) {
        this.title = title ? title : '';
        this.text = text + text;
        this.theme = theme;
        this.autohide = autohide;
        this.interval = interval;
        this.render();
        document.querySelector('.close').addEventListener('click', () => {
            this.close('.toast')
        });
        this.hideAuto();
        this.darkMode();
    }

    hideAuto() {
        if (this.autohide) {
            setTimeout(() => {
                this.close('.toast');
            }, this.interval);
        }
    }

    close(parent) {
        const parentNode = document.querySelector(parent);

        parentNode.classList.remove('fade-in')
        parentNode.classList.add('fade-out');

        setTimeout(() => {
            parentNode.remove();
        }, 2000);
    }

    darkMode() {
        const wrapper = document.querySelector('.toast');

        switch (this.theme) {
            case 'light':
                wrapper.style.backgroundColor = '#f4f4f4';
                wrapper.style.color = '#111111';
                break;
            case 'dark':
                wrapper.style.backgroundColor = '#111111';
                wrapper.style.color = '#f4f4f4';
                break;
            default:
                wrapper.style.backgroundColor = '#f4f4f4';
                wrapper.style.color = '#111111';
        }
    }

    render() {
        document.body.insertAdjacentHTML('afterBegin', `
            <div class="toast fade-in">
                <h3 class="title">${this.title}</h3> 
                <p class="text">${this.text.length > 109 ? this.text.substr(0, 105) + '...' : this.text}</p>  
                <div class="close"></div>
            </div>
        `);
        console.log(document.querySelector('.text').textContent.length)
    }
}