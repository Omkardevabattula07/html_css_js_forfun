const cont=document.querySelector('.container');

const lang=["python","HTML","CSS","Javascript","Bash","Postgres"];

let lang_index=0;
let char_index=1;

update_text();

function update_text(){
    cont.innerHTML=`<h1>Languages :${lang[lang_index].slice(0,char_index)}</h1>`;
    char_index++;
    if(char_index===lang[lang_index].length){
        lang_index++;
        char_index=0;
    }
    

    setTimeout(update_text,400);
};