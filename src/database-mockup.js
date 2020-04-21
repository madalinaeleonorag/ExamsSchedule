export function get() {
    return Promise.resolve({
        data: [
            {
                anUniversitar: '2019-2020',
                sesiune: 'iarna',
                an: 'I',
                sectia: 'Informatica',
                locuri: 30,
                materia: 'POO',
                profesor: 'Ion Lungu'
            },
            {
                anUniversitar: '2019-2020',
                sesiune: 'vara',
                an: 'III',
                sectia: 'Statistica',
                locuri: 30,
                materia: 'Macroeconomie',
                profesor: 'Marilena Alina'
            }
        ]
    });
}