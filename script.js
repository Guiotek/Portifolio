        function toggleMenu() {
          document.getElementById('menu').classList.toggle('active');
        }

        document.getElementById('menu').addEventListener('click', toggleMenu);

        function onClickButton() {
            document.getElementById('button').addEventListener('click', function() {
                alert('Botão clicado!');
            });
        }
        
        function onClickButtonSeeMore() {
            const seeMoreButton = document.getElementById('seeMore');
            if (seeMoreButton) {
                seeMoreButton.addEventListener('click', function() {
                    // Verifica se os novos projetos já foram adicionados
                    if (!document.querySelector('.new-card')) {
                        const newProjects = `
                            <a class="card new-card">
                                <div>
                                    <h2>Projeto 4</h2>
                                    <p>Descrição do projeto 4</p>
                                </div>
                            </a>
                            <a class="card new-card">
                                <div>
                                    <h2>Projeto 5</h2>
                                    <p>Descrição do projeto 5</p>
                                </div>
                            </a>
                            <a class="card new-card">
                                <div>
                                    <h2>Projeto 6</h2>
                                    <p>Descrição do projeto 6</p>
                                </div>
                            </a>
                        `;
                        document.getElementById('cards').insertAdjacentHTML('beforeend', newProjects);
                        this.style.display = 'none';
                        document.getElementById('seeLess').style.display = 'flex';
                    }
                });
            }
        }
        
        function onClickButtonSeeLess() {
            const seeLessButton = document.getElementById('seeLess');
            if (seeLessButton) {
                seeLessButton.addEventListener('click', function() {
                    const newCards = document.querySelectorAll('.new-card');
                    newCards.forEach(card => card.remove());
                    this.style.display = 'none';
                    document.getElementById('seeMore').style.display = 'flex';
                });
            }
        }

    function onClickSkill(string) {
        const skill = string;
        const items = document.querySelectorAll('.description');
        
        items.forEach(item => {
            if (item.classList.contains('showDescription')) {
                item.classList.remove('showDescription');
            }
        });
        const noSelect = document.querySelector('.noSelect');        
        if (noSelect.classList.contains('showDescription')) {
            noSelect.classList.remove('showDescription');
        }
        return document.getElementById(skill + 'Description').classList.add('showDescription');
    }