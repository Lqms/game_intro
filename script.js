document.querySelector("button").onclick = function(){
    printRules('https://scratch.mit.edu/projects/543896893/fullscreen/')
  }
  
function printRules(linkToYourGame){
    let rules
    let arr = []
    let counter = 0
    let input = document.querySelector('input')
    let button = document.querySelector('button')
    let name = ' '
  
    name = input.value
    rules = `Привет, ${name}. Тут будут правила игры`
    interval = setInterval(iteration, 100)
    input.remove()
    button.remove()

  
  
    function iteration() {
        arr.push(rules[counter])
        document.querySelector('p').innerHTML = arr.join('')
        counter++
        if (counter>rules.length) {
            let createA = document.createElement('a')
            createA.innerHTML = 'START GAME'
            createA.href = linkToYourGame
            document.querySelector('div').append(createA)
            clearInterval(interval)
        }
    }
}

