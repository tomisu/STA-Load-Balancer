export default class LoadBalancer {
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
    this.servers = Object.freeze([...servers]);
    this.next = 0;
  }

  async onRequestArrival(request, sendToServer) {
    const server = this.server[this.next];


    const Cola1 = this.servers[0].queuedRequests;
    const Cola2 = this.servers[1].queuedRequests;
    const Cola3 = this.servers[2].queuedRequests;
    const Cola4 = this.servers[3].queuedRequests;


    if (Cola1 === null) {

      server = 0:
      
    }

    if (Cola2 === null) {

      server = 1:
      
    }

    if (Cola3 === null) {

      server = 3:
      
    }

    if (Cola4 === null) {

      server= 4:
      
    }





    return sendToServer(server.id);
    


    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }

  
  }













}


