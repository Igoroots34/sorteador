window.
onload
= function() {
    Particles.init
({
    selector: '.background'
    });
};

let team1 = [];
let team2 = [];

function startDrawing() {
    const nameDisplay = document.getElementById("nameDisplay");
    const team1ScoreDisplay = document.getElementById("team1Score");
    const team2ScoreDisplay = document.getElementById("team2Score");

    // Zerar os times e a exibição de nomes ao iniciar o sorteio
    team1 = [];
    team2 = [];
    team1ScoreDisplay.textContent = ``;
    team2ScoreDisplay.textContent = ``;
    nameDisplay.textContent = "NOMES SORTEADO";

    const namesInput = document.getElementById("nameInput").value;
    const names = namesInput.split(",").map(name => name.trim());

    const interval = setInterval(() => {
        if (names.length === 0) {
            clearInterval(interval);
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names.splice(randomIndex, 1)[0];

        if (team1.length < 5) {
            team1.push(name);
            team1ScoreDisplay.textContent = ` ${team1.join(", ")}`;
        } else if (team2.length < 5) {
            team2.push(name);
            team2ScoreDisplay.textContent = ` ${team2.join(", ")}`;
        }

        // Reiniciar a animação
        nameDisplay.classList.remove("typing-demo");
        void nameDisplay.offsetWidth; // Forçar reflow para reiniciar a animação
        nameDisplay.classList.add("typing-demo");

        // Definir a largura do nameDisplay com base no comprimento do texto e adicionar 1 pixel
        const computedWidth = `${nameDisplay.length + 1}`;
        nameDisplay.style.width = computedWidth;

        nameDisplay.textContent = name;
    }, 2000);
}




document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('nameInput');
    var textInput = document.getElementById('text-input');
    var initialImage = document.createElement('img');
    var focusedImage = 'images/cs2-logo-orange.png';
    
    initialImage.src = 'images/cs2-logo.png';
    initialImage.id = 'inputImage';
    initialImage.style.width = '20em';
    initialImage.style.marginLeft = '10px';
    
    // Insert the image before the input
    nameInput.parentNode.insertBefore(initialImage, nameInput);
    
    // Move the textInput paragraph after the image
    nameInput.parentNode.insertBefore(textInput, nameInput);

    nameInput.addEventListener('focus', function() {
        initialImage.src = focusedImage;
        initialImage.classList.add('neon');
    });
    
    nameInput.addEventListener('blur', function() {
        initialImage.src = 'images/cs2-logo.png';
        initialImage.classList.remove('neon');
    });
});


var TagsInput = function(element) { 
var self = this;
var initChar = "\u200B";
var initCharPattern = new RegExp(initChar, 'g');

var insert = function(element) {
    if(self.textNode) self.element.insertBefore(element, self.textNode);
    else self.element.appendChild(element);
};

var updateCursor = function() {
    self.cursor = self.blank;
};

var keydown = function(event) {
    if(event.keyCode == 188) {
    event.preventDefault();
    setTimeout(function() {
        var text = self.text;
        if(text) {
        self.text = initChar;
        self.add(text);
        }
    }, 1);
    }
    else if(event.keyCode == 8) {
    if(self.text.replace(initCharPattern, '') == '') {
        self.text = initChar+initChar;
        if(self.selected) {
        self.element.removeChild(self.selected);
        }
        else {
        var tags = self.tags;
        var keys = Object.keys(tags)
        if(keys.length > 0) {
            var tag = tags[keys[keys.length-1]];
            tag.setAttribute('data-selected', '');
        }
        }
    }
    }
    
    if(event.keyCode !== 8) {
    if(self.selected) self.selected.removeAttribute('data-selected');
    }
    setTimeout(function() {
    updateCursor();
    }, 1);
};

var focus = function() {
    updateCursor();
};

Object.defineProperties(this, {
    element: {
    get: function() {
        return element;
    },
    set: function(v) {
        if(typeof v == 'string') v = document.querySelector(v);
        element = v instanceof Node ? v : document.createElement('div');
        if(!element.className.match(/\btags-input\b/)) element.className += ' tags-input';
        if(element.getAttribute('contenteditable') != 'true') element.setAttribute('contenteditable', 'true');
        
        element.removeEventListener('keydown', keydown);
        element.addEventListener('keydown', keydown);
        
        element.removeEventListener('focus', focus);
        element.addEventListener('focus', focus);
        this.text = initChar;
    }
    },
    tags: {
    get: function() {
        var element;
        var elements = this.element.querySelectorAll('span');
        var tags = {};
        for(var i = 0; i < elements.length; i++) {
        element = elements[i]
        tags[element.innerText] = element;
        }
        
        return tags;
    }
    },
    lastChild: {
    get: function() {
        return this.element.lastChild;
    }
    },
    textNode: {
    get: function() {
        return this.element.lastChild instanceof Text ? this.element.lastChild : null;
    }
    },
    text: {
    get: function() {
        return this.textNode ? this.textNode.data : null;
    },
    set: function(v) {
        if(!this.textNode) this.element.appendChild(document.createTextNode(','));
        this.textNode.data = v;
    },
    },
    cursor: {
    get: function() {
        return this.element.getAttribute('data-cursor') !== null;
    },
    set: function(v) {
        if(v) this.element.setAttribute('data-cursor', '');
        else this.element.removeAttribute('data-cursor');
    }
    },
    focused: {
    get: function() {
        return document.activeElement == this.element;
    }
    },
    blank: {
    get: function() {
        return this.text.replace(initCharPattern, '') == '';
    }
    },
    selected: {
    get: function() {
        return this.element.querySelector('span[data-selected]');
    }
    }
});

this.add = function(tag) {
    tag = tag.replace(initCharPattern, '');
    tag = tag.replace(/^\s+/, '').replace(/\s+$/, '');
    tag = tag[0].toUpperCase()+tag.toLowerCase().slice(1);
    if(tag != '' && this.tags[tag] === undefined) {
    var element = document.createElement('span');
    element.appendChild(document.createTextNode(tag));
    element.setAttribute('contenteditable', 'false');
    
    insert(element);
    }
};

this.remove = function(tag) {
    var element = this.tags[tag];
    if(element) this.element.removeChild(element);
};

this.element = element;
};

var input = new TagsInput('.tags-input');

//card selected//

// Adicione isso no seu arquivo JavaScript (script.js)
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btn-select');
    const nameInput = document.getElementById('nameInput');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = button.closest('.card');
            const cardTitle = card.querySelector('.card-title').textContent;
            const btnSelect = card.querySelector('.btn-select')

            // Marcar/desmarcar a seleção visualmente
            btnSelect.classList.toggle('selected');

            // Adicionar ou remover o nome no input
            let names = nameInput.value.split(',').map(name => name.trim()).filter(name => name !== '');
            if (btnSelect.classList.contains('selected')) {
                // Adicionar nome se não estiver na lista
                if (!names.includes(cardTitle)) {
                    names.push(cardTitle);
                }
            } else {
                // Remover nome se estiver na lista
                names = names.filter(name => name !== cardTitle);
            }
            nameInput.value = names.join(', ');
        });
    });
});
