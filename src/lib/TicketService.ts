
import prismaClient from '@/lib/prisma'; 

class TicketService {
  static async getOpenTickets(userId: string) {
    return prismaClient.ticket.findMany({
      where: {
        status: "ABERTO",
        customer: {
          userId: userId
        }
      },
      include: {
        customer: true
      },
      orderBy: {
        created_at: "desc"
      }
    });
  }

  // Outros métodos do TicketService podem ser adicionados aqui
}

export default TicketService;
