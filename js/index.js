var minute=25;
var seconds_ten=0;
var seconds_unite=0;
var x=1
var stop=0
var orologio
var click=true
var session=0
var pausetime=false
function start(){

    

    timer(minute,seconds_ten,seconds_unite)
    

}

function start_timer(stop){
    if(click==true){
       click=false
       orologio= setInterval(function(){
        if(seconds_unite==0){
            seconds_unite=9
            if(seconds_ten==0){
                seconds_ten=5
                minute--
            }else{
            seconds_ten--
            }
        }else{
        seconds_unite--
        }
        timer(minute,seconds_ten,seconds_unite)
        
        if(minute==0&&seconds_ten==0&&seconds_unite==0){
            
            clearInterval(orologio)
            document.getElementById('myAudio').play()
            if(pausetime==false){
            session++
            document.getElementById('sessions').innerText="Sessions:"+session;
            }
            pausetime=false
            click=true
        }
        return orologio
        },1000)

    }else{

    }
}

function reset(){
    click=true
    clearInterval(orologio)
    document.getElementById('myAudio').pause()
    minute=25
    seconds_ten=0
    seconds_unite=0
    timer(minute,seconds_ten,seconds_unite)
}

function timer(minute, seconds_ten,seconds_unite){
    document.getElementById('clock').innerHTML=minute+":"+seconds_ten+seconds_unite
}

function pause5(){
    if(click==true){
    pausetime=true
    minute=5
    seconds_ten=0
    seconds_unite=0
    timer(minute,seconds_ten,seconds_unite)
    }else{

    }
}

function pause15(){
    if(click==true){
    pausetime=true
    minute=15
    seconds_ten=0
    seconds_unite=0
    timer(minute,seconds_ten,seconds_unite)
    }
}