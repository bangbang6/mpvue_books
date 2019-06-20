import * as types from "./mutation-type.js"

const mutations = {
    [types.ADDBOOK](state,bookInfo){
        state.bookInfo.push(bookInfo)
    }
}

export default mutations