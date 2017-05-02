import _ from 'lodash'

export default function reducer(state={
    data: {
        one: createNewData('one'),
        two: createNewData('two'),
    }
}, action) {

    switch (action.type) {
        case "FETCH_DATA": {
            let updatedData = Object.assign({}, state.data, {});
            updatedData[action.payload.key] = createNewData(action.payload.key);
            let obj = Object.assign({}, 
                state, 
                {
                    data: updatedData
                }
            );
            return obj;
        }
    }
    return state;
}

function createNewData(key) {
    const numberOfColumns = Math.ceil(Math.random() * 10)
    const numberOfRows = Math.ceil(Math.random() * 10)

    const data = []
    for (let i = 0; i < numberOfRows; i++) {
        let entry = {}
        for (let j = 0; j < numberOfColumns; j++) { 
            entry['column'+j] = `${key}_col_${j}_entry_${i}`
        }
        data.push(entry)
    }
    return data;
}