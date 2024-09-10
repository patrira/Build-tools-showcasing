import './styles/main.scss';  


async function loadBuildTools() {
  try {
    const response = await fetch('./data/tools.json');  
    const tools = await response.json();

    const toolsList = document.getElementById('tools-list');
    tools.forEach(tool => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${tool.name}</strong>: ${tool.description}`;
      toolsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error loading tools:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadBuildTools);


export { loadBuildTools };
