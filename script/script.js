const name = prompt("Your name:");
const userName = document.querySelector('.name');
userName.textContent = name;

const vars = {
    list: document.querySelector('.automat'),
    item: document.querySelectorAll('.automat_item'),
    btn: document.querySelector('.spin_btn'),
    money: document.querySelector('.money'),
    spins: document.querySelector('.spins'),
    m:100,
    s:10,
}

const image = [
    Arthas = {
        src: "https://files.fm/thumb_show.php?i=f4hs5ed9a",
        id: "papich"
    },
    Dora = {
        src: "https://files.fm/thumb_show.php?i=cdr2ms2zx",
        id: "dora"
    },
    Ken = {
        src: "https://files.fm/thumb_show.php?i=yb2yufqet",
        id: "ken"
    },
    Pari = {
        src: "https://files.fm/thumb_show.php?i=c3ypw6p38",
        id: "pari"
    },
    
];


function Spin(){
        let time;
        time = setInterval(() =>{
            vars.item.forEach(e =>{
            var a = image[GetRand(image)];
        e.innerHTML = `<img src = "${a.src}" id ="${a.id}" class="photo">`;
    })
        },100)

        setTimeout(() =>{
            clearInterval(time);
            let img = document.querySelectorAll('.photo');
            Switcher(img);
            vars.money.textContent = `На International: ${vars.m}$`;
            vars.spins.textContent = `Spins: ${vars.s}`;
        },3500)

        
}

const Switcher = (x) =>{
    let arr = [];
    x.forEach(e => {
        arr.push(e.id);
            
    });

    if(arr[0] === arr[1] && arr[1] === arr[2]){
        console.log(3)
        alert("3 in a row!!!")
        vars.m+=50;
        vars.s+=5;
    }
    else if(arr[0] === arr[1] || arr[2] === arr[1]){
        console.log(2);
        vars.s +=1;
        vars.m +=10;
    }
    else{
       if(vars.m <= 10 || vars.s ===0){
           window.location.reload();
       }
       else{
        vars.s--;
        vars.m-=10;
       }
    }
    return vars.m, vars.s;
}

const GetRand = (x) =>{
    return Math.floor(x.length * Math.random())
}

vars.btn.addEventListener('click', Spin);