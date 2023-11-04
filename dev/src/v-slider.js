class VSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.slider = new Flickity(this, {
            cellAlign: 'center',
            contain: false,
            wrapAround: true,
            pageDots: false,
            // prevNextButtons: false
        })
    }

}

if (!customElements.get('v-slider')) {
    customElements.define('v-slider', VSlider)
  }
  