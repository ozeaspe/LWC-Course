import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /**Data binding example */
    fullname = "Zero to Hero"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }

    /**@track binding example */
    @track address = {
        city: 'Paulista',
        postcode: '53401150',
        country: 'Brasil'
    }

    trackHandler(event){
        this.address.city = event.target.value
    }

    /**getter example */
    users = ["john", "smith", "nik"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toLocaleUpperCase()
    }

    get multiply(){
        return this.num1 * this.num2
    }

}