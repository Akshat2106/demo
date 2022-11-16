"use strict";
//using this function
this.table='window table';
this.garage={
    table:'garage table'
};

let johnsRoom={
    table:'johns table'
};

console.log(johnsRoom.table);

//to clear

let johnsRoom={
    table:'johns table'
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }    
};

this.garage={
    table:'garage table'
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }   
};

johnsRoom.cleanTable();
this.garage.cleanTable();


//using call function

const.cleanTable=function(){
    console.log(`cleaning ${this.table}`);
};

//add more objective in same function

const cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};
cleanTable.call(this,'some soap');


//this inside inner function

const cleanTable=function(soap){
    const innerFunction=(_soap)=>{
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction(soap);
}; 

//this inside a constructor
let createRoom=function(name){
    this.table=`${name}s table`
}
createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${_soap}`);
    };
    const jillsRoom=new createRoom('jill');
    const johnsRoom=new createRoom('john');

    jillsRoom.cleanTable('some soap');
    johnsRoom.cleanTable('some soap');

    //this inside a class

    class createRoom{
        constructor(name){
            this.table`${name}s table`;
        }
        cleanTable(soap){
            console.log(`cleaning ${this.table} using ${soap}`);
        }
    }
    const jillsRoom=new createRoom('jill');
    const johnsRoom=new createRoom('john');

    jillsRoom.cleanTable('some soap');
    johnsRoom.cleanTable('some soap');

