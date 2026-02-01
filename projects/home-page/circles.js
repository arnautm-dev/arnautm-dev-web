//VARIABLES
const numCircles = 90; //Quantitat de cercles MAX. 150
const speedMove = 0.015; //Velocitat de moviment dels cercles

// Generar molts cercles de forma dinàmica
        const container = document.body;
        const numShapes = numCircles;
        
        for (let i = 0; i < numShapes; i++) {
            const shape = document.createElement('div');
            shape.className = 'bg-shape';
            
            // Posició aleatòria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Mida aleatòria entre 80px i 250px
            const size = Math.random() * 170 + 80;
            
            // Color aleatori (tons pastel)
            const colors = [
                'rgba(100, 200, 150, 0.5)',
                'rgba(120, 180, 200, 0.5)',
                'rgba(180, 150, 200, 0.5)',
                'rgba(150, 200, 100, 0.5)',
                'rgba(200, 100, 150, 0.5)',
                'rgba(100, 150, 200, 0.5)',
                'rgba(200, 180, 100, 0.5)',
                'rgba(100, 200, 200, 0.5)',
                'rgba(200, 150, 180, 0.5)',
                'rgba(150, 180, 200, 0.5)'
            ];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = posX + '%';
            shape.style.top = posY + '%';
            shape.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
            
            container.appendChild(shape);
        }

        const cursorGlow = document.getElementById('cursor-glow');
        const bgShapes = document.querySelectorAll('.bg-shape');
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;
        let isMouseMoving = false;
        let mouseTimeout;
        
        // Dades per a cada cercle (angles i velocitats)
        const shapeData = [];
        bgShapes.forEach((shape, index) => {
            shapeData.push({
                shape: shape,
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.5 + 0.2) * (index % 3 === 0 ? 1 : -1),
                radius: Math.random() * 50 + 20
            });
        });

        function updateAnimation() {
            if (!isMouseMoving) {
                // Moviment automàtic quan no es mou el ratolí
                shapeData.forEach((data) => {
                    data.angle += data.speed * speedMove;
                    
                    const moveX = Math.cos(data.angle) * data.radius;
                    const moveY = Math.sin(data.angle) * data.radius;
                    
                    data.shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            }
            
            requestAnimationFrame(updateAnimation);
        }

        function updateGlow() {
            // Suavitzar el moviment amb interpolació
            glowX += (mouseX - glowX) * 0.50;
            glowY += (mouseY - glowY) * 0.50;
            
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            
            requestAnimationFrame(updateGlow);
        }

        updateAnimation();
        updateGlow();