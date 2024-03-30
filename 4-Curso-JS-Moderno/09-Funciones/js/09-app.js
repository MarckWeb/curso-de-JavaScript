
const reproductor ={
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar : function (){
        console.log('pausando...')
    },
    borrar : function(id){
        console.log(`Borrando cancion ${id} `)
    },
    crearPlaylist: function(playlist){
        console.log(`Creaste play list ${playlist}`)
    },
    reproducirPlaylist:function (playlist){
        console.log(`Reproduciendo playlist de ${playlist}`)
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Dani");
reproductor.reproducirPlaylist("Dani");
