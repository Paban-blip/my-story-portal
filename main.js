window.addEventListener('DOMContentLoaded', () => {
  // put ALL your current code inside this block




const projects = [
  {
    image: 'story.png',
    title: 'Whispers of the Hollow Forest',
    description: ''
  },
  {
    image: 'second.png',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
  {
    image: '',
    title: '',
    description: ''
  },
{
  image: '',
  title: '',
  description: ''
},
{
  image: '',
  title: '',
  description: ''
}
];


projects.forEach(project => {
  if (project.title === '') {
    project.title = 'Coming Soon...';
  }
  if (project.image === '') {
    project.image='soon.jpeg'
  }
  if (project.description === '') {
    project.description='Love to see your patience..:)'
  }
});

const showcase = document.getElementById('showcase');
const newSection = document.getElementById('newSection');
const projectImage = document.getElementById('projectImage');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const slidBar = document.getElementById('default-carousel');


projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition';

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-gray-600">${project.description}</p>
    </div>
  `;

card.addEventListener('click',()=>{
  showcase.classList.add('hidden')
  slidBar.classList.add('hidden')
  newSection.classList.remove('hidden')
  
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  
});

  showcase.appendChild(card);
});

});
