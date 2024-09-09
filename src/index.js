import _ from 'lodash';  // Import lodash for utilities
import './styles/main.scss';  


const loadBuildTools = async () => {
  try {
    const response = await fetch('./data/tools.json');
    const tools = await response.json();

    
    const sortedTools = _.sortBy(tools, ['name']);

    const toolsList = document.getElementById('tools-list');
    sortedTools.forEach((tool) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${tool.name}</strong>: ${tool.description}`;
      toolsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error loading tools:', error);
  }
};



document.addEventListener('DOMContentLoaded', loadBuildTools);
export { loadBuildTools };

