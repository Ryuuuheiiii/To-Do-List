let addBtn = document.getElementById('addBtn');
let inputFeild = document.getElementById('inputFeild');
let myList = document.getElementById('myList');

addBtn.addEventListener('click', function(){
    if (inputFeild.value ==''){
        alert('Please put some content.')
    } else{
    var list =document.createElement('li')
    list.classList.add('uncheck')
    list.innerText = inputFeild.value;
    myList.appendChild(list);
    inputFeild.value = '';
    }
    //click list to mark as checked

    list.addEventListener('click', function(){
        list.classList.add('checked')
    })
    
    list.addEventListener('dblclick', function(){
        myList.removeChild(list);
        
        
    })



})

