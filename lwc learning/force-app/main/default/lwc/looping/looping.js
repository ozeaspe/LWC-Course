import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"]

    ceoList = [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },

        {
            id:2,
            company:"Apple Inc",
            name:"Tim cook"
        },

        {
            id:3,
            company:"Facebook",
            name:"Mark Zuckerberg"
        },

        {
            id:4,
            company:"Amazon.com",
            name:"Jeff Bezos"
        }
    ]

    contactAdminList = [
        {
            id:1,
            cpf: "11223344-63",
            cargo: "Administrador",
            nome: "Lucio",
            representante: "Sim",
            sobrenome: "Apolo",
            repCartCred: "Não",
            email: "lucioapolo@empresa.com",
            telCelular: "(19)90845-1234",
            telFixo: "(19)30451234",
            telComer:"(19)3345-4121"
        },

        {
            id:2,
            cpf:"44556677-99",
            cargo: "Administrador",
            nome: "Lucio",
            representante: "Sim",
            sobrenome: "Apolo",
            repCartCred: "Não",
            email: "lucioapolo@empresa.com",
            telCelular: "(19)90845-1234",
            telFixo: "(19)30451234",
            telComer:"(19)3345-4121"
        }
    ]

}