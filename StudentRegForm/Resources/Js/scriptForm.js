
const form= document.getElementById('form');
const sname = document.getElementById('name');
const father = document.getElementById('father');
const small = document.querySelector('small');
const mother = document.getElementById('mother');
const dob = document.getElementById('dob');

const checkLook = document.getElementById('checking');

const tempAdd1 = document.getElementById('tempAdd1');
const tempAdd2 = document.getElementById('tempAdd2');
const tempAdd3 = document.getElementById('tempAdd3');


const perAdd1 = document.getElementById('perAdd1');
const perAdd2 = document.getElementById('perAdd2');
const perAdd3 = document.getElementById('perAdd3');

const phoneNo = document.getElementById('contact');


//validation codes

const isBWAlphabet = /^[A-Za-z]+$/;
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmpty =  field => field == ''? true:false;
const lengthof = (field,min,max)=> field.length > min && field.length <=max ? true:false;
function isNameField_Valid (nameValue){

    return isBWAlphabet.test(nameValue);

}
let isConNo=(valSent)=>{
    let resRec = valSent.split('');
    let result = false;
    for(let i=0; i<resRec.length;i++){
         result = isNaN(resRec[i]);
      if(!result){break;}
    }return result;}


form.addEventListener('submit', e=>{
   
    e.preventDefault();
    let finalres = Namevalidations();
    
    // window.location.href = "action.html";
  if(finalres){
    window.location.href = "../buttons.html"
    //  document.location.href('./buttons.html');
    // window.location.assign("buttons.html")
  }
  
});


function Namevalidations()
{
    let resNv=false;
    const StdName = sname.value.trim();
    const Fname = father.value.trim();
    const Mname = mother.value.trim();

    let nameFi=  NameField_Validations(StdName,sname);
    let faNameF= NameField_Validations(Fname,father);
    let moNameF =  NameField_Validations(Mname,mother);
    
    function NameField_Validations(param,fId){
        
       
        if( isEmpty(param)){ // --------------------- (1)
            setError(fId,'Can\'t be blank! ');
            
        }else{
            if(isNameField_Valid(param) && isConNo(param)){ //------------ sub (1)
                resNv = true;
                setSucces(fId);
            }else{setError(fId,'Special Characters or Numbers Not Allowed Here.!')}
        }


        return resNv;
        
    }

    return {
        
        faNameF,moNameF,nameFi
    };
    // isEmpty(StdName)?setError(sname,'Name Can not be blank '):setSucces(sname);
    // isNameField_Valid(StdName)?setSucces(sname):setError(sname,' Special Characters Not Allowed Hera');

    // isEmpty(Fname)?setError(father,'This field can\'t be blank '):setSucces(father);
    // isNameField_Valid(Fname)?setError(father,' Special Characters Not Allowed Hera'):setSucces(father);
    // console.log(fNameF + ' '+moNameF +' '+nameFi);
    
}


function setError(inp,msg){

    const ctl = inp.parentElement;
    const er = ctl.querySelector('small');
    er.innerHTML=msg;
}
function setSucces(inp){

    const ctl = inp.parentElement;
    const er = ctl.querySelector('small');
    er.innerHTML ='';
} 

function resetit(){

var x = document.getElementById('form').querySelectorAll('.form-fild');

for(let i=0;i<x.length;i++){
    x[i].querySelector('small').innerHTML='';
}
  
}
