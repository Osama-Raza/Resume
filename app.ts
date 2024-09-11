function showMore(){
    const institute = document.querySelector('.institute') as HTMLElement
    const education = document.querySelector('.inner-education') as HTMLElement
    const year = document.querySelector('.year') as HTMLElement
    const button = document.querySelector('.down') as HTMLElement

    if (institute.style.display === 'none'){
        institute.style.display = 'block'
        education.style.display = 'block'
        year.style.display = 'block'
        button.innerHTML = 'Ʌ'
        
    }else {
        institute.style.display = 'none'
        education.style.display = 'none'
        year.style.display = 'none'
        button.innerHTML = 'V'
        
    }
    }
    

    function showMoreExp(){
        const exp = document.querySelector('.experience') as HTMLElement
        const yearExp = document.querySelector('.year-experince') as HTMLElement
        const buttons = document.querySelector('.down-2') as HTMLElement
    
        if (exp.style.display === 'none'){
            exp.style.display = 'block'
            yearExp.style.display = 'block'
            buttons.innerHTML = 'Ʌ'
            
            
        }else {
            exp.style.display = 'none'
            yearExp.style.display = 'none'
            buttons.innerHTML = 'V'
        }
        }
        
