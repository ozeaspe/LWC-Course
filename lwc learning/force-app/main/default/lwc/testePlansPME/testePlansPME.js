import { LightningElement } from 'lwc';


export default class TestePlansPME extends LightningElement {

    columnsTable=["Produto", "Valor",]
    listTable=[
        {
            id:1,
            produto:"Be Digital Light",
            valor:"R$0,00",
        },
        {
            id:2,
            produto:"Claro Branca",
            valor:"R$ 0,00",
        },
        {
            id:3,
            produto:"Mobilidade",
            valor:"R$ 0,00",
        },
        {
            id:4,
            produto:"Gol",
            valor:"R$ 0,00",
        },
        {
            id:5,
            produto:"Passaporte Américas 10 GB",
            valor:"R$ 299,00",
        }
    ]

    
    dataBonus = {
            bonusExtra:"Bônus Extra 10GB",
            bonus: "Bônus 8 GB+Fixo"
        }


    //Dados para exemplo nos planos
    planoIndividualList = [
        {
            id: 1,
            tiposolicitacao: "Novo",
            regional: "SPC",
            uf: "SP",
            ddd: "11",
            qtdLinhaTotal: "200",
            totalPlano: "R$ 33.742,00",
            grupo: "1",
            contaFaturamento: "64564871",
            franquia:"R$ 74,99"
        }
    ]
}