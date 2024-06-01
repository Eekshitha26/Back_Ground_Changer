const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = "#ff7f50"
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = "#0000ff"
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = "#781dce"
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = "#a52a2a"
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = "#adff2f"
        }

    })
})