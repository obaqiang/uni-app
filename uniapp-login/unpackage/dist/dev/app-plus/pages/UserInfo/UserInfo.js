
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background: #E7E7E7; }\n.",[1],"user_info_list { border: ",[0,1]," solid #666666; width: ",[0,700],"; margin: ",[0,20]," ",[0,25],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,72],"; }\n.",[1],"user_info_list wx-text{ margin-left: ",[0,30],"; }\n.",[1],"user_info_list .",[1],"_input{ margin-left: ",[0,30],"; }\n",],undefined,{path:"./pages/UserInfo/UserInfo.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/UserInfo/UserInfo.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      