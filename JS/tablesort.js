function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim();
        const bColText = b
            .querySelector(`td:nth-child(${column + 1})`)
            .textContent.trim();

        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    tbody.append(...sortedRows);

    table
        .querySelectorAll('th')
        .forEach((th) => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table
        .querySelector(`th:nth-child(${ column + 1 })`)
        .classList.toggle('th-sort-asc', asc);
    table
        .querySelector(`th:nth-child(${ column + 1 })`)
        .classList.toggle('th-sort-desc', !asc);
}

document.querySelectorAll('.table-sortable th').forEach((headerCell) => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children,headerCell)
        const currentIsAscending = headerCell.classList.contains('th-sort-asc')

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending)
    });
});
