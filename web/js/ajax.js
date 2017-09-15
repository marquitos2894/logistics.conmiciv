$(function(){
   $('tr #deleteitem').click(function(e){
       e.preventDefault();
       var elemento = $(this);
       var idproducto = elemento.parent().find('#idarticulo').text();
       $.ajax({
           url : 'Quitar',
           type : 'post',
           data : {Compo_cd : idproducto},
           success: function(){
               elemento.parent().parent().remove();
               var elementostabla = $('#tabla_in tr');
               if(elementostabla.length <= 1){
                   $('#div_tab_inv').append("<h4>No hay Componentes en la Lista</h4>");
               }
          
           }           
       })
   });
   
  
});


$(function(){
   $('tr #AgregarItem').click(function(e){
       e.preventDefault();
       var element = $(this);
       var idproducto = element.parent().find('#idarticulo').text();
       $.ajax({
           url : 'Agregar',
           type : 'post',
           data : {compo_cd : idproducto},
           success: function(){
               $('#div_tab_inv').append(element.parent().parent());
            
               
           }           
       })
   });
   
  
});



//function Agregar_item(compo_cd){ // para filtro de oc , se envian varios datos
//                        var parametros = {
//                                "compo_cd" : compo_cd
//                           
//                        };
//                        $.ajax({
//                                data:  parametros,
//                                url:   'Agregar',
//                                type:  'post',
//                             
//                                success:  function (resp) {
//                                     console.log(resp)
//                                }
//                        });
//                }

