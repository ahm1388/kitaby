export default (groups = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return groups
        case 'CREATE':
            return groups
        default:
            return groups
    }
}