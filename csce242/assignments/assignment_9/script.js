class Bird {
    constructor(name, pic, size, lifespan, food, habitat, fact) {
        this.name = name;
        this.pic = pic;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    get section() {
        const section = document.createElement("section");
        section.classList.add("bird-box");
        
        const h3 = document.createElement("h3");
        h3.innerText = this.name;
        section.append(h3);
        
        section.append(this.picture(this.pic));

        section.onclick = () => {
            this.showBirdModal();   
        };
    
        return section;
    }

    get expandedSection() {
        const birdDiv = document.createElement("div");
        birdDiv.classList.add("bird-expanded");

        const infoDiv = document.createElement("div");
        infoDiv.append(this.paragraph("Size", this.size));
        infoDiv.append(this.paragraph("Lifespan", this.lifespan));
        infoDiv.append(this.paragraph("Food", this.food));
        infoDiv.append(this.paragraph("Habitat", this.habitat));
        infoDiv.append(this.paragraph("Fact", this.fact));
        this.infoDiv = infoDiv;
        
        birdDiv.append(this.infoDiv);
        birdDiv.append(this.picture(this.pic));

        return birdDiv;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }

    showBirdModal() {
        const modalTitle = document.getElementById("modal-title");
        const modalContent = document.getElementById("modal-content");

        modalTitle.innerText = this.name;
        modalContent.innerHTML = '';
        modalContent.append(this.expandedSection);

        document.getElementById("bird-modal").style.display = 'block';
    }
}

const birds = [];
birds.push(new Bird("Finch", "finch.jpg", "10-27cm", "15-20 years", "plant seeds","dry habitats", "Finches are very social birds"));
birds.push(new Bird('Heron', "heron.jpg", "91-137cm", "around 15 years", "fish","marine coastal ecosystems", "Herons are wading birds, they feed while standing in shallow water"));
birds.push(new Bird("Owl", "owl.jpg", "13-70cm", "20-30 years", "small animals; mice, lizards, etc.","deserts, prairies, etc.", "Owls have 14 neck vertebrae"));
birds.push(new Bird("Toucan", "toucan.jpg", "29-63cm", "12-20 years", "fruits, small animals", "rainforests", "Toucans are known for their large, colorful bills"));

const displayBirds = () => {
    const birdContainer = document.getElementById("bird-container");
    birds.forEach(bird => {
        birdContainer.append(bird.section);
    });
};

displayBirds();