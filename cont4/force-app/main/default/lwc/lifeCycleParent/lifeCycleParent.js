import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        this.template.querySelector('.abc')
    }
}