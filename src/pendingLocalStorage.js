const xxx = "pending"
export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(xxx) || '[]')
    },
    save(items){
        window.localStorage.setItem(xxx,JSON.stringify(items))
    }
}