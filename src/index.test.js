import { loadBuildTools } from './index';  


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { name: 'Webpack', description: 'Module bundler' },
      { name: 'Gulp', description: 'Task runner' }
    ])
  })
);

document.body.innerHTML = `
  <ul id="tools-list"></ul>
`;

test('loadBuildTools should load and display tools', async () => {
  
  await loadBuildTools();

  
  const toolsList = document.getElementById('tools-list');
  expect(toolsList.children.length).toBe(2);

  
  expect(toolsList.children[0].textContent).toContain('Webpack');

  
  expect(toolsList.children[1].textContent).toContain('Gulp');
});
