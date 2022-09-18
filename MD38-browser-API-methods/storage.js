document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameValue = document.getElementById('name-field').value;
    localStorage.setItem('name', nameValue)
})
document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name')
})
document.getElementById('btn-add-age').addEventListener('click', function () {
    const ageValue = document.getElementById('age-field').value;
    localStorage.setItem('age', ageValue)
})
document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age')
})
document.getElementById('btn-clear-ls').addEventListener('click', function () {
    localStorage.clear()
})
