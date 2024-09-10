import './styles/main.scss';  // Import Sass file

// Function to load build tools from JSON file
async function loadBuildTools() {
  try {
    const response = await fetch('./data/tools.json');  // Fetch tools.json
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
