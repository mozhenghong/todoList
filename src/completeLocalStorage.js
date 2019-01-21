const yyy = "complete"
export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(yyy) || '[]')
    },
    save(items){
        window.localStorage.setItem(yyy,JSON.stringify(items))
    }
}