"use strict";function asyncGeneratorStep(t,n,e,r,o,a,c){try{var s=t[a](c),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(s){return function(){var t=this,c=arguments;return new Promise(function(n,e){var r=s.apply(t,c);function o(t){asyncGeneratorStep(r,n,e,o,a,"next",t)}function a(t){asyncGeneratorStep(r,n,e,o,a,"throw",t)}o(void 0)})}}function test(){return _test.apply(this,arguments)}function _test(){return(_test=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{then:function(t){setTimeout(function(){console.log("done"),t()},500)}};case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}test();var obj={arrow:function(){console.log("arrow")}};obj.arrow();