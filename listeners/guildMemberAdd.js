const a163_0x4a84=['exports','greeting','partial','createdAt','catch','guild','then','Greetings!','_id','test','Member\x20Type','forUsers','length','parse','@bastion/tesseract','deletable','guildMemberAdd','autoAssignable','send','fetch','handleGreetings','Human','exec','../assets/greetings.json','../utils/embeds','Member','delete','random','Listener','Bot','tag','joinedTimestamp','bot','get','filter','handleAutoRoles','timeout','concat','channelId','map','Joined\x20Discord','getDocument','constructor','createLog','cache','channels','user','default','apply','LISTENER_MODE','message','../models/Role','forBots','../utils/variables'];(function(_0x149be4,_0x4a842e){const _0x1397db=function(_0x300087){while(--_0x300087){_0x149be4['push'](_0x149be4['shift']());}},_0x14576c=function(){const _0x2c503b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa1962d,_0x426867,_0x1b84ce,_0xd44a34){_0xd44a34=_0xd44a34||{};let _0x459f5f=_0x426867+'='+_0x1b84ce,_0x596c2e=0x0;for(let _0x4e5ddd=0x0,_0xb227e=_0xa1962d['length'];_0x4e5ddd<_0xb227e;_0x4e5ddd++){const _0x545bf8=_0xa1962d[_0x4e5ddd];_0x459f5f+=';\x20'+_0x545bf8;const _0x288364=_0xa1962d[_0x545bf8];_0xa1962d['push'](_0x288364),_0xb227e=_0xa1962d['length'],_0x288364!==!![]&&(_0x459f5f+='='+_0x288364);}_0xd44a34['cookie']=_0x459f5f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x929654,_0x1d000b){_0x929654=_0x929654||function(_0xe53f1a){return _0xe53f1a;};const _0x2c7b02=_0x929654(new RegExp('(?:^|;\x20)'+_0x1d000b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d2fa8=function(_0x94d12b,_0x105683){_0x94d12b(++_0x105683);};return _0x2d2fa8(_0x1397db,_0x4a842e),_0x2c7b02?decodeURIComponent(_0x2c7b02[0x1]):undefined;}},_0x154f19=function(){const _0x4eb6d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4eb6d0['test'](_0x2c503b['removeCookie']['toString']());};_0x2c503b['updateCookie']=_0x154f19;let _0x459848='';const _0x5a40e9=_0x2c503b['updateCookie']();if(!_0x5a40e9)_0x2c503b['setCookie'](['*'],'counter',0x1);else _0x5a40e9?_0x459848=_0x2c503b['getCookie'](null,'counter'):_0x2c503b['removeCookie']();};_0x14576c();}(a163_0x4a84,0xba));const a163_0x1397=function(_0x149be4,_0x4a842e){_0x149be4=_0x149be4-0x0;let _0x1397db=a163_0x4a84[_0x149be4];return _0x1397db;};const a163_0x1b84ce=function(){let _0x1856e5=!![];return function(_0x56cae1,_0x45e66e){const _0x21bc0d=_0x1856e5?function(){if(_0x45e66e){const _0x55180d=_0x45e66e[a163_0x1397('0x18')](_0x56cae1,arguments);return _0x45e66e=null,_0x55180d;}}:function(){};return _0x1856e5=![],_0x21bc0d;};}(),a163_0x426867=a163_0x1b84ce(this,function(){const _0x141a06=function(){const _0x52f49c=_0x141a06['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a163_0x1397('0x12')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x52f49c[a163_0x1397('0x27')](a163_0x426867);};return _0x141a06();});a163_0x426867();'use strict';const tesseract_1=require(a163_0x1397('0x2c')),Role_1=require(a163_0x1397('0x1b')),embeds=require(a163_0x1397('0x0')),variables=require(a163_0x1397('0x1d')),greetings=require(a163_0x1397('0x35'));module[a163_0x1397('0x1e')]=class GuildMemberAddListener extends tesseract_1[a163_0x1397('0x4')]{constructor(){super('guildMemberAdd',{'mode':tesseract_1['Constants'][a163_0x1397('0x19')]['ON']}),this[a163_0x1397('0xb')]=async(_0x4c2c40,_0x3fa6c5)=>{const _0x5136f1=await Role_1[a163_0x1397('0x17')]['find']({'guild':_0x3fa6c5['id'],'autoAssignable':{'$exists':!![]}}),_0x339a2b=_0x5136f1['filter'](_0x111a51=>_0x111a51[a163_0x1397('0x2f')]&&_0x111a51[a163_0x1397('0x2f')][a163_0x1397('0x1c')])[a163_0x1397('0xf')](_0x3c811e=>_0x3c811e[a163_0x1397('0x26')]),_0x38e346=_0x5136f1['filter'](_0x1d3002=>_0x1d3002[a163_0x1397('0x2f')]&&_0x1d3002['autoAssignable'][a163_0x1397('0x29')])[a163_0x1397('0xf')](_0x4d6d9d=>_0x4d6d9d[a163_0x1397('0x26')]),_0x3b09ee=_0x5136f1[a163_0x1397('0xa')](_0x57dee6=>_0x57dee6[a163_0x1397('0x2f')]&&(Number(_0x57dee6[a163_0x1397('0x2f')][a163_0x1397('0x1c')])^Number(_0x57dee6[a163_0x1397('0x2f')]['forUsers']))===0x0)[a163_0x1397('0xf')](_0x281e05=>_0x281e05['_id']);(_0x339a2b[a163_0x1397('0x2a')]||_0x38e346['length']||_0x3b09ee[a163_0x1397('0x2a')])&&_0x4c2c40['roles']['add'](_0x3b09ee[a163_0x1397('0xd')](_0x4c2c40['user'][a163_0x1397('0x8')]?_0x339a2b:_0x38e346),'Auto\x20added\x20via\x20Auto\x20Roles');},this[a163_0x1397('0x32')]=(_0xed3b6f,_0x4206e1)=>{if(!_0x4206e1[a163_0x1397('0x1f')]||!_0x4206e1[a163_0x1397('0x1f')]['channelId'])return;if(!_0xed3b6f[a163_0x1397('0x23')][a163_0x1397('0x15')]['cache']['has'](_0x4206e1[a163_0x1397('0x1f')][a163_0x1397('0xe')]))return;const _0x3e80e6=_0xed3b6f['guild']['channels'][a163_0x1397('0x14')][a163_0x1397('0x9')](_0x4206e1['greeting'][a163_0x1397('0xe')]),_0x2bf76c=embeds['generateEmbed'](_0x4206e1[a163_0x1397('0x1f')][a163_0x1397('0x1a')]?_0x4206e1[a163_0x1397('0x1f')][a163_0x1397('0x1a')]:greetings[Math['floor'](Math[a163_0x1397('0x3')]()*greetings[a163_0x1397('0x2a')])]);_0x3e80e6[a163_0x1397('0x30')]({'embed':{...JSON[a163_0x1397('0x2b')](variables['replaceMemberVariables'](JSON['stringify'](_0x2bf76c),_0xed3b6f)),'footer':{'text':a163_0x1397('0x25')}}})[a163_0x1397('0x24')](_0x585590=>{_0x4206e1[a163_0x1397('0x1f')][a163_0x1397('0xc')]&&_0x585590[a163_0x1397('0x2d')]&&_0x585590[a163_0x1397('0x2')]({'timeout':_0x4206e1['greeting'][a163_0x1397('0xc')]*0xea60})[a163_0x1397('0x22')](()=>{});})[a163_0x1397('0x22')](()=>{});},this[a163_0x1397('0x34')]=async _0x4d6ba0=>{_0x4d6ba0[a163_0x1397('0x20')]&&await _0x4d6ba0[a163_0x1397('0x31')]();const _0xf7f847=_0x4d6ba0['guild'],_0x2e8df6=await _0xf7f847[a163_0x1397('0x11')]();this[a163_0x1397('0x32')](_0x4d6ba0,_0x2e8df6),this[a163_0x1397('0xb')](_0x4d6ba0,_0xf7f847),_0xf7f847[a163_0x1397('0x13')]({'event':a163_0x1397('0x2e'),'fields':[{'name':a163_0x1397('0x1'),'value':_0x4d6ba0[a163_0x1397('0x16')][a163_0x1397('0x6')],'inline':!![]},{'name':'Member\x20ID','value':_0x4d6ba0['id'],'inline':!![]},{'name':a163_0x1397('0x28'),'value':_0x4d6ba0[a163_0x1397('0x16')][a163_0x1397('0x8')]?a163_0x1397('0x5'):a163_0x1397('0x33'),'inline':!![]},{'name':a163_0x1397('0x10'),'value':_0x4d6ba0[a163_0x1397('0x16')][a163_0x1397('0x21')]['toUTCString'](),'inline':!![]}],'timestamp':_0x4d6ba0[a163_0x1397('0x7')]});};}};