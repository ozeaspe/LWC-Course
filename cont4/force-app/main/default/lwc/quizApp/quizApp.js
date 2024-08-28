import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // para armazenar as respostas
    correctAnswers = 0 //mostra o número de respostas
    isSubmitted = false // usado para mostrar o resultado
    myQuestions=[
        {
            id:"Question 1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    //método para desabilitar o botão submit
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // método para aplicar estilo dinâmico ao nosso resultado
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    changeHandler(event){
        const {name, value} = event.target 
        this.selected={...this.selected, [name]:value}
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}