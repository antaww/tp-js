let lemon = "🍋";
let cherry = "🍒";
let gem = "💎";
let seven = "7️⃣";

const items = [];

//Add each item to the array 2 times except for seven which is added 1 time
for (let i = 0; i < 2; i++) {
    items.push(lemon);
    items.push(cherry);
    items.push(gem);
}
items.push(seven);

document.querySelector(".info").textContent = items.join(" ");

const doors = document.querySelectorAll(".door");
document.querySelector("#spinner").addEventListener("click", spin);

// async function spin() {
//     for (const door of doors) {
//         const boxes = door.querySelector(".boxes");
//         const duration = parseInt(boxes.style.transitionDuration);
//         boxes.style.transform = "translateY(0)";
//         await new Promise((resolve) => setTimeout(resolve, duration * 100));
//     }
// }
