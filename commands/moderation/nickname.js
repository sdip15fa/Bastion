const a82_0x3d28=['tag','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exec','nickname\x20--user\x20USER_ID\x20--nick\x20NICKNAME\x20--\x20REASON','ORANGE','../../utils/errors','join','constructor','channel','setNickname','send','ownerID','BASTION_ERROR_TYPE','KICK_MEMBERS','DiscordError','document','resolver','resolveGuildMember','locale','catch','rolePosition','test','apply','exports','Command','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20nicknames\x20of\x20the\x20server\x20members.','language','user','client','Constants','author','getString','info','guild','nickUpdate','nick','name','RED','COLORS','member','Reason'];(function(_0x3663ea,_0x3d285f){const _0x353e48=function(_0x22feb0){while(--_0x22feb0){_0x3663ea['push'](_0x3663ea['shift']());}},_0x5d7d28=function(){const _0x2e3265={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x29d56d,_0x1bc79e,_0x28d91e,_0xd607be){_0xd607be=_0xd607be||{};let _0x3861ea=_0x1bc79e+'='+_0x28d91e,_0xe30420=0x0;for(let _0x5e0bb2=0x0,_0x447bc4=_0x29d56d['length'];_0x5e0bb2<_0x447bc4;_0x5e0bb2++){const _0x1281dc=_0x29d56d[_0x5e0bb2];_0x3861ea+=';\x20'+_0x1281dc;const _0xccffcd=_0x29d56d[_0x1281dc];_0x29d56d['push'](_0xccffcd),_0x447bc4=_0x29d56d['length'],_0xccffcd!==!![]&&(_0x3861ea+='='+_0xccffcd);}_0xd607be['cookie']=_0x3861ea;},'removeCookie':function(){return'dev';},'getCookie':function(_0x58179d,_0x41887d){_0x58179d=_0x58179d||function(_0x5eecb4){return _0x5eecb4;};const _0x3710ed=_0x58179d(new RegExp('(?:^|;\x20)'+_0x41887d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x343c55=function(_0x3dda03,_0x4ae382){_0x3dda03(++_0x4ae382);};return _0x343c55(_0x353e48,_0x3d285f),_0x3710ed?decodeURIComponent(_0x3710ed[0x1]):undefined;}},_0x8fe39b=function(){const _0x4b878d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b878d['test'](_0x2e3265['removeCookie']['toString']());};_0x2e3265['updateCookie']=_0x8fe39b;let _0x133e61='';const _0x251172=_0x2e3265['updateCookie']();if(!_0x251172)_0x2e3265['setCookie'](['*'],'counter',0x1);else _0x251172?_0x133e61=_0x2e3265['getCookie'](null,'counter'):_0x2e3265['removeCookie']();};_0x5d7d28();}(a82_0x3d28,0x148));const a82_0x353e=function(_0x3663ea,_0x3d285f){_0x3663ea=_0x3663ea-0x0;let _0x353e48=a82_0x3d28[_0x3663ea];return _0x353e48;};const a82_0x28d91e=function(){let _0x80eeab=!![];return function(_0x633611,_0x473d0d){const _0x17cf12=_0x80eeab?function(){if(_0x473d0d){const _0x124b88=_0x473d0d[a82_0x353e('0x16')](_0x633611,arguments);return _0x473d0d=null,_0x124b88;}}:function(){};return _0x80eeab=![],_0x17cf12;};}(),a82_0x1bc79e=a82_0x28d91e(this,function(){const _0x3847fa=function(){const _0x3a74b=_0x3847fa[a82_0x353e('0x7')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a82_0x353e('0x7')](a82_0x353e('0x1'));return!_0x3a74b[a82_0x353e('0x15')](a82_0x1bc79e);};return _0x3847fa();});a82_0x1bc79e();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a82_0x353e('0x5'));module[a82_0x353e('0x17')]=class Nickname extends tesseract_1[a82_0x353e('0x18')]{constructor(){super('nickname',{'description':a82_0x353e('0x19'),'triggers':[],'arguments':{'alias':{'nick':'n','user':'u'},'array':['nick'],'string':['nick',a82_0x353e('0x1b')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a82_0x353e('0xd')],'userPermissions':[a82_0x353e('0xd')],'syntax':[a82_0x353e('0x3'),'nickname\x20--user\x20USER_ID\x20--\x20REASON']}),this[a82_0x353e('0x2')]=async(_0x3f3048,_0x4ad064)=>{const _0x5315d8=this['client'][a82_0x353e('0x10')][a82_0x353e('0x11')](_0x3f3048['guild'],_0x4ad064[a82_0x353e('0x1b')]);if(!_0x5315d8)throw new errors[(a82_0x353e('0xe'))](errors[a82_0x353e('0xc')]['INVALID_COMMAND_SYNTAX'],this[a82_0x353e('0x24')]);if(_0x3f3048[a82_0x353e('0x1e')]['id']!==_0x3f3048['guild'][a82_0x353e('0xb')]&&!_0x3f3048[a82_0x353e('0x27')]['canManage'](_0x5315d8))return await _0x3f3048[a82_0x353e('0x8')][a82_0x353e('0xa')]({'embed':{'color':tesseract_1[a82_0x353e('0x1d')][a82_0x353e('0x26')][a82_0x353e('0x25')],'title':this[a82_0x353e('0x1c')][a82_0x353e('0x12')]['getString'](_0x3f3048[a82_0x353e('0x21')][a82_0x353e('0xf')]['language'],'errors','unauthorized'),'description':this[a82_0x353e('0x1c')]['locale'][a82_0x353e('0x1f')](_0x3f3048[a82_0x353e('0x21')][a82_0x353e('0xf')][a82_0x353e('0x1a')],'errors',a82_0x353e('0x14'),_0x3f3048[a82_0x353e('0x1e')][a82_0x353e('0x0')],_0x5315d8[a82_0x353e('0x1b')]['tag'])}})[a82_0x353e('0x13')](()=>{});const _0x1e0330=_0x4ad064['_'][a82_0x353e('0x6')]('\x20')||'-';await _0x5315d8[a82_0x353e('0x9')](_0x4ad064[a82_0x353e('0x23')][a82_0x353e('0x6')]('\x20')||'',_0x1e0330),await _0x3f3048[a82_0x353e('0x8')]['send']({'embed':{'color':tesseract_1[a82_0x353e('0x1d')][a82_0x353e('0x26')][a82_0x353e('0x4')],'description':_0x4ad064['nick']?this['client'][a82_0x353e('0x12')][a82_0x353e('0x1f')](_0x3f3048[a82_0x353e('0x21')]['document'][a82_0x353e('0x1a')],a82_0x353e('0x20'),a82_0x353e('0x22'),_0x3f3048[a82_0x353e('0x1e')][a82_0x353e('0x0')],_0x5315d8[a82_0x353e('0x1b')]['tag'],_0x4ad064[a82_0x353e('0x23')]):this[a82_0x353e('0x1c')][a82_0x353e('0x12')][a82_0x353e('0x1f')](_0x3f3048[a82_0x353e('0x21')][a82_0x353e('0xf')][a82_0x353e('0x1a')],'info','nickRemove',_0x3f3048[a82_0x353e('0x1e')]['tag'],_0x5315d8[a82_0x353e('0x1b')]['tag']),'fields':[{'name':a82_0x353e('0x28'),'value':_0x1e0330}],'footer':{'text':_0x5315d8['id']}}})[a82_0x353e('0x13')](()=>{});};}};