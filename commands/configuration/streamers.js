const a36_0x34c4=['DiscordError','membershipLimitStreamers','PremiumTier','remove','streamers\x20--twitch\x20USERNAME','send','LIMITS','save','../../utils/constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','document','PREMIUM_MEMBERSHIP_REQUIRED','locale','Followed\x20Streamers','user','includes','language','length','channel','concat','../../utils/omnic','guild','client','Command','COLORS','isPublicBastion','\x20--help`\x20for\x20more\x20information.','TWITCH','users','streamers','getString','premiumStreamers','return\x20/\x22\x20+\x20this\x20+\x20\x22/','PLATINUM','GOLD','test','twitch','BASTION_ERROR_TYPE','fetchPremiumTier','Constants','name','LIMITED_PREMIUM_MEMBERSHIP','Twitch','It\x20allows\x20you\x20to\x20follow\x20streamers,\x20from\x20various\x20platforms,\x20in\x20the\x20server.\x20When\x20the\x20streamers\x20go\x20live,\x20or\x20post\x20a\x20video,\x20Bastion\x20will\x20notify\x20about\x20it\x20in\x20the\x20server.','streamers\x20--twitch\x20USERNAME\x20--remove','STREAMERS_PER_SERVICE','MANAGE_GUILD','exports','constructor'];(function(_0x511d97,_0x34c434){const _0x1895cb=function(_0x1b50e2){while(--_0x1b50e2){_0x511d97['push'](_0x511d97['shift']());}},_0x266f62=function(){const _0x1ca8bf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5839a3,_0x54d994,_0x4d5683,_0x55c339){_0x55c339=_0x55c339||{};let _0x5ae6cc=_0x54d994+'='+_0x4d5683,_0x3d16dc=0x0;for(let _0x281ddb=0x0,_0x268076=_0x5839a3['length'];_0x281ddb<_0x268076;_0x281ddb++){const _0x764ad1=_0x5839a3[_0x281ddb];_0x5ae6cc+=';\x20'+_0x764ad1;const _0x3978df=_0x5839a3[_0x764ad1];_0x5839a3['push'](_0x3978df),_0x268076=_0x5839a3['length'],_0x3978df!==!![]&&(_0x5ae6cc+='='+_0x3978df);}_0x55c339['cookie']=_0x5ae6cc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5682d9,_0x14957a){_0x5682d9=_0x5682d9||function(_0x3334c2){return _0x3334c2;};const _0x4e7246=_0x5682d9(new RegExp('(?:^|;\x20)'+_0x14957a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x23ae3b=function(_0x231a6a,_0x10f7e3){_0x231a6a(++_0x10f7e3);};return _0x23ae3b(_0x1895cb,_0x34c434),_0x4e7246?decodeURIComponent(_0x4e7246[0x1]):undefined;}},_0x5c47d5=function(){const _0x7975d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7975d0['test'](_0x1ca8bf['removeCookie']['toString']());};_0x1ca8bf['updateCookie']=_0x5c47d5;let _0x50ac42='';const _0x503ae9=_0x1ca8bf['updateCookie']();if(!_0x503ae9)_0x1ca8bf['setCookie'](['*'],'counter',0x1);else _0x503ae9?_0x50ac42=_0x1ca8bf['getCookie'](null,'counter'):_0x1ca8bf['removeCookie']();};_0x266f62();}(a36_0x34c4,0x1b9));const a36_0x1895=function(_0x511d97,_0x34c434){_0x511d97=_0x511d97-0x0;let _0x1895cb=a36_0x34c4[_0x511d97];return _0x1895cb;};const a36_0x4d5683=function(){let _0x4d7629=!![];return function(_0xbcfc00,_0x1bee27){const _0x3ca786=_0x4d7629?function(){if(_0x1bee27){const _0x52c263=_0x1bee27['apply'](_0xbcfc00,arguments);return _0x1bee27=null,_0x52c263;}}:function(){};return _0x4d7629=![],_0x3ca786;};}(),a36_0x54d994=a36_0x4d5683(this,function(){const _0x392cf0=function(){const _0x26ff9c=_0x392cf0[a36_0x1895('0x8')](a36_0x1895('0x2a'))()[a36_0x1895('0x8')](a36_0x1895('0x12'));return!_0x26ff9c[a36_0x1895('0x2d')](a36_0x54d994);};return _0x392cf0();});a36_0x54d994();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(a36_0x1895('0x11')),errors=require('../../utils/errors'),omnic=require(a36_0x1895('0x1e'));module[a36_0x1895('0x7')]=class InviteFilterCommand extends tesseract_1[a36_0x1895('0x21')]{constructor(){super(a36_0x1895('0x27'),{'description':a36_0x1895('0x3'),'triggers':[],'arguments':{'alias':{'remove':['r'],'twitch':['t']},'boolean':[a36_0x1895('0xc')],'string':['twitch']},'scope':a36_0x1895('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a36_0x1895('0x6')],'syntax':['streamers',a36_0x1895('0xd'),a36_0x1895('0x4')]}),this['exec']=async(_0x3f7c85,_0x545f53)=>{const _0x3ce044=_0x3f7c85[a36_0x1895('0x1f')];if(_0x545f53['twitch']){_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]={..._0x3ce044['document'][a36_0x1895('0x27')],'twitch':{'channelId':_0x3f7c85[a36_0x1895('0x1c')]['id'],'users':_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]&&_0x3ce044[a36_0x1895('0x14')]['streamers'][a36_0x1895('0x2e')]&&_0x3ce044['document'][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')]&&_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')][a36_0x1895('0x26')][a36_0x1895('0x1b')]&&!_0x3ce044[a36_0x1895('0x14')]['streamers']['twitch'][a36_0x1895('0x26')][a36_0x1895('0x19')](_0x545f53[a36_0x1895('0x2e')])?_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')][a36_0x1895('0x1d')](_0x545f53[a36_0x1895('0x2e')]):[_0x545f53[a36_0x1895('0x2e')]]}};_0x545f53[a36_0x1895('0xc')]&&(_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')][a36_0x1895('0x26')]=_0x3ce044['document']['streamers'][a36_0x1895('0x2e')][a36_0x1895('0x26')]['filter'](_0x573a22=>_0x573a22!==_0x545f53['twitch']),_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')][a36_0x1895('0x26')][a36_0x1895('0x1b')]===0x0&&(_0x3ce044[a36_0x1895('0x14')]['streamers'][a36_0x1895('0x2e')]=undefined,delete _0x3ce044['document']['streamers'][a36_0x1895('0x2e')]));if(_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')][a36_0x1895('0x26')][a36_0x1895('0x1b')]>constants[a36_0x1895('0xf')][a36_0x1895('0x5')]&&constants[a36_0x1895('0x23')](this['client'][a36_0x1895('0x18')])){const _0x22b854=await omnic[a36_0x1895('0x30')](_0x3f7c85[a36_0x1895('0x1f')])[a36_0x1895('0x13')](()=>{});if(_0x22b854){if(_0x22b854===omnic['PremiumTier'][a36_0x1895('0x2c')]&&_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')][a36_0x1895('0x1b')]>constants[a36_0x1895('0xf')][a36_0x1895('0x2c')]['STREAMERS_PER_SERVICE'])throw new errors['DiscordError'](errors[a36_0x1895('0x2f')][a36_0x1895('0x1')],this[a36_0x1895('0x20')][a36_0x1895('0x16')][a36_0x1895('0x28')](_0x3f7c85['guild'][a36_0x1895('0x14')][a36_0x1895('0x1a')],'errors',a36_0x1895('0xa'),constants[a36_0x1895('0xf')][a36_0x1895('0x2c')]['STREAMERS_PER_SERVICE']));else{if(_0x22b854===omnic[a36_0x1895('0xb')][a36_0x1895('0x2b')]&&_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')]['length']>constants[a36_0x1895('0xf')][a36_0x1895('0x2b')][a36_0x1895('0x5')])throw new errors[(a36_0x1895('0x9'))](errors[a36_0x1895('0x2f')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a36_0x1895('0x20')][a36_0x1895('0x16')][a36_0x1895('0x28')](_0x3f7c85['guild'][a36_0x1895('0x14')][a36_0x1895('0x1a')],'errors',a36_0x1895('0xa'),constants[a36_0x1895('0xf')][a36_0x1895('0x2b')][a36_0x1895('0x5')]));}}else throw new errors['DiscordError'](errors[a36_0x1895('0x2f')][a36_0x1895('0x15')],this[a36_0x1895('0x20')][a36_0x1895('0x16')][a36_0x1895('0x28')](_0x3f7c85[a36_0x1895('0x1f')]['document'][a36_0x1895('0x1a')],'errors',a36_0x1895('0x29'),constants['LIMITS'][a36_0x1895('0x5')]));}await _0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x10')]();}const _0x49fc11=[];_0x3ce044['document'][a36_0x1895('0x27')]&&_0x3ce044[a36_0x1895('0x14')]['streamers']['twitch']&&_0x49fc11['push']({'name':a36_0x1895('0x2'),'value':'<#'+_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')]['channelId']+'>\x0a'+(_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')][a36_0x1895('0x2e')][a36_0x1895('0x26')]&&_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')]['length']?_0x3ce044[a36_0x1895('0x14')][a36_0x1895('0x27')]['twitch'][a36_0x1895('0x26')]['join']('\x0a'):'-')}),await _0x3f7c85[a36_0x1895('0x1c')][a36_0x1895('0xe')]({'embed':{'color':_0x545f53[a36_0x1895('0x2e')]&&_0x545f53['twitch'][a36_0x1895('0x1b')]?constants[a36_0x1895('0x22')][a36_0x1895('0x25')]:tesseract_1[a36_0x1895('0x31')]['COLORS']['IRIS'],'title':a36_0x1895('0x17'),'fields':_0x49fc11['length']?_0x49fc11:[{'name':'You\x20aren\x27t\x20following\x20any\x20streamers.','value':'See\x20`'+this[a36_0x1895('0x0')]+a36_0x1895('0x24')}]}})[a36_0x1895('0x13')](()=>{});};}};