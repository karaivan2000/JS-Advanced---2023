function lockedProfile() {

    Array.from(document.querySelectorAll(`.profile button`))
    .forEach(button => button.addEventListener(`click`, onClick));
   
    

    function onClick (ev) {
        let profile = ev.target.parentElement;
        let isActive = profile.querySelector(`input[value="unlock"]`).checked;
        
        if (!isActive) {
            let information = Array.from(profile.querySelectorAll(`div`))
            .find( p => p.id.includes(`HiddenFields`));
            
            if (ev.target.textContent === `Show more`) {
                ev.target.textContent = `Hide it`;
                information.style.display = `block`;
            } else {
                ev.target.textContent = `Show more`;
                information.style.display = `none`;
            }
        }
  
    }
}