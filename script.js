const moveButton = document.getElementById("moveButton");
const thankButton = document.getElementById("thankButton");

moveButton.addEventListener("mouseover", function() {
    const buttonWidth = moveButton.offsetWidth; 
    const buttonHeight = moveButton.offsetHeight; 
    
    const randomX = Math.floor(Math.random() * 700); 
    const randomY = Math.floor(Math.random() * 390); 

    moveButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

moveButton.addEventListener("click", function() {
    const buttonWidth = moveButton.offsetWidth; 
    const buttonHeight = moveButton.offsetHeight; 
    
    const randomX = Math.floor(Math.random() * 700); 
    const randomY = Math.floor(Math.random() * 390); 

    moveButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

thankButton.addEventListener("click", function() {
    alert("Xin cảm ơn, xin cảm ơn, xin cảm ơn!!");
});
