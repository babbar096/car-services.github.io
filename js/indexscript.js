// We get the 3 lines for the side bar and when it is clicked we toggle the class to change so that the css for change is active.
// Since we use toggle we can switch back to the prevois styles allowing us to see a moving sidebar
document.querySelector(".menu-x").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
// Here also we toggle the class to change the css which will switch the cards in front and back when the respective buttong 
//with navigation-button class is clicked
  Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle("changecard");
    };
  });