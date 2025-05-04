
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });


  // Soluções completas abrir cards 

 
  document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');
    const featureList = document.querySelector('.features-list');
    const descriptions = document.querySelectorAll('.feature-description');
  
    expandButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
  
        const targetId = this.getAttribute('data-target');
        const targetDescription = document.getElementById(targetId);
        const listItem = this.closest('.feature-item');
  
        if (listItem && targetDescription) {
          // Verifica se já existe uma descrição expandida dentro deste item
          const existingDescription = listItem.querySelector('.expanded-description');
  
          // Remove qualquer descrição expandida anteriormente
          featureList.querySelectorAll('.expanded-description').forEach(desc => {
            if (desc !== existingDescription) {
              desc.remove();
              const previouslyActiveItem = desc.closest('.feature-item');
              if (previouslyActiveItem) {
                previouslyActiveItem.classList.remove('active');
              }
            }
          });
  
          if (existingDescription) {
            existingDescription.remove();
            listItem.classList.remove('active');
          } else {
            listItem.classList.add('active');
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('expanded-description');
            descriptionContainer.innerHTML = targetDescription.innerHTML;
            listItem.appendChild(descriptionContainer);
          }
        }
      });
    });
  });



