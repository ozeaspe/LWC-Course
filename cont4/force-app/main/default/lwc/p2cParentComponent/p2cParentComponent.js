import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    @api message

    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider
    }
}