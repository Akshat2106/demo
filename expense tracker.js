var Form=document.getElementById('addform')
var exp=document.getElementById('expense');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",addItem)
localStorage.setItem('userexpense','expense')
localStorage.setItem('userdescription','description')
localStorage.setItem('usercategory','category')

function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('please enter fields')
    }
    else{
        let Obj={
            expense:exp.value,
            description:desc.value,
            category:cate.value
        }
        let Obj_serialized=JSON.stringify(Obj);
localStorage.setItem(Obj.description,Obj_serialized);

var li=document.createElement('li');
li.className='item';
li.appendChild(document.createTextNode(localStorage.getItem(Obj.description)));

var delbtn=document.createElement('button');
delbtn.className='delete-btn';
delbtn.appendChild(document.createTextNode('Delete'));
li.appendChild(delbtn)

var edibtn=document.createElement('button');
edibtn.className='edit-btn';
edibtn.appendChild(document.createTextNode('Edit'));
li.appendChild(edibtn)

itemlist.appendChild(li)


    document.addEventListener('click',deleteitem);

    function deleteitem(e){
        if(e.target==delbtn){
            if(confirm('Are U sure?')){
                var li=e.target.parentElement;
                localStorage.removeItem(Obj.description);
                itemlist.removeChild(li)
            }
        }
    }
    document.addEventListener('click',edititem);

    function edititem(e){
        if(e.target==edibtn){
            var li=e.target.parentElement;
            for(var i=0;i<itemlist.getElementsByClassName('item').length;i++){
                if(itemlist.getElementsByClassName('item')[i]==li){
                    let deserialized=JSON.parse(itemlist.getElementsByClassName('item')[i].firstChild.textContent);
                    Form.querySelector('#expense').value=deserialized.expence
                    Form.querySelector('#description').value=deserialized.description;
                    Form.querySelector('#category').value=deserialized.category;
                    localStorage.removeItem(Obj.description);

                }
            }
            itemlist.removeChild(li)
        }
    }
}  

}