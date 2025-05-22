// Script para animar os cards de projetos quando entrarem na viewport
document.addEventListener('DOMContentLoaded', function() {
    // Configurações do observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Criar o observer para os cards de projeto
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todos os cards de projeto
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        projectObserver.observe(card);
    });
});
