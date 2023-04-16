/* RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 1
Author: Celina Vangstrup
ID: S3993396
Acknowledgement: 
https://www.w3schools.com/html/html_responsive.asp
https://www.youtube.com/watch?v=lAOkx2yZESY&ab_channel=EasyTutorials
https://www.w3schools.com/howto/howto_css_switch.asp */

document.addEventListener('DOMContentLoaded', () =>{ 
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.getElementsByClassName('navigation-links')[0];
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  });