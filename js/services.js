          // Below function we show tab content based on selection
          function tabSwitcher(tabName) {
            var i;
            var x = document.getElementsByClassName("tab__body");
            // Here we loop all the elements and make display none
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            
            // Here showing the selected tab by adding style as block
    
            document.getElementById(tabName).style.display = "block";
    
            tablinks = document.getElementsByClassName("tab");
          // Here we are adding CSS of border bottom to identify which is active
            for (i = 0; i < x.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(
                " active__tab",
                ""
              );
            }
            event.currentTarget.className += " active__tab";
          }