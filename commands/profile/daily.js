const a110_0x55f3=['constructor','lastClaimed','claim','../../utils/numbers','findOne','alreadyClaimed','info','locale','exports','claimStreakClaimed','member','client','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','Command','guild','../../models/Member','errors','IRIS','COLORS','channel','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','toDateString','language','claimRewardBooster','getString','Daily\x20Reward','getClaimMessageKey','exec','tag','getTime','daily','setDate','getRandomInt','claimStreakFirst','catch','save','Constants','premiumSinceTimestamp','claimStreak','claimStreakLast','return\x20/\x22\x20+\x20this\x20+\x20\x22/','document','author','default'];(function(_0x19d5cf,_0x55f3a8){const _0x367033=function(_0x417ea3){while(--_0x417ea3){_0x19d5cf['push'](_0x19d5cf['shift']());}},_0x4764fa=function(){const _0x4e6be1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4673fd,_0xd60de6,_0x4c444b,_0x4ed207){_0x4ed207=_0x4ed207||{};let _0x4e0df9=_0xd60de6+'='+_0x4c444b,_0x978a2b=0x0;for(let _0x32d476=0x0,_0x4cf04c=_0x4673fd['length'];_0x32d476<_0x4cf04c;_0x32d476++){const _0x1e22a1=_0x4673fd[_0x32d476];_0x4e0df9+=';\x20'+_0x1e22a1;const _0x166541=_0x4673fd[_0x1e22a1];_0x4673fd['push'](_0x166541),_0x4cf04c=_0x4673fd['length'],_0x166541!==!![]&&(_0x4e0df9+='='+_0x166541);}_0x4ed207['cookie']=_0x4e0df9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x543da9,_0x516cb8){_0x543da9=_0x543da9||function(_0x2504a5){return _0x2504a5;};const _0x59d5ef=_0x543da9(new RegExp('(?:^|;\x20)'+_0x516cb8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3f167b=function(_0x1668e2,_0x81aec0){_0x1668e2(++_0x81aec0);};return _0x3f167b(_0x367033,_0x55f3a8),_0x59d5ef?decodeURIComponent(_0x59d5ef[0x1]):undefined;}},_0x250679=function(){const _0x571c1d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x571c1d['test'](_0x4e6be1['removeCookie']['toString']());};_0x4e6be1['updateCookie']=_0x250679;let _0x4feb83='';const _0x566d86=_0x4e6be1['updateCookie']();if(!_0x566d86)_0x4e6be1['setCookie'](['*'],'counter',0x1);else _0x566d86?_0x4feb83=_0x4e6be1['getCookie'](null,'counter'):_0x4e6be1['removeCookie']();};_0x4764fa();}(a110_0x55f3,0xd0));const a110_0x3670=function(_0x19d5cf,_0x55f3a8){_0x19d5cf=_0x19d5cf-0x0;let _0x367033=a110_0x55f3[_0x19d5cf];return _0x367033;};const a110_0x4c444b=function(){let _0x58f439=!![];return function(_0x48ef2e,_0x4aa7bb){const _0x4fb336=_0x58f439?function(){if(_0x4aa7bb){const _0x509c55=_0x4aa7bb['apply'](_0x48ef2e,arguments);return _0x4aa7bb=null,_0x509c55;}}:function(){};return _0x58f439=![],_0x4fb336;};}(),a110_0xd60de6=a110_0x4c444b(this,function(){const _0x22d1cc=function(){const _0x1972a5=_0x22d1cc[a110_0x3670('0x11')](a110_0x3670('0xd'))()['constructor'](a110_0x3670('0x1d'));return!_0x1972a5[a110_0x3670('0x1e')](a110_0xd60de6);};return _0x22d1cc();});a110_0xd60de6();'use strict';const tesseract_1=require('@bastion/tesseract'),Member_1=require(a110_0x3670('0x21')),numbers=require(a110_0x3670('0x14'));module[a110_0x3670('0x19')]=class DailyCommand extends tesseract_1[a110_0x3670('0x1f')]{constructor(){super(a110_0x3670('0x3'),{'description':a110_0x3670('0x26'),'triggers':['claim'],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this['getClaimMessageKey']=_0x1f2916=>{switch(_0x1f2916){case 0x1:return a110_0x3670('0x6');case 0x6:return a110_0x3670('0xc');case 0x7:return a110_0x3670('0x1a');default:return a110_0x3670('0xb');}},this[a110_0x3670('0x0')]=async _0xd8f2de=>{const _0x3db751=await Member_1[a110_0x3670('0x10')][a110_0x3670('0x15')]({'user':_0xd8f2de[a110_0x3670('0xf')]['id'],'guild':_0xd8f2de['guild']['id']}),_0x4973a4=new Date(),_0x2f41fb=(_0x6d4a43=>new Date(_0x6d4a43[a110_0x3670('0x4')](_0x6d4a43['getDate']()-0x1)))(new Date()),_0x28547a=new Date(_0x3db751[a110_0x3670('0x12')]);if(_0x4973a4['toDateString']()===_0x28547a[a110_0x3670('0x27')]())throw new Error(this[a110_0x3670('0x1c')][a110_0x3670('0x18')][a110_0x3670('0x2a')](_0xd8f2de[a110_0x3670('0x20')][a110_0x3670('0xe')][a110_0x3670('0x28')],a110_0x3670('0x22'),a110_0x3670('0x16'),_0xd8f2de[a110_0x3670('0xf')][a110_0x3670('0x1')]));_0x3db751['lastClaimed']=_0x4973a4[a110_0x3670('0x2')]();let _0x44dc1f=numbers[a110_0x3670('0x5')](0x2a,0x80);_0x4973a4[a110_0x3670('0x2')]()-_0xd8f2de[a110_0x3670('0x1b')]['joinedTimestamp']<0xf731400&&(_0x44dc1f/=0x2);_0x3db751[a110_0x3670('0xb')]=_0x2f41fb[a110_0x3670('0x27')]()===_0x28547a[a110_0x3670('0x27')]()?_0x3db751[a110_0x3670('0xb')]+0x1:0x1;const _0x5771c1=this['client'][a110_0x3670('0x18')][a110_0x3670('0x2a')](_0xd8f2de[a110_0x3670('0x20')][a110_0x3670('0xe')][a110_0x3670('0x28')],a110_0x3670('0x17'),this[a110_0x3670('0x2c')](_0x3db751['claimStreak']),0x7-_0x3db751['claimStreak']);_0x3db751[a110_0x3670('0xb')]===0x7&&(_0x3db751[a110_0x3670('0xb')]=0x0,_0x44dc1f+=numbers[a110_0x3670('0x5')](0x200,0x400)),_0xd8f2de[a110_0x3670('0x1b')][a110_0x3670('0xa')]&&(_0x44dc1f*=0x2),await _0xd8f2de[a110_0x3670('0x1b')]['credit'](_0x44dc1f,a110_0x3670('0x2b'),_0x3db751),await _0x3db751[a110_0x3670('0x8')](),_0xd8f2de[a110_0x3670('0x25')]['send']({'embed':{'color':tesseract_1[a110_0x3670('0x9')][a110_0x3670('0x24')][a110_0x3670('0x23')],'description':this['client']['locale'][a110_0x3670('0x2a')](_0xd8f2de['guild'][a110_0x3670('0xe')][a110_0x3670('0x28')],a110_0x3670('0x17'),a110_0x3670('0x13'),_0xd8f2de[a110_0x3670('0xf')][a110_0x3670('0x1')])+'\x0a\x0a'+_0x5771c1,'footer':{'text':_0xd8f2de['member'][a110_0x3670('0xa')]?this[a110_0x3670('0x1c')][a110_0x3670('0x18')][a110_0x3670('0x2a')](_0xd8f2de[a110_0x3670('0x20')][a110_0x3670('0xe')]['language'],a110_0x3670('0x17'),a110_0x3670('0x29')):''}}})[a110_0x3670('0x7')](()=>{});};}};