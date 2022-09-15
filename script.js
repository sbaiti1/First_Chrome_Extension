const container = document.getElementById('greeting');

const date =  new Date ;
const hour = date.getHours()

function greeting(){
    
    if (hour >= 4 && hour < 12 ){
        time = "morning"
    }
    else  if ( hour >= 12 && hour < 19 ){
        time = "afternoon"
    } else if (hour >= 19 && hour < 21){
        time = "evening"
    } else {
        time = "night"
    }
    
    return `good ${time}`
}

container.innerHTML = greeting();

