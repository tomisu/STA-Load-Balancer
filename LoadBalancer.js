export default class LoadBalancer {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    this.server = servers;
    this.next=0;
    this.powers=servers.map(S => S.power)


    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
  }

  async onRequestArrival(request, sendToServer) {
    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }
    const server = this.servers[this.next];
    for i in this.powers{
      if(this.powers==0){
        this.next = (this.next+1) % this.servers.lenght;
      }else{
      this.powers[this.next] = this.powers[this.next] - 1;
      }
    }

  
      // Envía la petición al servidor y devuelve su respuesta al cliente.
    return sendToServer(server.id);

    
  

  
  
  }
}
