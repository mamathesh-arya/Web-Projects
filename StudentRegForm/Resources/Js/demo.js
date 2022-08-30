const { result } = require("underscore");

let ar = 'as sam3344$$$';
console.log(ar.replace(/\s+/g,''));

const f = 'arya';
const len = 'ary'
const isEmp =  field => field === ''? true:false;
const lengthof = (field,min,max)=> field.length > min && field.length <=max ? true:false;
// console.log(isEmp(f));
// console.log(lengthof(len,0,8));

//name Validation 

function nameValidation(name){

    // const valid = new RegExp('^(?=.*[a-z])')
    const valid = /^[A-Za-z]+$/;
    return valid.test(name);
}

// console.log(nameValidation('abcsssAAs'));
let StdName ='a';
let Fname ='b';
// const a =10;
// if(a == 10){
    
//     console.log('s error');

// }else{
//     console.log('no log on std');
// }
// if(Fname == 'b'){
    
//     console.log('f erro');
    
   
// }else{
//     console.log('no f log');
   
// }
// let a='arya' 
// if(a == ''){
//     console.log('true');
// }else{
//     console.log('false');
// }

const isBWAlphabet = /^[A-Za-z]+$/;
function isNameField_Valid (nameValue){

    return isBWAlphabet.test(nameValue);

}
console.log('is valid Name '+isNameField_Valid('shajs'));
let msg='';
let res = false;
function b(val){

     function c(val){
        if(val<5){
            msg='No from c';
        }else
        if(val>=2){
                msg='yes From C';
                res=true;
            }
        
     
     return res;
    }
    
    return c(val);
}

let bk = b(8), 
bk2 = b(2);
// console.log(bk2);
let abcd = "mamathesh";
let str = abcd.trim();
//  console.log(str);
//  console.log(str.length);


let sl=()=>{
    let result = false;
    for(let i=0; i<str.length;i++){
         result = isNaN(str[i]);
      if(!result){
            
            break;
      }
      
    }
    return result;
    
} 
console.log(sl());

console.log();


