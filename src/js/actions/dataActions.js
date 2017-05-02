export function fetchData(key) {
    return {
        type: "FETCH_DATA",
        payload: {
            key
        }
    }
}