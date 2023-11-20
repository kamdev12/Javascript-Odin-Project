const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

btn.addEventListener ('click', () => {
    let myText = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const btn2 = document.createElement('button');

    listItem.appendChild(span);
    span.textContent = myText;

    listItem.appendChild(btn2);
    btn2.textContent = "Delete";

    list.appendChild(listItem);

    btn2.addEventListener('click', () =>{
        list.removeChild(listItem);
    });

    input.focus();
    


})

