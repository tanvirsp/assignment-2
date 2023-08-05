
// 1) DOM Manipulation
function changeText(){
    const div = document.getElementById('changeText');
    div.innerHTML = `<h1>Changed Heading </h>`
};


// 2) Click Counter
function increase(){
    const p = document.getElementById("count");
    const oldNumber = parseInt(p.innerText);
    const newNumber = oldNumber + 1;
    p.innerText = newNumber;

};


// 3) Image Switcher

function changeImage1(){
    const image = document.getElementById('image');
    image.src = "image1.png"
};


function changeImage2(){
    const image = document.getElementById('image');
    image.src = "image2.png"
};





// 4) Ajax
async function loadData(){
    const res  = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    console.log(data);

};

loadData()
