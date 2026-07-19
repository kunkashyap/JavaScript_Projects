const form = document.querySelector('form')
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')

    let bmi;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give valid height in CM ${height}`
     }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid weight in KG ${weight}`
     }
     else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2); 
        results.innerHTML = `<span>${bmi}</span>`;       
     }
     
     const div = document.createElement('div')
     div.className = 'display'
     div.id = Math.random()
     div.setAttribute('results' ,'showing-results')
    
     const addText = document.createTextNode("Your Results")
     div.appendChild(addText)
     document.body.appendChild(div)

     

     
     if (bmi < 18.6 ) {
        
        div.innerHTML= 'YOU ARE UNDERWEIGHT'
        div.style.color = 'red'
        
     }else if (bmi < 24.9 && bmi > 18.6){
        div.innerHTML = 'YOU ARE IN NORMAL RANGE'
        div.style.color = 'green'

     }else if (bmi > 24.9) {
        div.innerHTML = 'YOU ARE OVERWEIGHT'
        div.style.color = 'red'
     }

     
    
     

})