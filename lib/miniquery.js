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
