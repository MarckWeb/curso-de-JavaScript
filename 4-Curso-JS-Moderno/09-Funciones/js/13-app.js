const reproductor ={

    cancion:"",
    reproducir : id => console.log(`Reproduciendo cancion con el id ${id}`),

    pausar :id => console.log(`Pausando ${id}`),

    borrar : id => console.log(`Borrando cancion ${id} `),

    crearPlaylist: playlist => console.log(`Creaste play list ${playlist}`),

    reproducirPlaylist: playlist => console.log(`Reproduciendo playlist de ${playlist}`),
    
    set nuevaCancion(cancion){
        this.cancion =cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}
reproductor.nuevaCancion = "Enter Sandman"
reproductor.obtenerCancion;
reproductor.reproducir(22);
reproductor.pausar(22);
reproductor.borrar(22);
reproductor.crearPlaylist('Dani');
reproductor.reproducirPlaylist('DANI');

