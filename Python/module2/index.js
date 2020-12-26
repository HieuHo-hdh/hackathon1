let init = {
    challenge: 2,
    bai: 1,
    result: undefined,
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
            init.result = data.problems[init.bai].result;
            document.getElementById("problem").innerHTML = data.problems[init.bai].problem;
        })

    }
    //Hien  init
    init.result = data.problems[init.bai].result;
    document.getElementById("problem").innerHTML = data.problems[init.bai].problem;
})
