function openmodal() {
    let buttonId = event.target.id;
    let modalId = "dialog-" + buttonId;
    let modal = document.getElementById(modalId);
    
    modal.classList.toggle('hide');
    modal.parentElement.classList.toggle('open-modal');
    document.body.classList.toggle('open-modal');
}

function closemodal(id) {
    let modal = document.getElementById(id);
    
	modal.classList.toggle('hide');
    modal.parentElement.classList.toggle('open-modal');
    document.body.classList.toggle('open-modal');
}

