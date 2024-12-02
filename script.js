const blob = document.getElementById("blob");

window.addEventListener('mousemove', (e) => {
    console.log(e);
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y)

    blob.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 3000, fill: "forwards" });
});

window.addEventListener('mouseout', (e) => {
    blob.style.display = none;
})

const cursor = document.getElementById("cursor");

window.addEventListener('mousemove', (e) => {
    console.log(e);
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y)

    cursor.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 3000, fill: "forwards" });
});

window.addEventListener('mouseout', (e) => {
    cursor.style.display = none;
})
