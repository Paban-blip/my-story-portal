const projects = [
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

  showcase.appendChild(card);
});