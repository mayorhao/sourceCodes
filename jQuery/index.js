/**
 * 实现jQuery实例，jQuery实例属性为
 * {
 *  0：element,
 *  1:element
 *  ....
 *  selecor:selector,
 *  length:length of elements,
 *  preveObject:??,
 *  context:arguments of context with the document as default
 * }
 */

window.jQuery=window.$=function(selector,context){
    return new F(selector,context);
}
function F(selector,context){
    this.selector=selector;
    this.context=context || document;
    let _elements=Array.prototype.slice.call(context?context.querySelectorAll(selector):document.querySelectorAll(selector));
    let _len=_elements.length;
    if(_len<=0) return {};
    else{
        for(let i=0;i<_len;i++){
            this[i]=_elements[i];
        }
    }
    return this; 
}
F.prototype.ajax=function(){
//plain javascript to implement ajax request
};
F.prototype.extend=function(){
//code here to implement deep and shallow copy
};
$.fn=F.prototype;
$.fn.ajax=function(){

}
$.fn.extend=function(){

}
$.fn=F.prototype=$.init.prototype;