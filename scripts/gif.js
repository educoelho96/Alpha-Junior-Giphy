/*
*O CÓDIGO NÃO ESTÁ BUSCANDO PELA TECLA "ENTER"
*A BUSCA ESTÁ FUNCIONANDO APENAS PELO BOTÃO "BUSCA"
*PRA BUSCAR NOVAMENTE É PRECISO RECARREGAR A PÁGINA
 */

function getData(){

    //input é usado pra modificar a url, pega o valor da barraBusca
    let input = $("#searchText").val()

    //código pra se conectar pela API
    let xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=SUdmyArWtHz5m6Irwd8z7unUWW6hiejw&limit=30");
    xhr.done(function(data){
        console.log("success got response", data);

        /*buscar a url do gif pra exibir na tela
          diretório na API para busca da url data.images.original.url
         */
        let x = data.data;
        for (i in x){
            $('.inner').append("<img src='" + x[i].images.original.url+"' style='height:250px; width:320px;'/>")
        }
    });
}



