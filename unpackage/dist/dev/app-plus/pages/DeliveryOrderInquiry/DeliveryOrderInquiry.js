
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background: #e7e7e7; }\n",],undefined,{path:"./pages/DeliveryOrderInquiry/DeliveryOrderInquiry.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/DeliveryOrderInquiry/DeliveryOrderInquiry.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      