

let hours = document.querySelector('.hour')

let min = document.querySelector('.min')
let sec = document.querySelector('.sec')


const date = new Date()
console.log(date)


let H = date.getHours()
let M = date.getMinutes()
let S = date.getSeconds()


flip(hours,"00", leadingzero(H))
flip(min,"00", leadingzero(M))
flip(sec,"00", leadingzero(S))


time = setInterval(() => {


    S += 1
    if(S > 59)
    {
        M += 1
        S = 0
        flip(min,leadingzero(M - 1), leadingzero(M))
        
    }
    if(M > 59)
    {
        H += 1
        M = 0
        if(H > 23)
        {
            H = 0
            flip(hours,23, leadingzero(H))
        }
        else{
        flip(hours,leadingzero(H -1), leadingzero(H))}
    }

    flip(sec,leadingzero(S-1), leadingzero(S))
    
   

},1000)



function flip(flip_card, start, end)
{
    
    let topflip = document.createElement('div')
    let bottomflip = document.createElement('div')


    topflip.classList.add('top-flip')
    bottomflip.classList.add('bottom-flip')

    let top_text = flip_card.querySelector('.top')
    let bottom_text = flip_card.querySelector('.bottom')

    let start_count = start
    let next = end

    topflip.innerText = start_count
    bottomflip.innerText = next
    top_text.innerText = next


    topflip.addEventListener('animationend', () => 
                             {
        topflip.remove()
  


    })

    bottomflip.addEventListener('animationend', () => 
                             {

        bottom_text.innerText = next
        bottomflip.remove()

    })
    top_text.append(topflip)
    bottom_text.append(bottomflip)

}


function leadingzero(num){if(num < 10){return "0" + num} return num}