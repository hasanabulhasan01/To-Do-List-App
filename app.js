var getul = document.getElementById('ul');

function save(){
    var a = document.getElementById('inp');
    var li = document.createElement('li');
    var liText = document.createTextNode(a.value)
    li.appendChild(liText);
    getul.appendChild(li)
    a.value = ' ';
    var editbtn = document.createElement('button');
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText);
    li.appendChild(editbtn);
    editbtn.setAttribute('onclick', 'editfunc(this)')
    var deletebtn = document.createElement('button');
    var deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText);
    li.appendChild(deletebtn);
    deletebtn.setAttribute('onclick', 'del(this)');
    deletebtn.setAttribute('class', 'liBtns');
    editbtn.setAttribute('class', 'liBtns');
}

function deleteAll(){
    getul.innerHTML = ''; 
}

function del(c){
    c.parentNode.remove();
}

function editfunc(f){
    var userEdit = prompt('Edit Your List Here' , f.parentNode.firstChild.nodeValue)
    f.parentNode.firstChild.nodeValue = userEdit;
}