import _ from 'lodash'

export default function reducer(state={
    data: newData(),
}, action) {

    switch (action.type) {
        case "FETCH_DATA": {
            let obj = Object.assign({}, 
                state, 
                {
                    data: newData()
                }
            );
            return obj;
        }
    }
    return state;
}

function newData() {
    const numberOfColumns = Math.ceil(Math.random() * 10)
    const numberOfRows = Math.ceil(Math.random() * 10)

    const data = []
    for (let i = 0; i < numberOfRows; i++) {
        let entry = {}
        for (let j = 0; j < numberOfColumns; j++) { 
            entry['column'+j] = `col_${j}_entry_${i}`
        }
        data.push(entry)
    }
    return data;
}