document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project-item');
    const dots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const totalProjects = projects.length;
    function showProject(index) {
    // Get current active project
    const currentActive = document.querySelector('.project-item.active');
    
    // Add leaving class to current project
    if (currentActive) {
        currentActive.classList.add('leaving');
    }
    
    // After transition ends, switch projects
    setTimeout(() => {
        // Hide all projects
        projects.forEach(project => {
            project.classList.remove('active', 'leaving');
        });
        
        // Show selected project
        projects[index].classList.add('active');
        
        // Update dots and buttons...
    }, 500); // Half of transition duration
}

    function updateNavigation() {
        // Update active project
        projects.forEach((project, index) => {
            project.classList.toggle('active', index === currentIndex);
        });
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalProjects - 1;
    }
    
    // Next button
    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
            updateNavigation();
        }
    });
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateNavigation();
        }
    });
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            currentIndex = index;
            updateNavigation();
        });
    });

    // Game
    
    
    // Initialize
    updateNavigation();
});