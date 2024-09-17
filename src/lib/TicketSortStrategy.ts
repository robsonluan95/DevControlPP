// Importações necessárias
import { TicketProps } from '@/utils/ticket.type'; // Ajuste o caminho conforme necessário

// Interface para a estratégia de ordenação
interface SortStrategy {
  sort(tickets: TicketProps[]): TicketProps[];
}

// Implementação da estratégia de ordenação por data
class DateSortStrategy implements SortStrategy {
  sort(tickets: TicketProps[]): TicketProps[] {
    return tickets.sort((a, b) => {
      // Verifica se created_at não é null antes de criar a instância de Date
      const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return dateB - dateA; // Ordena de forma decrescente
    });
  }
}


// Exporta a estratégia de ordenação por data
export default DateSortStrategy;
