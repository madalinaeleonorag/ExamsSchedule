export function get() {
    return Promise.resolve({
        data: [
            {
                id: 1,
                anUniversitar: '2019-2020',
                sesiune: 'iarna',
                anStudiu: 'I',
                sectia: 'Informatica',
                locuri: 30,
                materia: 'POO',
                profesor: 'Ion Lungu',
                date: '02-02-2019'
            },
            {
                id: 2,
                anUniversitar: '2019-2020',
                sesiune: 'vara',
                anStudiu: 'III',
                sectia: 'Statistica',
                locuri: 30,
                materia: 'Macroeconomie',
                profesor: 'Marilena Alina',
                date: '02-02-2019'
            }
        ]
    });
}