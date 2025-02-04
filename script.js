document.addEventListener('DOMContentLoaded', function () {
    console.log('Boilerplate Website Loaded!');
    
    // Example of a simple JS functionality: Change background color on button click
    const changeColorBtn = document.createElement('button');
    changeColorBtn.textContent = 'Change Background Color';
    document.body.appendChild(changeColorBtn);

    changeColorBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
    });
});
