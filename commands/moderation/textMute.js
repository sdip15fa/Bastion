const a85_0x1bac=['RED','guild','rolePosition','textMute','return\x20/\x22\x20+\x20this\x20+\x20\x22/','MUTE_MEMBERS','textMute\x20--unset\x20--user\x20USER_ID\x20--channel\x20--\x20REASON','tag','../../utils/errors','Constants','parent','exports','info','BASTION_ERROR_TYPE','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','client','textMute\x20--user\x20USER_ID\x20--\x20REASON','unauthorized','textMute\x20--user\x20USER_ID\x20--channel\x20--\x20REASON','Reason','DiscordError','memberUnsetTextMute','locale','COLORS','resolver','document','test','catch','ownerID','name','canManage','join','send','getString','language','author','ORANGE','apply','channel','exec','@bastion/tesseract','member','user','set','constructor'];(function(_0x3c7336,_0x1bacde){const _0x2c495b=function(_0x50f3fd){while(--_0x50f3fd){_0x3c7336['push'](_0x3c7336['shift']());}},_0x115f3d=function(){const _0x56cbaa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5ac752,_0x13c776,_0x24d566,_0x1d82cb){_0x1d82cb=_0x1d82cb||{};let _0x45487c=_0x13c776+'='+_0x24d566,_0x2fa48c=0x0;for(let _0x35e139=0x0,_0x5c34d2=_0x5ac752['length'];_0x35e139<_0x5c34d2;_0x35e139++){const _0x2bd9be=_0x5ac752[_0x35e139];_0x45487c+=';\x20'+_0x2bd9be;const _0xfea72a=_0x5ac752[_0x2bd9be];_0x5ac752['push'](_0xfea72a),_0x5c34d2=_0x5ac752['length'],_0xfea72a!==!![]&&(_0x45487c+='='+_0xfea72a);}_0x1d82cb['cookie']=_0x45487c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1ccb42,_0x4126f3){_0x1ccb42=_0x1ccb42||function(_0x3550a5){return _0x3550a5;};const _0x2d85f5=_0x1ccb42(new RegExp('(?:^|;\x20)'+_0x4126f3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x59c3dd=function(_0x5110c6,_0xbfd33d){_0x5110c6(++_0xbfd33d);};return _0x59c3dd(_0x2c495b,_0x1bacde),_0x2d85f5?decodeURIComponent(_0x2d85f5[0x1]):undefined;}},_0x3837c1=function(){const _0x159646=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x159646['test'](_0x56cbaa['removeCookie']['toString']());};_0x56cbaa['updateCookie']=_0x3837c1;let _0x33cd06='';const _0x2904b2=_0x56cbaa['updateCookie']();if(!_0x2904b2)_0x56cbaa['setCookie'](['*'],'counter',0x1);else _0x2904b2?_0x33cd06=_0x56cbaa['getCookie'](null,'counter'):_0x56cbaa['removeCookie']();};_0x115f3d();}(a85_0x1bac,0x162));const a85_0x2c49=function(_0x3c7336,_0x1bacde){_0x3c7336=_0x3c7336-0x0;let _0x2c495b=a85_0x1bac[_0x3c7336];return _0x2c495b;};const a85_0x24d566=function(){let _0x579e7b=!![];return function(_0x26a34a,_0xe48cc4){const _0x190341=_0x579e7b?function(){if(_0xe48cc4){const _0x2834b1=_0xe48cc4[a85_0x2c49('0x2b')](_0x26a34a,arguments);return _0xe48cc4=null,_0x2834b1;}}:function(){};return _0x579e7b=![],_0x190341;};}(),a85_0x13c776=a85_0x24d566(this,function(){const _0xdc4758=function(){const _0x39ebce=_0xdc4758[a85_0x2c49('0x5')](a85_0x2c49('0xa'))()['constructor'](a85_0x2c49('0x14'));return!_0x39ebce[a85_0x2c49('0x20')](a85_0x13c776);};return _0xdc4758();});a85_0x13c776();'use strict';const tesseract_1=require(a85_0x2c49('0x1')),errors=require(a85_0x2c49('0xe'));module[a85_0x2c49('0x11')]=class TextMute extends tesseract_1['Command']{constructor(){super(a85_0x2c49('0x9'),{'description':'It\x20allows\x20you\x20to\x20text\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel\x20(or\x20category).\x20Text\x20muted\x20users\x20can\x27t\x20send\x20messages\x20in\x20the\x20channels\x20they\x20are\x20muted.','triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'channel':'c','user':'u'},'default':{'set':!![]},'boolean':[a85_0x2c49('0x4'),a85_0x2c49('0x2c')],'string':[a85_0x2c49('0x3')]},'scope':a85_0x2c49('0x7'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a85_0x2c49('0xb')],'userPermissions':[a85_0x2c49('0xb')],'syntax':[a85_0x2c49('0x16'),a85_0x2c49('0x18'),'textMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON',a85_0x2c49('0xc')]}),this[a85_0x2c49('0x0')]=async(_0x3660ec,_0x4bbf2e)=>{const _0xceba72=this[a85_0x2c49('0x15')][a85_0x2c49('0x1e')]['resolveGuildMember'](_0x3660ec['guild'],_0x4bbf2e['user']);if(!_0xceba72)throw new errors[(a85_0x2c49('0x1a'))](errors[a85_0x2c49('0x13')]['INVALID_COMMAND_SYNTAX'],this[a85_0x2c49('0x23')]);if(_0x3660ec['author']['id']!==_0x3660ec[a85_0x2c49('0x7')][a85_0x2c49('0x22')]&&!_0x3660ec[a85_0x2c49('0x2')][a85_0x2c49('0x24')](_0xceba72))return await _0x3660ec[a85_0x2c49('0x2c')][a85_0x2c49('0x26')]({'embed':{'color':tesseract_1[a85_0x2c49('0xf')][a85_0x2c49('0x1d')][a85_0x2c49('0x6')],'title':this[a85_0x2c49('0x15')][a85_0x2c49('0x1c')][a85_0x2c49('0x27')](_0x3660ec[a85_0x2c49('0x7')][a85_0x2c49('0x1f')][a85_0x2c49('0x28')],'errors',a85_0x2c49('0x17')),'description':this[a85_0x2c49('0x15')]['locale']['getString'](_0x3660ec[a85_0x2c49('0x7')][a85_0x2c49('0x1f')][a85_0x2c49('0x28')],'errors',a85_0x2c49('0x8'),_0x3660ec[a85_0x2c49('0x29')][a85_0x2c49('0xd')],_0xceba72[a85_0x2c49('0x3')][a85_0x2c49('0xd')])}})[a85_0x2c49('0x21')](()=>{});const _0x8c53bf=_0x4bbf2e['_'][a85_0x2c49('0x25')]('\x20')||'-',_0x32b96c=!_0x4bbf2e[a85_0x2c49('0x2c')]&&_0x3660ec[a85_0x2c49('0x2c')][a85_0x2c49('0x10')]?_0x3660ec[a85_0x2c49('0x2c')]['parent']:_0x3660ec[a85_0x2c49('0x2c')];await _0x32b96c['updateOverwrite'](_0xceba72['id'],{'SEND_MESSAGES':_0x4bbf2e['set']?![]:null},_0x8c53bf),await _0x3660ec['channel'][a85_0x2c49('0x26')]({'embed':{'color':tesseract_1[a85_0x2c49('0xf')][a85_0x2c49('0x1d')][a85_0x2c49('0x2a')],'description':_0x4bbf2e[a85_0x2c49('0x4')]?this['client'][a85_0x2c49('0x1c')]['getString'](_0x3660ec['guild']['document'][a85_0x2c49('0x28')],'info','memberSetTextMute',_0x3660ec[a85_0x2c49('0x29')][a85_0x2c49('0xd')],_0xceba72[a85_0x2c49('0x3')][a85_0x2c49('0xd')],_0x32b96c[a85_0x2c49('0x23')]):this['client'][a85_0x2c49('0x1c')]['getString'](_0x3660ec[a85_0x2c49('0x7')][a85_0x2c49('0x1f')]['language'],a85_0x2c49('0x12'),a85_0x2c49('0x1b'),_0x3660ec[a85_0x2c49('0x29')][a85_0x2c49('0xd')],_0xceba72[a85_0x2c49('0x3')][a85_0x2c49('0xd')]),'fields':[{'name':a85_0x2c49('0x19'),'value':_0x8c53bf}],'footer':{'text':_0xceba72['id']}}})[a85_0x2c49('0x21')](()=>{});};}};