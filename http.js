let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname');

const getMyName = async() =>{
    let res = await fetch ('http://127.0.0.1:3000/');
    console.log(res);
    if(!res.ok){
        alert('Failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}

const postSurname = async() => {
    let res = await ('http://127.0.0.1:3000/',{ method: 'POST', headers:{'content-Type':'application/json'}, body: JSON.stringify({surname:'Shankhdhar'})})
    console.log(res);
    if(!res.ok){
        alert('Failed to post surname');
        return;
    }

    let{surname} = res.JSON();
    surnameElement.textContent = surname;
}