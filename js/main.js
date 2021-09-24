// Get Modal element
var modal = document.getElementById('addModal');

// Get Modal button Id
var modalBtn = document.getElementById('btnAdd');

// Get close Button 
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Get Cancel button
var cancelBtn = document.getElementById('cancel');

// Listen for a open click
modalBtn.addEventListener('click', openModal);

// Listen for a close click
closeBtn.addEventListener('click', closeModal);

// Listen for cancel click
cancelBtn.addEventListener('click', closeModal);

// Listen for outside Modal
window.addEventListener('click', outsideModal);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    
}