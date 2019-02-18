
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"pwd_list { line-height: ",[0,50]," !important; }\n",],undefined,{path:"./pages/changePwd/changePwd.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/changePwd/changePwd.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      