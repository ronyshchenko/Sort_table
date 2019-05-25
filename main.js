'use strict';
function makeSortable (table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (event) => {
    const th = event.target.closest('th');
    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const sortType = th.dataset.sortType;
    const rows = [...tbody.children];
    
    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[column].textContent;
      const valueB = rowB.cells[column].textContent;

      switch (sortType) {
        case 'number' :
          return (+valueA) - (+valueB);
        case 'string':
          return (valueA > valueB) ? 1 : -1;
        default:
          return 0;
      }
    });
    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}
makeSortable (
  document.querySelector('table')
);  
