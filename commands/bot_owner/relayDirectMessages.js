const a6_0x495b=['It\x20allows\x20you\x20to\x20toggle\x20Bastion\x27s\x20Direct\x20Message\x20Relay.\x20If\x20enabled,\x20Bastion\x20will\x20relay\x20all\x20direct\x20messages\x20to\x20the\x20bot\x20owners.','locale','document','Constants','exec','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language','return\x20/\x22\x20+\x20this\x20+\x20\x22/','relayDirectMessages','test','GREEN','relayDMs','guild','catch','apply','COLORS','client','getString','directMessagesRelayDisable','Direct\x20Messages\x20Relay','channel','constructor','exports','tag','save','send','findById','RED'];(function(_0x24f50e,_0x495bb3){const _0x3fcbb5=function(_0x1d3fa6){while(--_0x1d3fa6){_0x24f50e['push'](_0x24f50e['shift']());}},_0xb2ec58=function(){const _0x8a2851={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x34cee2,_0x7bba4f,_0x2c04ce,_0x26a599){_0x26a599=_0x26a599||{};let _0x3a56bb=_0x7bba4f+'='+_0x2c04ce,_0x44d602=0x0;for(let _0x364f02=0x0,_0x53107c=_0x34cee2['length'];_0x364f02<_0x53107c;_0x364f02++){const _0x1cd5f6=_0x34cee2[_0x364f02];_0x3a56bb+=';\x20'+_0x1cd5f6;const _0x3056a5=_0x34cee2[_0x1cd5f6];_0x34cee2['push'](_0x3056a5),_0x53107c=_0x34cee2['length'],_0x3056a5!==!![]&&(_0x3a56bb+='='+_0x3056a5);}_0x26a599['cookie']=_0x3a56bb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5409cf,_0x588c29){_0x5409cf=_0x5409cf||function(_0x209490){return _0x209490;};const _0x2e4e19=_0x5409cf(new RegExp('(?:^|;\x20)'+_0x588c29['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x52003c=function(_0x2e8cb2,_0xe04d46){_0x2e8cb2(++_0xe04d46);};return _0x52003c(_0x3fcbb5,_0x495bb3),_0x2e4e19?decodeURIComponent(_0x2e4e19[0x1]):undefined;}},_0x5dd096=function(){const _0x37b606=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x37b606['test'](_0x8a2851['removeCookie']['toString']());};_0x8a2851['updateCookie']=_0x5dd096;let _0x3b5582='';const _0x7761d=_0x8a2851['updateCookie']();if(!_0x7761d)_0x8a2851['setCookie'](['*'],'counter',0x1);else _0x7761d?_0x3b5582=_0x8a2851['getCookie'](null,'counter'):_0x8a2851['removeCookie']();};_0xb2ec58();}(a6_0x495b,0xff));const a6_0x3fcb=function(_0x24f50e,_0x495bb3){_0x24f50e=_0x24f50e-0x0;let _0x3fcbb5=a6_0x495b[_0x24f50e];return _0x3fcbb5;};const a6_0x2c04ce=function(){let _0x5efe2b=!![];return function(_0x43c7c1,_0xddc650){const _0x46abea=_0x5efe2b?function(){if(_0xddc650){const _0x14fee9=_0xddc650[a6_0x3fcb('0xb')](_0x43c7c1,arguments);return _0xddc650=null,_0x14fee9;}}:function(){};return _0x5efe2b=![],_0x46abea;};}(),a6_0x7bba4f=a6_0x2c04ce(this,function(){const _0x1b3f25=function(){const _0x398e24=_0x1b3f25[a6_0x3fcb('0x12')](a6_0x3fcb('0x4'))()['constructor'](a6_0x3fcb('0x2'));return!_0x398e24[a6_0x3fcb('0x6')](a6_0x7bba4f);};return _0x1b3f25();});a6_0x7bba4f();'use strict';const tesseract_1=require('@bastion/tesseract'),Config_1=require('../../models/Config');module[a6_0x3fcb('0x13')]=class RelayDirectMessages extends tesseract_1['Command']{constructor(){super(a6_0x3fcb('0x5'),{'description':a6_0x3fcb('0x19'),'triggers':[a6_0x3fcb('0x8')],'arguments':{},'scope':a6_0x3fcb('0x9'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a6_0x3fcb('0x1')]=async _0xc703a9=>{const _0x3e7184=await Config_1['default'][a6_0x3fcb('0x17')](this[a6_0x3fcb('0xd')]['user']['id']);_0x3e7184[a6_0x3fcb('0x5')]=_0x3e7184[a6_0x3fcb('0x5')]?undefined:!![],await _0x3e7184[a6_0x3fcb('0x15')](),await _0xc703a9[a6_0x3fcb('0x11')][a6_0x3fcb('0x16')]({'embed':{'color':_0x3e7184['relayDirectMessages']?tesseract_1[a6_0x3fcb('0x0')][a6_0x3fcb('0xc')][a6_0x3fcb('0x7')]:tesseract_1[a6_0x3fcb('0x0')][a6_0x3fcb('0xc')][a6_0x3fcb('0x18')],'title':a6_0x3fcb('0x10'),'description':this['client'][a6_0x3fcb('0x1a')][a6_0x3fcb('0xe')](_0xc703a9[a6_0x3fcb('0x9')][a6_0x3fcb('0x1b')][a6_0x3fcb('0x3')],'info',_0x3e7184[a6_0x3fcb('0x5')]?'directMessagesRelayEnable':a6_0x3fcb('0xf'),_0xc703a9['author'][a6_0x3fcb('0x14')])}})[a6_0x3fcb('0xa')](()=>{});};}};