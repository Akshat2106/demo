console.log(document.domain);
console.log(documnet.url);
console.log(document.title);

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
// console.log(document.all);gi
// console.log(document.all[10]);

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
headerTitle.style.borderBottom = 'solid 4px #000';


 var item = document.getElementsByTagName('h1');
 console.log(item);
 item.style.fontweight='bold';
 item.style.fontcolor='green';