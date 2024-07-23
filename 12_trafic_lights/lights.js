document.addEventListener('DOMContentLoaded',()=>{
    //get button elements
    const red_button=document.getElementById('red-button');
    const orange_button=document.getElementById('orange-button');
    const green_button=document.getElementById('green-button');
    //get light elements
    const red_light=document.getElementById('red-light');
    const orange_light=document.getElementById('orange-light');
    const green_light=document.getElementById('green-light');
    function change_light(select_light){
        red_light.classList.remove('on');
        orange_light.classList.remove('on');
        green_light.classList.remove('on');
        if(select_light==='red'){
            red_light.classList.add('on');
        }else if(select_light==='orange'){
            orange_light.classList.add('on');
        }else if(select_light==='green'){
            green_light.classList.add('on');
        }
    }
    red_button.addEventListener('click',()=>change_light('red'));
    orange_button.addEventListener('click',()=>change_light('orange'));
    green_button.addEventListener('click',()=>change_light('green'));
})