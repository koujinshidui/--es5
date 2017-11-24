
var Validator = (function(window) {
    var yerui={};
    Validator.prototype.all=function (){
        var  errorMsg,self=this.cache;
        for (var k in self) {
            if(this.ForChcheList(k)){return '校检没有通过'};
        }
        return '校检通过';
    }
    
    Validator.prototype.clearCache=function(){
        for(var i=0,length;length=["detection","objDom","rule","ruleName"][i++];){this[length]=null; }
    }
// 检测模块 js面向接口检测模块是个累赘，保证传参正确情况下可删除.
    Validator.prototype.inspect=function(objParam){
        this.inspectFor(objParam,function(obj,i){
            var  domName=i;
            this.inspectFor(obj,function (ruleObj,ruleName){
                if(!b[ruleName]){b[ruleName]=true}else{ throw new Error(domName+"下不能有重复的rule名字") }

                if(!ruleObj["rule"]){ VDError(domName+"下的"+ruleName+"下的必须指定rule名")   }
                this.inspectstrategy[typeof ruleObj["rule"]](ruleObj,domName,ruleName);
            },"dom")
        })
    }
    Validator.prototype.inspectstrategy={
        "string":function (obj,domName,ruleName){
            var a=Object.keys(obj).length;
            if(!acquiescentstragetegiesObj[obj["rule"]]){ VDError(domName+"下的"+ruleName+"下的"+obj["rule"]+"配置错误,原生规则没该方法,请看文档")};
            if(obj["returnMessage"]){if(a>2)VD(domName+"下的"+ruleName+"下的"+"参数超标"+"请看文档")}
            else{if(a>1)VD(domName+"下的"+"参数超标"+"请看文档")};
        },
        "function":function(){
            return "haha";
        },
        "object":function(obj,domName,ruleName){
            var a,b=obj["rule"];
            if(!b["rule"]){DError(domName+"下的"+ruleName+"下的"+"必须一个名为rule的参数对象,请看文档配置规则")}
            a=Object.keys(b).length;
            if(a==3||a==2){
                if(a==2)
                {
                    duty2()
                }
                if(a==3)
                {
                    duty2();
                    if(!b["returnMessage"]){VDError("3参数下的"+domName+"下的rule对象必须配置returnMessage属性返回信息名,请看文档配置规则")}
                }
            }else{
                DError(domName+"下的"+ruleName+"下的"+"参数配置异常,请看文档配置规则")
            }
            function duty2(){
                if(!acquiescentstragetegiesObj[b["rule"]])  { VDError(domName+"下的"+b["rule"]+"配置错误,原生规则没该方法,请看文档") };
                if(/\s*/.test(b["detection"])){ }else if(!b["detection"]){VDError(domName+"下的rule对象必须配置etection属性配置规则检测名,请看文档配置规则")}
            }
        },
    };
    function VDError(message,eorrorName){
        throw new Error(message);
    };
    Validator.prototype.inspectFor=function(obj,fn,b){
        for(var i in  obj){
            if(i==b){}
            else{fn.call(this,obj[i],i)}
        }
    };
// 检测模块
    
// one模块 单个检测触发模块
    Validator.prototype.one=function(obj,type){
        var a=yerui.objParam;if(!type){type="blur"}
        yerui.one={};//保存参数one列表
        yerui.one["one"]=obj;
        yerui.one["type"]=type;
        yerui.one["fn"]={};
        for(var i=0,length;length=obj[i++];) {
            (function (length, self) {
                self.listener(type, a[length]["dom"]["valueDom"], one);
                function one() {
                    self.ForChcheList(length);
                }

                yerui.one["fn"][length] = one;
            }(length, this));
        }
    }

    // one模块 单个检测触发模块
    Validator.prototype.cm=function(obj,type){
        var a=yerui.objParam;if(!type){type="focus"}
        yerui.cm={};
        yerui.cm["cm"]=obj;
        yerui.cm["type"]=type;
        yerui.cm["fn"]={};
        for(var i=0,length;length=obj[i++];){
            (function(length,self){
                self.listener(type,a[length]["dom"]["valueDom"],cm);
                function  cm(){
                    var valueDom;
                    valueDom=a[length]["dom"]["errorMessageDom"]
                    domElement.textSet(valueDom,"");
                }
                yerui.cm["fn"][length]=cm;
            }(length,this))
        }
    }
    Validator.prototype.ForChcheList=function (k,errorMsg){
        errorMsg =this.cache[k].call(this);
        if(errorMsg){return  domElement["returnErrorMessageDom"].call(this,errorMsg);
        }
    };
    Validator.prototype.listener=function(type,obj,fn){
        Validator.prototype.listenerFor(type,obj,fn,"listener","addEventListener","attachEvent")
    };
    Validator.prototype.removeListener=function (type,obj,fn) {
        Validator.prototype.listenerFor(type,obj,fn,"removeListener","removeEventListener","detachEvent")
    };
    Validator.prototype.listenerFor=function(type,obj,fn,ValidatorPrototypeName,chrom,ie){
        if(obj[chrom]){
            Validator.prototype[ValidatorPrototypeName]=function(type,obj,fn){ obj[chrom](type,fn)}
        }
        else{
            Validator.prototype[ValidatorPrototypeName]=function(type,obj,fn){obj[ie]("on"+type,fn) }
        }
        Validator.prototype[ValidatorPrototypeName](type,obj,fn);
    };
    Validator.prototype.clearEvent=function(array,type,domSon,handlerName){
        for (var i =0,name;name=array[i++];) {
            this.removeListener(type,yerui.objParam[name]["dom"][domSon],handlerName[name]);
        }
    };
    Validator.prototype.add = function(objParam) {
        if(this.cache){
            Validator.prototype.clearEvent(yerui.one["one"],yerui.one["type"],"valueDom",yerui.one["fn"])
            Validator.prototype.clearEvent(yerui.cm["cm"],yerui.cm["type"],"valueDom",yerui.cm["fn"])
        }
        this.cache={};
        yerui.objParam=objParam;
        for (var i in objParam) {
            (function (obj,i) {
                    this.cache[i]=yeruiAdd;
                    function yeruiAdd() {
                        var returnMEssage;
                        this["detection"]=i;
                        this.objDom= obj["dom"];
                        for (var k in obj){
                            if(k=="dom")continue;
                            this.rule=obj[k];
                            returnMEssage =this.ruleFind();
                            if (returnMEssage)return returnMEssage;
                        }
                    }
                }
            ).call(this,objParam[i],i)
        }
        Validator.prototype.inspect(yerui.objParam);
    };
    Validator.prototype.ruleFind=function (obj,rule) {return this.protogenesisAndcustom[typeof this.rule["rule"]].call(this);}; //
    Validator.prototype.protogenesisAndcustom={
        "string": function (){
            var reTurnMssage,Dom,rule=this.rule,Dom=this.objDom;
            reTurnMssage=rule["returnMessage"];
            this["ruleName"]=rule["rule"];
            return reTurnMssage?
                acquiescentstragetegies[rule["rule"]](
                    domElement.valueDom(Dom["valueDom"]),
                    acquiescentstragetegiesObj[
                        ["rule"]]["rule"],
                    reTurnMssage
                ):
                acquiescentstragetegies[rule["rule"]](
                    domElement.valueDom(Dom["valueDom"]),
                    acquiescentstragetegiesObj[rule["rule"]]["rule"],
                    acquiescentstragetegiesObj[rule["rule"]]["returnMessage"]
                )
        },
        "object":function (){
            var rule,Dom,regulation,ruleVlue,reTurnMssage;
            rule=this.rule,Dom=this.objDom;
            regulation=rule["rule"],ruleVlue=regulation["detection"],reTurnMssage=regulation["returnMessage"];

            this["ruleName"]=regulation["rule"];
            return reTurnMssage?
                acquiescentstragetegies[this["ruleName"]](
                    domElement.valueDom(Dom["valueDom"]),
                    ruleVlue,
                    reTurnMssage
                ):
                acquiescentstragetegies[this["ruleName"]](
                    domElement.valueDom(Dom["valueDom"]),
                    ruleVlue,
                    acquiescentstragetegiesObj[regulation["returnMessage"]]
                )
        },

        "function":function(){ return this.rule["rule"]()},
    };
    Validator.prototype.getAndSet=function(fn1,fn2){
        if(fn1){domElement.textGet=fn1}
        if(fn2){domElement.textSet=fn2}
    };
    var domElement={
        valueDom:function(dom){
            var a=domElement.textGet(dom);
            if(typeof a =="string"){return a }else{
                VDError("textGet方法没有返回一个希望的数值,请检查参数函数的方法,确保返回一个字符串")
            };
        },
        returnErrorMessageDom:function(errorMsg){
            domElement.textSet(this.objDom.errorMessageDom,errorMsg);
            this.clearCache();
            return true;
        },
        textGet:function(dom){
            return  (dom["value"]===undefined)? dom.innerText:dom.value;
        },
        textSet:function(dom,errorMsg){

            return (dom["textContent"]===undefined)? dom["innerText"]=errorMsg:dom["textContent"]=errorMsg; //textContent
        },}
    var acquiescentstragetegiesObj={// 默认的rules配置参数
        minLength:{
            "rule":"10",
            "returnMessage":"内容最少不能少于10位",
        },
        maxLength:{
            "rule":"20",
            "returnMessage":"内容最多不能多于20位",
        },
        isMobile:{
            "rule":/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,//  (^1[3|5|8][0-9]{9}$)
            "returnMessage":"手机格式不正确",
        },
        mail:{
            "rule":/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            "returnMessage":"邮件格式不正确"},
        user: {
            "rule":/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
            "returnMessage":"账号只允许字母开头，允许5-16字节，允许字母数字下划线",
        },
        passWord:{
            "rule":/^[a-zA-Z]\w{5,17}$/,
            //强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
            "returnMessage":"密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)",
        },
        isNoequal:{
            "rule":"",
            "returnMessage":"内容不能相等"
        },

    }
    var acquiescentstragetegies = {
        isMobile: function( value, regexp,errorMsg) {
            return acquiescentstragetegies["regExp"](value, regexp,errorMsg);
        },
        mail: function( value,regexp,errorMsg) {
            return  acquiescentstragetegies["regExp"](value, regexp,errorMsg);
        },
        user: function( value,regexp,errorMsg) {
            return acquiescentstragetegies["regExp"](value, regexp,errorMsg);
        },
        passWord: function( value,regexp,errorMsg) {
            return acquiescentstragetegies["regExp"](value, regexp,errorMsg);
        },
        regExp:function (value,regexp,errorMsg) {
            if(!regexp.test(value)){  return errorMsg; }
        },
        minLength: function(value,rule,errorMsg) {
            if ( value.length < rule ){ return errorMsg; }
        },
        maxLength: function(value,rule,errorMsg) {
            if ( value.length >rule ){ return errorMsg; }
        },
        isNoequal: function( value,rule,errorMsg) {
            if (value == rule ){ return errorMsg; }
        },
    }

    function Validator(){}
    return  Validator;
})(window)

// function decker(f1,f2){
//     var self=this;
//     return function(){
//         if(f1.apply(self,arguments)){
//             f2.apply(self,arguments)
//         }
//     }
// };  
//
//     