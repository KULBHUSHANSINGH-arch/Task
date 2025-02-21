// function toggleOptions(item) {
//     let options = item.querySelector(".options");
//     let radio = item.querySelector(".custom-radio");

//     let isOpen = options.style.display === "flex"; // Check if already open

//     // Reset all items
//     document.querySelectorAll(".item").forEach(el => {
//         el.style.border = "2px solid #dadada";
//         el.style.backgroundColor = "transparent";  // Reset background
//         el.querySelector(".custom-radio").style.backgroundColor = "transparent";
//         el.querySelector(".options").style.display = "none";
//     });

//     if (!isOpen) {
//         // Open the clicked one
//         options.style.display = "flex";
//         item.style.border = "2px solid #FF6B82";
//         item.style.backgroundColor = "#FFF9FA"; // 🔥 Change full item bg color
//         radio.style.backgroundColor = "#FF6B82";
//     }
// }

function toggleOptions(element) {
    let optionsDiv = element.querySelector(".options");
    let radioInput = element.querySelector(".custom-radio");

    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        document.querySelectorAll(".item").forEach(item => item.classList.remove("active"));
        element.classList.add("active");
    }
    radioInput.classList.toggle('selected');
}

// Prevent dropdown clicks from closing the options div
document.querySelectorAll(".options select").forEach(select => {
    select.addEventListener("click", function(event) {
        event.stopPropagation(); // Stops the event from bubbling up
    });
});

function toggleSelection(radio) {
   
}


