// Get Modal element
var modalEdit = document.getElementById('editModal');

// Get Modal button Id
var modalBtnEdit = document.getElementById('btnEdit');

// Get close Button 
var closeBtnEdit = document.getElementById('closeBtnEdit');

// Get Cancel button
var cancelBtnEdit = document.getElementById('cancel-edit');

// Listen for a open click
modalBtnEdit.addEventListener('click', openEditModal);

// Listen for a close click
closeBtnEdit.addEventListener('click', closeEditModal);

// Listen for cancel click
cancelBtnEdit.addEventListener('click', closeEditModal);

// Listen for outside Modal
window.addEventListener('click', outsideEditModal);

function openEditModal() {
    modalEdit.style.display = 'block';
}

function closeEditModal() {
    modalEdit.style.display = 'none';
}

function outsideEditModal(e) {
    if (e.target == modalEdit) {
        modalEdit.style.display = 'none';
    }
}