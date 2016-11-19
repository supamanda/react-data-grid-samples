import * as actions from './dataActions'

describe('actions', () => {
    it('should assert true', () => {
        expect(true).toEqual(true)
    })
    it('should create an action to fetch data', () => {
        const expectedAction = {
            type: 'FETCH_DATA',
            payload: {
            }
        }
        expect(actions.fetchData()).toEqual(expectedAction)
    })
})