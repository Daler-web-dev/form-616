let inps = document.querySelectorAll('input');
let succes = document.querySelector('.succes');
let error = document.querySelector('.error');
let form = document.forms.register

let pattern = {
    name: /^[a-z ,а-я ,.'-]+$/i,
    surname: /^[a-z ,а-я ,.'-]+$/i,
    MomName: /^[a-z ,а-я ,.'-]+$/i,
    PapName: /^[a-z ,а-я ,.'-]+$/i,
    Ayou: /^[a-z ,а-я ,.'-]+$/i,
    js: /^[a-z ,а-я ,.'-]+$/i,
    html: /^[a-z ,а-я ,.'-]+$/i,
    css: /^[a-z ,а-я ,.'-]+$/i,
    car:/^[a-z ,а-я ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    age: /^\S[0-9]{0,3}$/
};


function validate(field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inps.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.name

        validate(inp, pattern[key])
    }
})



form.onsubmit = (event) => {
    event.preventDefault()

    let count = 0

    inps.forEach(inp => {
        if(inp.value.length === 0 || inp.classList.contains('invalid')) {
            count++
            inp.classList.add('invalid')
        }
    })

    error.innerHTML = count
    succes.innerHTML = 12 - count

    if(count > 0) {
        alert('нормально заполни слышь ты')
    } else {
        submit()
    }


}


function submit() {
    let user = {}


    let fm = new FormData(form)
    

    fm.forEach((value, key) => {
        user[key] = value
    })
    
    console.log(user);
}