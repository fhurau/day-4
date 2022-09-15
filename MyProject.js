let dataMP = []

function addMP(){


    let title = document.getElementById("Title").value
    let description = document.getElementById("Description").value
    let image = document.getElementById("Input Image").files

    image = URL.createObjectURL(image[0])
    console.log(image);

    let MP = {
        title,
        description,
        image,
    }

    dataMP.push(MP)
    console.log(dataMP);

    renderMP()

}

function renderMP(){

    for (let index = 0; index < dataMP.length; index ++){
        console.log(dataMP[index]);

        document.getElementById("content-main").innerHTML +=`
        
        <div class="content">

                <img src="${dataMP[index].image}" alt="image" id="content">
                <h2>${dataMP[index].title}</h2>
                <p>${dataMP[index].description}</p>
                <button class="button-left">edit</button>
                <button class="button-right">delete</button>
                
            </div>
        
        `
    }

}