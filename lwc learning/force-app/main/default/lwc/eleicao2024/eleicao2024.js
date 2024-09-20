import { LightningElement, track } from 'lwc';
import registrarVoto from '@salesforce/apex/EleicaoController.registrarVoto';
import calcularPorcentagem from '@salesforce/apex/EleicaoController.calcularPorcentagem';

export default class Eleicao extends LightningElement {
    @track candidatoSelecionado = '';
    @track candidatos = [
        { label: 'Candidato 1', value: 'Candidato 1' },
        { label: 'Candidato 2', value: 'Candidato 2' },
        { label: 'Candidato 3', value: 'Candidato 3' }
    ];
    @track resultados;

    handleChange(event) {
        this.candidatoSelecionado = event.detail.value;
    }

    votar() {
        if (this.candidatoSelecionado) {
            registrarVoto({ candidato: this.candidatoSelecionado })
                .then(() => {
                    return calcularPorcentagem();
                })
                .then((result) => {
                    this.resultados = Object.keys(result).map(candidato => {
                        return { 
                                candidato, 
                                porcentagem: (result[candidato]) };
                    });
                })
                .catch(error => {
                    console.error('Erro ao registrar voto: ', error);
                });
        }
    }
}