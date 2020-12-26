let init = {
    challenge: 1,
    bai: 1,
}
db.ref(`challenges/${init.challenge}/`).once("value", (snapshot) => {
    let data = snapshot.val();
    let text = '';
    //Hien so problem
    for(let i  = 1; i < data.problems.length; i++){
        text += `<div class ="grid_item">
        <div class = "icon"><img id="pythonreducedpng" src="../Image/python.png"></div>
        <a id="${data.problems[i].probName.split(' ').join('')}" href ="#">Thử thách ${i}</a>
    </div>`
    }
    document.getElementById("grid_container").innerHTML = text;

    for(let i  = 1; i < data.problems.length; i++){
        document.getElementById(`${data.problems[i].probName.split(' ').join('')}`).addEventListener("click", function(e){
            init.bai = i;
            document.getElementById("problem").innerHTML = data.problems[init.bai].problem;
            document.getElementById("submitbutton").addEventListener("click",(e)=>{
                e.preventDefault();
                if(document.getElementById("inputResult").value ===  data.problems[init.bai].result){
                    alert("Chính xác!")
                }else{alert("Không chính xác!")}
            })
        })

    }
    //Hien problem init
    document.getElementById("problem").innerHTML = data.problems[init.bai].problem;
    document.getElementById("submitbutton").addEventListener("click",(e)=>{
        e.preventDefault();
        if(document.getElementById("inputResult").value ===  data.problems[init.bai].result){
            alert("Chính xác!")
        }else{alert("Không chính xác!")}
    })
})
