const options = {
    enableNestedDataAccess: '.',
    filterType: 'checkbox',
    textLabels: {
        body: {
            noMatch: 'No hi ha entrades',
            toolTip: 'Ordenar',
            columnHeaderTooltip: (column) => `${'Ordenat per'} ${column.label}`,
        },
        pagination: {
            next: 'Següent pàgina',
            previous: 'Pàgina anterior',
            rowsPerPage: 'Files per pàgina:',
            displayRows: 'de', // 1-10 of 30
        },
        toolbar: {
            search: 'Cercar',
            downloadCsv: 'Descarregar CSV',
            print: 'Imprimir',
            viewColumns: 'Veure columnes',
            filterTable: 'Filtrar taula',
        },
        filter: {
            title: 'FILTRES',
            reset: 'resetejar',
            all: 'Tots',
        },
        viewColumns: {
            title: 'Mostrar columnes',
        },
        selectedRows: {
            text: 'Fila/es eliminades',
            delete: 'Eliminar',
        },
        selectableRows: false,
    },
};

export { options };
