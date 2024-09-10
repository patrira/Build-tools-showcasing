import './styles/main.scss';  


async function loadBuildTools() {
  const response = await fetch('./data/tools.json');
  const tools = await response.json();

  const toolsList = document.getElementById('tools-list');
  tools.forEach(tool => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${tool.name}</strong>: ${tool.description}`;
    toolsList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', loadBuildTools);
