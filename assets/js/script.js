
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


  // const cards = document.querySelectorAll('.fold6-content-cards');
  // const prev = document.querySelector('.prev');
  // const next = document.querySelector('.next');
  // let current = 0;
  
  // function showCard(index) {
  //   cards.forEach((card, i) => {
  //     card.classList.toggle('active', i === index);
  //   });
  // }
  
  // prev.addEventListener('click', () => {
  //   current = (current - 1 + cards.length) % cards.length;
  //   showCard(current);
  // });
  
  // next.addEventListener('click', () => {
  //   current = (current + 1) % cards.length;
  //   showCard(current);
  // });
  
  // showCard(current);


  
  const cards1 = document.querySelectorAll('#slids .fold6-content-cards');
  const next1 = document.querySelector('.next');
  const prev1 = document.querySelector('.prev');
  let current1 = 0;

  function showCard1(index) {
    cards1.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  next1.addEventListener('click', () => {
    current1 = (current1 + 1) % cards1.length;
    showCard1(current1);
  });

  prev1.addEventListener('click', () => {
    current1 = (current1 - 1 + cards1.length) % cards1.length;
    showCard1(current1);
  });

  showCard1(current1);

 
  const cards2 = document.querySelectorAll('#slids2 .fold6-content-cards');
  const next2 = document.querySelector('.next2');
  const prev2 = document.querySelector('.prev2');
  let current2 = 0;

  function showCard2(index) {
    cards2.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  next2.addEventListener('click', () => {
    current2 = (current2 + 1) % cards2.length;
    showCard2(current2);
  });

  prev2.addEventListener('click', () => {
    current2 = (current2 - 1 + cards2.length) % cards2.length;
    showCard2(current2);
  });

  showCard2(current2);


  

  // Animações
  document.addEventListener('DOMContentLoaded', () => {
    const elementsToFadeIn = document.querySelectorAll('.hero-content-text, #fold2-content, .fold3-content, .fold4-content, .fold5-content, .fold6-content, .fold7-content, .plataforma-agro-content, .fold9-content, .rodape-content');
    elementsToFadeIn.forEach(element => {
        element.classList.add('fade-in-onload');
        setTimeout(() => {
            element.classList.add('loaded');
        }, 100); // Pequeno delay para garantir a transição
    });
});

const sectionsToSlideIn = document.querySelectorAll('#fold2, #fold3, #fold4, #fold5, #fold6, #fold7, #plataforma-agro, #fold9');

const observerSlide = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // A animação começa quando 20% da seção está visível

sectionsToSlideIn.forEach(section => {
    section.classList.add('slide-in-scroll');
    observerSlide.observe(section);
});


const featureItems = document.querySelectorAll('#fold3 .feature-item');

const observerFeatures = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 150); // Anima cada item com um pequeno delay
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

featureItems.forEach(item => {
    observerFeatures.observe(item);
});

const featureIcons = document.querySelectorAll('#fold4 .fold4-lista li');

const observerIcons = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

featureIcons.forEach(icon => {
    observerIcons.observe(icon);
});

const benefitItems = document.querySelectorAll('#fold5 .fold5-list li');

const observerBenefits = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 150);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

benefitItems.forEach(item => {
    observerBenefits.observe(item);
});

const valueCards = document.querySelectorAll('#fold7 .fold7-card');

const observerValue = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 200);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

valueCards.forEach(card => {
    observerValue.observe(card);
});

const agroCards = document.querySelectorAll('#plataforma-agro .plataforma-agro-card');

const observerAgro = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 150);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

agroCards.forEach(card => {
    observerAgro.observe(card);
});

