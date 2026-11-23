export const label = "Round-Robin";

export default class RoundRobin {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
    this.servers = servers;
    this.next = 0; // Índice del siguiente servidor al que se enviará la petición
  }

  async onRequestArrival(request, sendToServer) {
    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }
    let server = this.servers[0];

    // Un número grande random para poder comparar
    let menos = 999;

    // Miro los servidores uno por uno
    for (let i = 0; i < this.servers.length; i++) {
      const actual = this.servers[i];

      // Cuento las peticiones que tiene encima:
      // las de la cola y una más si está procesando
      let conexiones = actual.queuedRequests.length;

      if (actual.activeRequest != null) {
        conexiones = conexiones + 1;
      }

      // Si tiene menos que el mejor que llevaba, se queda con él
      if (conexiones < menos) {
        menos = conexiones;
        server = actual;
      }
    }

    // Envía la petición al servidor y devuelve su respuesta al cliente.
    return sendToServer(server.id);
  }
}
