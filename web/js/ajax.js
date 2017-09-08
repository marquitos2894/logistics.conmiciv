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

