const inp = document.getElementById("inp");
const showAllStudent = document.getElementById("showAllStudent");
const list_item = document.getElementById("list_item");
const display = document.getElementById("display");
const search = document.getElementById("search");
const first_position = document.getElementById("first-position");
const second_position = document.getElementById("second-position");
const third_position = document.getElementById("third-position");

const participantName = [];

inp.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        let newName = event.target.value.split(",");
        if (newName !== "") {
            newName.forEach((element) => {
                participantName.push(element);
                let item = createList(element);

                list_item.appendChild(item);
                event.target.value = "";
            });
        }
    }
});

search.addEventListener("click", function () {
    if (participantName.length == 0) {
        alert("There is No Entry");
    } else {
        // let shuffleNames = shuffle(participantName);
        let shuffleNames = [...participantName];
        for (let i = 1; i < shuffleNames.length; i++) {
            (function (i, count) {
                setTimeout(() => {
                    let rand = Math.floor(Math.random() * shuffleNames.length);
                    display.innerHTML = shuffleNames[rand];
                    if (count == shuffleNames.length - 1) {
                        if (!first_position.innerHTML) {
                            first_position.innerHTML = shuffleNames[rand];
                            let ind = participantName.indexOf(
                                shuffleNames[rand],
                            );
                            participantName.splice(ind, 1);
                        } else if (!second_position.innerHTML) {
                            second_position.innerHTML = shuffleNames[rand];
                            let ind = participantName.indexOf(
                                shuffleNames.rand,
                            );
                            participantName.slice(ind, 1);
                        }else if(!third_position.innerHTML){
third_position.innerHTML = display.innerHTML;
let ind = participantName.indexOf(display.innerHTML)
participantName.splice(ind,1)``

}else{alert('not Data')}
                    }
                }, i);
            })(i * 100, i);
        }
    }
});

function createList(item) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = item;
    return li;
}
// function shuffle(arr) {
//     let shuffleArr = [...arr];

//     for (let i = shuffleArr.length - 1; i > 0; i--) {
//         let rand = Math.floor(Math.random() * (i + 1));
//         let temp = shuffleArr[rand];
//         shuffleArr[rand] = shuffleArr[i];
//         shuffleArr[i] = temp;
//     }

//     return shuffleArr;
// }
