<!-- APPEND LANGUAGE DROPDOWN -->
 <script type="text/javascript">
$(document).ready(function(){
     $(".belt .container").append('<div id="dropdown"class="dropdown"><a class="mainmenu toggle-login"><img src="" alt="" id="active" class="active"></a><div class="submenu"><ul class="menuitems"><li><a href="#"><img class="item" alt="es_ES" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-es_ES.png?989"> - ES</a></li><li><a href="#"><img class="item" alt="en_GB" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-en_GB.png?983"> - EN</a></li><li><a href="#"><img class="item" alt="fr_FR" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-fr_FR.png?983"> - FR</a></li><li><a href="#"><img class="item" alt="it_IT" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-it_IT.png?989"> - IT</a></li><li><a href="#"><img class="item" alt="pt_PT" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-pt_PT.png?989"> - PT</a></li><li><a href="#"><img class="item" alt="pt_BR" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-pt_BR.png?989"> - BR</a></li><li><a href="#"><img class="item" alt="da_DK" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-da_DK.png?989"> - DA</a></li><li><a href="#"><img class="item" alt="nl_NL" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-nl_NL.png?989"> - NL</a></li><li><a href="#"><img class="item" alt="sv_SE" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-sv_SE.png?989"> - SV</a></li><li><a href="#"><img class="item" alt="tr_TR" src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-tr_TR.png?989"> - TR</a></li></ul></div></div>');

});

$(document).ready(function(){
  $(window).load(Resize);
});
window.onresize= Resize;

function Resize(){
  if(window.innerWidth > 590){
     var test= document.getElementById("dropdown");
     //test.style.width= 540+"px";
     //console.log(test.style.width);
     var marlft = (window.innerWidth-540)/2;
     console.log("Margin-left before"+ test.style.marginLeft);
     console.log("Margin-left after"+marlft);
     test.style.marginLeft =  marlft+"px";
     console.log(test.style.marginLeft);
     
  }else{
    var test= document.getElementById("dropdown");
    //test.style.width= 90+"%";
    test.style.marginLeft = 15+"px";
  };
}

 </script>

<!-- MANAGE FLAG EVENTS -->
<!-- Copiado de otro código -->
<script type="text/javascript">
        $(document).ready(function () {
            $('.toggle-login').click(function () {
                $(this).next('#login-content').slideToggle();
                $(this).toggleClass('active');
  
                if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
                else $(this).find('span').html('&#x25BC;')
            })
        });
    </script>

    <script type="text/javascript">
        $(document).ready(function () {
  
            $(".mainmenu").click(function () {
                var X = $(this).attr('id');
                if (X == 1) {
                    $(".submenu").hide();
                    $(this).attr('id', '0');
                }
                else {
                    $(".submenu").show();
                    $(this).attr('id', '1');
                }
            });
  
            //Mouse click on sub menus
            $(".submenu").mouseup(function () {
                return false
            });
  
            //Mouse click on my account link
            $(".mainmenu").mouseup(function () {
                return false
            });
  
  
            //On Document Click
            $(document).mouseup(function () {
                $(".submenu").hide();
                $(".mainmenu").attr('id', '');
            });
        });
    </script>

<!-- MANAGE THE FLAG -->
<script type="text/javascript">
  //Chek la url para detectar el idioma y ajustar la bandera correspondiente
  var url= window.location.href; 
  window.onload = function() {
    if(url.search( 'es_ES' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-es_ES.png?983"; 

  }else if(url.search( 'en_GB' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-en_GB.png?983";

  }else if(url.search( 'fr_FR' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-fr_FR.png?983";

  }else if(url.search( 'fr_BE' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-fr_FR.png?983"; 

  }else if(url.search( 'fr_CH' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-fr_FR.png?983";

  }else if(url.search( 'it_IT' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-it_IT.png?983";

  }else if(url.search( 'pt_PT' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-pt_PT.png?983"; 

  }else if(url.search( 'pt_BR' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-pt_BR.png?983"; 
    
  }else if(url.search( 'da_DK' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-da_DK.png?983"; 
    
  }else if(url.search( 'nl_NL' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-nl_NL.png?983"; 
    
  }else if(url.search( 'nl_BE' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-nl_NL.png?983"; 
    
  }else if(url.search( 'sv_SE' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-sv_SE.png?983"; 
    
  }else if(url.search( 'tr_TR' )!=-1  ){
    document.getElementById("active").src="https://static.myfourchette.com/bundles/lafourchettemain/images/flag-tr_TR.png?983"; 
    
  }else{
    console.log("Error en el idioma");
  };
};
  
</script>

<!-- MANAGE THE URL  -->
<script type="text/javascript">
$(document).ready(function () {
        $(".item").click(function(){
          var src = $(this).attr('src');
          lang="TEST";
          if(src.search( 'es_ES' )!=-1  ){
            window.history.pushState( lang, "Título_TEST", "https://module.lafourchette.com/es_ES/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'en_GB' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/en_GB/module/56567-a3fd1");
           location.reload(); 
          }else if(src.search( 'fr_FR' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/fr_FR/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'it_IT' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/it_IT/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'pt_PT' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/pt_PT/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'pt_BR' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/pt_BR/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'da_DK' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/da_DK/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'nl_NL' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/nl_NL/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'sv_SE' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/sv_SE/module/56567-a3fd1");
            location.reload(); 
          }else if(src.search( 'tr_TR' )!=-1  ){
            window.history.pushState(lang, "Título_TEST", "https://module.lafourchette.com/tr_TR/module/56567-a3fd1");
            location.reload(); 
          }else{
              console.log("Error en LA URL");
         };
       });
});
</script>
