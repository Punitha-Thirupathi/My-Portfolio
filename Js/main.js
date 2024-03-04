// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  if(toggle && nav){
        toggle.addEventListener('click', () =>{
              nav.classList.toggle('show')
        });
  }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// JavaScript to handle the download
/* document.getElementById('downloadButton').addEventListener('click', function() {
  // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
  var resumePath = 'path/to/your/resume.pdf';

  // Create a temporary link element
  var link = document.createElement('a');
  link.href = resumePath;
  link.download = 'your_resume'; // Optional: set the desired name for the downloaded file
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
});
 */
