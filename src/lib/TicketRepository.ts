import prismaClient from '@/lib/prisma';

class TicketRepository {
  async findOpenTickets(userId: string) {
    return prismaClient.ticket.findMany({
      where: {
        status: "ABERTO",
        customer: {
          userId: userId,
        },
      },
      include: {
        customer: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
  }
}

export default new TicketRepository();
