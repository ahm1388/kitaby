
export default (groups = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'FETCH_GROUP':
            return { ...groups, group: action.payload }
        case 'CREATE':
            return [...groups, action.payload]
        case 'COMMENT':
             return {...groups, groups: groups.map((group) => {
                    if (group._id === action.payload._id) return action.payload
                    return group
            })}
        case 'LIKE':
        case 'DISLIKE':
            return groups.map((group) => group._id === action.payload._id ? action.payload : group)
        default:
            return groups
    }
}