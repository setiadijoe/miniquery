class SweetSelector {
    constructor() {
        
    }

    static select(params){
        if (params.charAt(0)==='#'){
            return this.selectById(params)
        } else if (params.charAt(0) === '.') {
            return this.selectByClassName(params)
        } else {
            return this.selectByTagName(params)
        }
    }

    static selectById(params){
        // console.log('Ini ID');
       return document.querySelector(params)
    }

    static selectByClassName(params){
        // console.log('Ini Class');
        return document.querySelector(params)

    }

    static selectByTagName(params){
        // console.log('Ini TagName');
        return document.querySelector(params)
    }
}

class DOM {
    static hide(params){
        let items = document.querySelectorAll(params)
        items.forEach(x=>{
            x.style.display = "none"
            // console.log(x);
        })
    }

    static show(params){
        let items = document.querySelectorAll(params)
        items.forEach(x=>{
            x.style.display = ""
            // x.style.color = "yellow"
        })
    }

    static removeClass(params, style){
        let items = document.querySelectorAll(params)
        items.forEach(x=>{
            x.classList.remove(params, style)
            // console.log(x);
        })
    }

    static addClass(params, style){
        let items = document.querySelectorAll(params, style)
        items.forEach(x=>{
            x.classList.add(style)
        })
    }
}

class EventDispatcher{
    static on(params, style, cb){
        if (params === '.klass' && style === 'click') {
            cb()
        }
    }
}

class AjaxWrapper{
    static request(params){
        let Request = new XMLHttpRequest()
        Request.addEventListener("load", reqListener)
        Request.open(params.type, params.url)
        Request.send()
    }
}