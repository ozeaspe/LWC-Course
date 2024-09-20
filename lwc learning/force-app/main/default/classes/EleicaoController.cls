public class EleicaoController {
    // Método para registrar o voto
    @AuraEnabled
    public static void registrarVoto(String candidato) {
        Voto__c voto = new Voto__c();
        voto.Candidato__c = candidato;
        insert voto;
    }

    // Método para calcular a porcentagem de votos por candidato
    @AuraEnabled
    public static Map<String, Decimal> calcularPorcentagem() {
        Map<String, Decimal> resultados = new Map<String, Decimal>();
        
        // Contagem total de votos
        Integer totalVotos = [SELECT COUNT() FROM Voto__c];
        
        // Agrupando votos por candidato
        List<AggregateResult> votosPorCandidato = [SELECT Candidato__c, COUNT(Id) total FROM Voto__c GROUP BY Candidato__c];
        
        for (AggregateResult result : votosPorCandidato) {
            String candidato = (String) result.get('Candidato__c');
            Decimal totalCandidato = (Decimal) result.get('total');
            
            if (totalVotos > 0) {
                Decimal porcentagem = (totalCandidato / totalVotos) * 100;
                resultados.put(candidato, porcentagem);
            }
        }
        
        return resultados;
    }
}