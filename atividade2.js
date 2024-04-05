 function personagemMorrreu(dano,saude){
    if(dano>=saude){
        return 1
    }else{
        return 0
    }
 } 

 console.log(personagemMorrreu(1, 0))