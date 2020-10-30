function showMenu(menu_info){
    var nav_menu = document.getElementById("nav-menuu");
    var logg=document.getElementById("log-img");
    var img_slide=document.getElementsByClassName("img-mob");

    if(menu_info.classList.contains("change")) 
    {
        menu_info.classList.remove("change");
        nav_menu.classList.remove("nav-min");
        logg.style.display="block";
        head.style.width="95%";
        document.getElementsByTagName("body")[0].style.backgroundColor='hsl(0, 0%, 100%)';
        for(i=0;i<img_slide.length;i++)
        {
            img_slide[i].style.opacity='1';
        }
        head.style.backgroundColor="unset";        
        document.getElementsByClassName("arrows")[0].style.opacity='1';
    }
    else{
        menu_info.classList.toggle("change");
        nav_menu.classList.add("nav-min");
        logg.style.display="none";
        head.style.width="100%";
        document.getElementsByTagName("body")[0].style.backgroundColor='rgba(0, 0, 0, 0.2)';
        for(i=0;i<img_slide.length;i++)
        {
            img_slide[i].style.opacity='0.7';
        }
        head.style.backgroundColor='hsl(0, 0%, 100%)';
        head.style.opacity=1;
        document.getElementsByClassName("arrows")[0].style.opacity='0.8';
    }
       
}
function prev()
    {
        var check=document.getElementsByClassName("slide--1")[0];
        var check_slide=window.getComputedStyle(check).display;
        // should know the present slide
        if(check_slide!=="none") // in slide-1(return to slide-3) 
        {
            document.getElementsByClassName("slide--1")[0].style.display="none";
            document.getElementsByClassName("slide--2")[0].style.display="none";
            document.getElementsByClassName("slide--3")[0].style.display="block";

        }
        else{  // in slide-2 or slide-3
            var check_2=window.getComputedStyle(document.getElementsByClassName("slide--2")[0]).display;
            if(check_2!=="none")  // in slide-2 (return to slide-1)
            {
                document.getElementsByClassName("slide--2")[0].style.display="none";
                document.getElementsByClassName("slide--3")[0].style.display="none";
                document.getElementsByClassName("slide--1")[0].style.display="block";
            }
            else{          // in slide-3 (return to slide-2)  
                document.getElementsByClassName("slide--3")[0].style.display="none";
                document.getElementsByClassName("slide--1")[0].style.display="none";
                document.getElementsByClassName("slide--2")[0].style.display="block";


            }

        }
    }
    function next()
    {
        var check=document.getElementsByClassName("slide--1")[0];
        var check_slide=window.getComputedStyle(check).display;
         // should know the present slide 
         if(check_slide!=="none") // // in slide-1(next to slide-2)  
         {
            document.getElementsByClassName("slide--1")[0].style.display="none";
            document.getElementsByClassName("slide--3")[0].style.display="none";
            document.getElementsByClassName("slide--2")[0].style.display="block";

         }
         else{  // in slide-2 or slide-3
             var check_2=window.getComputedStyle(document.getElementsByClassName("slide--2")[0]).display;
             if(check_2!=="none")  // in slide-2 (next to slide-3)
             {
                document.getElementsByClassName("slide--2")[0].style.display="none";
                document.getElementsByClassName("slide--1")[0].style.display="none";
                document.getElementsByClassName("slide--3")[0].style.display="block";
            }
             else{          // in slide-3 (next to slide-1) 
                document.getElementsByClassName("slide--3")[0].style.display="none";
                document.getElementsByClassName("slide--2")[0].style.display="none";
                document.getElementsByClassName("slide--1")[0].style.display="block";
    
 
             }
 
         }
 
    }
    