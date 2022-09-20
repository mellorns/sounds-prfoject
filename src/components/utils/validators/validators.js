export const required = (value) => {
    if (value) return undefined
    return 'the field is required'

}


export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) return `The max length was exceeded`
        return undefined
    }
}