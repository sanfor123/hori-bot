const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFilteredd = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilterr = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 240000) 
}

module.exports = {
    isFilteredd,
    addFilterr
}