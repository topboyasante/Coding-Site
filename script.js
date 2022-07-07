//Dark Mode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',function switchMode(){
    document.body.classList.toggle('dark');
})

//Responsive Navbar
const toggleNav = document.getElementById('navbar-toggle')
const navbarLinks = document.getElementById('nbl')
const closeNav = document.getElementById('nav-close')
toggleNav.addEventListener('click', function openNav(){
    navbarLinks.style.display = 'block';
})

closeNav.addEventListener('click',function closeNav(){
    navbarLinks.style.display = 'none';
})