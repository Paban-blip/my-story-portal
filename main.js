
const projects = [
  {
    image: 'ostory.png',
    title: 'Whispers of the Hollow Forest',
    description: '3/5/2025',
    langEnglish:"In the quiet village of Dharamkot, there was a forest no one dared enter after sunset. They called it The Hollow. Children were warned, dogs refused to cross its border, and even the wind felt colder near its edge. It was cursed, they said—haunted by a spirit who was once a girl, betrayed by her own blood.But Meera didn’t believe in those stories.She was sixteen, curious, and tired of being caged in a house where silence echoed louder than love. Her parents, distant and secretive, never spoke of their past. But in an old trunk buried under cloth and dust, Meera once found a photo—of a girl who looked exactly like her, standing in The Hollow. On the back, in faded ink, was a name: Aanya.That night, drawn by a force she couldn’t explain, Meera stepped into the forest.The deeper she went, the quieter it became. Even the insects seemed to hold their breath. The moonlight barely touched the forest floor, and the trees stood like tall, twisted guardians. She walked for what felt like hours, until the path faded and the air grew thick with something… wrong.That’s when she heard it—soft whispering.Her name, spoken in gasps.“Meera… Meeraaa…”She turned. No one.She tried to retrace her steps, but the forest had changed. The trees had moved. The path was gone. And then she saw it—her.A girl, standing in the shadows.Identical to Meera. But her skin was pale like moonlight, and her eyes—oh god, her eyes—glowed like fireflies trapped in coal.“You shouldn’t have come here,” the ghost said.Meera stumbled back, trembling. “W-who are you?”The girl’s smile twisted. “I’m what you left behind. I’m what they buried. I’m you, if they had chosen differently.”Suddenly, images flashed in Meera’s mind—memories not her own. A child locked in a room. Screams. Fire. A forest soaked in blood. And the betrayal… her mother whispering, “It’s better this way.”Aanya was her twin.Meera’s heart pounded as the whispers grew louder—now a chorus, crying, mourning, accusing.“I waited,” Aanya hissed. “But now you’re here. And only one of us gets to leave.”Branches moved on their own. The forest itself seemed alive, siding with Aanya.Meera ran.The forest clawed at her. Roots tangled her legs. The whispers screamed. Behind her, Aanya glided like mist, glowing eyes locked on her prey.Just as Meera reached the edge of the woods, something pulled her ankle. She fell—hard. She turned around.Aanya was right there.They stared at each other, mirror images. Then Aanya reached out, touching Meera’s face.“I missed being real,” she whispered.In a flash of blinding white, everything stopped.—The next morning, villagers found Meera at the forest’s edge, shivering, silent, eyes vacant.She returned home.But she never spoke again.And some swear, if you look close enough into her eyes… they still glow."
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
    project.description='00/00/0000'
  }
});

const showcase = document.getElementById('showcase');
const newSection = document.getElementById('newSection');
const projectImage = document.getElementById('projectImage');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const slidBar = document.getElementById('default-carousel');
const backIcon = document.getElementById('backIcon');


projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition';

    card.innerHTML = `
     <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
     <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">${project.title}
           </h3>
        <div class='flex gap-2 items-center'>
          <i class="ri-upload-2-line text-yellow-500"></i>
           <p class="text-yellow-600">${project.description}
           </p>
       </div>
      </div>
    `;
    
      card.addEventListener('click',()=>{
         showcase.classList.add('hidden')
          slidBar.classList.add('hidden')
         newSection.classList.remove('hidden')
         projectImage.src = project.image;
          projectImage.alt = project.title;
         projectTitle.textContent = project.title;
          projectDescription.textContent = project.langEnglish;
      });
      
      backIcon.addEventListener('click', ()=>{
        showcase.classList.remove('hidden')
        slidBar.classList.remove('hidden')
        newSection.classList.add('hidden')
      });
      
      showcase.appendChild(card);
});
