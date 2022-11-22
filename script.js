function Project(title, technologies, date, thumbnail, link) {
    this.projectTitle = title;
    this.projectTechnologies = technologies;
    this.projectDate = date;
    this.projectThumbnail = thumbnail;
    this.projectLink = link;
}

// Project list:
const CV = new Project('Curriculum Vitae', ['HTML', 'CSS'], '221112', 'cv-thumbnail.jpg', 'https://mateuszrymar.github.io/CV/');
const techStore = new Project('Tech Store', ['HTML', 'CSS'], '221112', 'tech-store-thumbnail.jpg', 'https://mateuszrymar.github.io/Tech-Store/');
const gourmetBurgers = new Project('Gourmet Burgers Homepage', ['HTML', 'CSS', 'bootstrap'], '221112', 'gourmet-burgers-thumbnail.jpg', 'https://mateuszrymar.github.io/Gourmet-burgers/');
const dragonSlayer = new Project('Dragon Slayer Game', ['HTML', 'CSS'], '221112', 'dragon-slayer-thumbnail.jpg', 'https://mateuszrymar.github.io/dragon-slayer/');
const emCalculator = new Project('em Calculator', ['HTML', 'CSS', 'JavaScript'], '221112', 'em-calculator-thumbnail.jpg', 'https://mateuszrymar.github.io/em-calculator/');
const shapeMatch = new Project('Shape Match Game', ['HTML', 'CSS', 'JavaScript'], '221112', 'shape-match-thumbnail.jpg', 'https://mateuszrymar.github.io/shape-match-game/');

const projectList = [
    CV,
    techStore,
    gourmetBurgers,
    dragonSlayer,
    emCalculator,
    shapeMatch
]


var tile1 = projectList[1].projectThumbnail;

var projectGallery = '';

for (var i=0; i < projectList.length; i++) {
    projectGallery += 
    '<div class="gallery-item">' +
        '<span id="project-title">' + projectList[i].projectTitle + '</span>' +
        '<a href ="' + projectList[i].projectLink + '">' +
        '<img class="project-image" src="images/' + projectList[i].projectThumbnail + '">' +
        '</a>' +
    '</div>';
}

console.log(projectGallery);

document.getElementById('inner-container').insertAdjacentHTML('beforeend', projectGallery);




// document.getElementById('inner-container').appendChild(clone);
// console.log(node);

// var galleryItems = document.getElementsByClassName('gallery-item');
// var lastGalleryItemIndex = galleryItems.length - 1;
// var lastGalleryItem = '';

// const firstImageNode = document.getElementById('first-image').innerHTML;
// console.log(firstImageNode);



// .innerHTML = imageList;

// console.log(lastGalleryItem);

// let thumbnailImages = ;

