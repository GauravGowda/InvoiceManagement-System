// Get Modal element
var modalDelete = document.getElementById('deleteModal');

// Get Modal button Id
var modalBtnDelete = document.getElementById('btnDelete');

// Get close Button 
var closeBtnDelete = document.getElementById('closeBtnDelete');

// Listen for a open click
modalBtnDelete.addEventListener('click', openEditModal);

// Listen for a close click
closeBtnDelete.addEventListener('click', closeEditModal);

// Listen for outside Modal
window.addEventListener('click', outsideEditModal);

function openEditModal() {
    modalDelete.style.display = 'block';
}

function closeEditModal() {
    modalDelete.style.display = 'none';
}

function outsideEditModal(e) {
    if (e.target == modalDelete) {
        modalDelete.style.display = 'none';
    }
}