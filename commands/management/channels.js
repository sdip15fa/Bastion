const a60_0x46bf=['@bastion/tesseract','voice','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/confirmation','channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON','constructor','BASTION_ERROR_TYPE','DiscordError','channels','catch','language','textChannelRename','has','exec','join','client','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','../../utils/numbers','info','INVALID_COMMAND_SYNTAX','channels\x20--rename\x20NAME\x20--\x20REASON','apply','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','channels\x20--create\x20NAME\x20--\x20REASON','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','cache','document','locale','channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','type','text','premiumTier','limit','name','category','length','channelDeleteQuestion','create','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','includes','GREEN','Constants','getString','rename','clamp','tag','author','nsfw','channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','topic','exports','channels\x20--delete\x20--\x20REASON','guild','channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON','toLowerCase','default','delete','edit','channel','Command','send','COLORS'];(function(_0x5ef56b,_0x46bf7e){const _0x3037dd=function(_0x3c3c85){while(--_0x3c3c85){_0x5ef56b['push'](_0x5ef56b['shift']());}},_0x57dfa6=function(){const _0x2d22e6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5af941,_0x6e17ef,_0x4a121f,_0x456089){_0x456089=_0x456089||{};let _0x352ab5=_0x6e17ef+'='+_0x4a121f,_0x11f6a3=0x0;for(let _0x275ddc=0x0,_0x2191ca=_0x5af941['length'];_0x275ddc<_0x2191ca;_0x275ddc++){const _0x214f2b=_0x5af941[_0x275ddc];_0x352ab5+=';\x20'+_0x214f2b;const _0x48ae6f=_0x5af941[_0x214f2b];_0x5af941['push'](_0x48ae6f),_0x2191ca=_0x5af941['length'],_0x48ae6f!==!![]&&(_0x352ab5+='='+_0x48ae6f);}_0x456089['cookie']=_0x352ab5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1086e5,_0x36b7d7){_0x1086e5=_0x1086e5||function(_0x39a829){return _0x39a829;};const _0x5e03b2=_0x1086e5(new RegExp('(?:^|;\x20)'+_0x36b7d7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1cdd24=function(_0x2f0c03,_0x133991){_0x2f0c03(++_0x133991);};return _0x1cdd24(_0x3037dd,_0x46bf7e),_0x5e03b2?decodeURIComponent(_0x5e03b2[0x1]):undefined;}},_0xb5c13e=function(){const _0x42f6c6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x42f6c6['test'](_0x2d22e6['removeCookie']['toString']());};_0x2d22e6['updateCookie']=_0xb5c13e;let _0xeda3f1='';const _0x3965d8=_0x2d22e6['updateCookie']();if(!_0x3965d8)_0x2d22e6['setCookie'](['*'],'counter',0x1);else _0x3965d8?_0xeda3f1=_0x2d22e6['getCookie'](null,'counter'):_0x2d22e6['removeCookie']();};_0x57dfa6();}(a60_0x46bf,0x1f3));const a60_0x3037=function(_0x5ef56b,_0x46bf7e){_0x5ef56b=_0x5ef56b-0x0;let _0x3037dd=a60_0x46bf[_0x5ef56b];return _0x3037dd;};const a60_0x4a121f=function(){let _0x2d4102=!![];return function(_0x2e2443,_0x13dafe){const _0x4fc3a3=_0x2d4102?function(){if(_0x13dafe){const _0x1bebaa=_0x13dafe[a60_0x3037('0x12')](_0x2e2443,arguments);return _0x13dafe=null,_0x1bebaa;}}:function(){};return _0x2d4102=![],_0x4fc3a3;};}(),a60_0x6e17ef=a60_0x4a121f(this,function(){const _0x1f5cc4=function(){const _0x524652=_0x1f5cc4[a60_0x3037('0x2')](a60_0x3037('0x3d'))()[a60_0x3037('0x2')](a60_0x3037('0x15'));return!_0x524652['test'](a60_0x6e17ef);};return _0x1f5cc4();});a60_0x6e17ef();'use strict';const tesseract_1=require(a60_0x3037('0x3b')),confirmation_1=require(a60_0x3037('0x0')),errors=require('../../utils/errors'),numbers=require(a60_0x3037('0xe'));module[a60_0x3037('0x2f')]=class ChannelsCommand extends tesseract_1[a60_0x3037('0x38')]{constructor(){super(a60_0x3037('0x5'),{'description':a60_0x3037('0x23'),'triggers':[],'arguments':{'array':[a60_0x3037('0x22'),a60_0x3037('0x28'),a60_0x3037('0x2e')],'boolean':['delete',a60_0x3037('0x2c'),'slowmode'],'number':[a60_0x3037('0x1d')],'string':[a60_0x3037('0x1f'),'create',a60_0x3037('0x28'),a60_0x3037('0x2e')],'coerce':{'type':_0x3494da=>[a60_0x3037('0x1f'),'text',a60_0x3037('0x3c')][a60_0x3037('0x24')](_0x3494da[a60_0x3037('0x33')]())?_0x3494da:a60_0x3037('0x1b'),'limit':_0x522a30=>numbers[a60_0x3037('0x29')](_0x522a30,0x1,0x63)}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_CHANNELS'],'userPermissions':['MANAGE_CHANNELS'],'syntax':[a60_0x3037('0x14'),a60_0x3037('0x32'),a60_0x3037('0x13'),a60_0x3037('0x2d'),a60_0x3037('0x19'),a60_0x3037('0x1'),a60_0x3037('0xd'),a60_0x3037('0x30'),a60_0x3037('0x11')]}),this[a60_0x3037('0xa')]=async(_0x35817f,_0x30b77d)=>{const _0x4cea0f=_0x30b77d['_'][a60_0x3037('0xb')]('\x20')||'-';if(_0x30b77d[a60_0x3037('0x22')]&&_0x30b77d[a60_0x3037('0x22')][a60_0x3037('0x20')]){const _0x26576f=_0x30b77d[a60_0x3037('0x22')]['join']('\x20'),_0xba01e9=await _0x35817f['guild'][a60_0x3037('0x5')]['create'](_0x26576f,{'type':_0x30b77d[a60_0x3037('0x1a')],'bitrate':_0x35817f['guild'][a60_0x3037('0x1c')]*0x1f400||0x17700,'nsfw':_0x30b77d[a60_0x3037('0x2c')],'reason':_0x4cea0f,'topic':_0x30b77d[a60_0x3037('0x2e')]&&_0x30b77d[a60_0x3037('0x2e')][a60_0x3037('0x20')]?_0x30b77d[a60_0x3037('0x2e')]['join']('\x20'):'','userLimit':_0x30b77d['limit']?_0x30b77d[a60_0x3037('0x1d')]:0x0,'rateLimitPerUser':_0x30b77d['slowmode']?0x5:0x0,'parent':_0x35817f[a60_0x3037('0x31')][a60_0x3037('0x5')][a60_0x3037('0x16')][a60_0x3037('0x9')](_0x30b77d[a60_0x3037('0x1f')])?_0x30b77d[a60_0x3037('0x1f')]:_0x35817f[a60_0x3037('0x37')]['parent']});return await _0x35817f[a60_0x3037('0x37')][a60_0x3037('0x39')]({'embed':{'color':tesseract_1[a60_0x3037('0x26')]['COLORS']['GREEN'],'description':this['client'][a60_0x3037('0x18')][a60_0x3037('0x27')](_0x35817f[a60_0x3037('0x31')][a60_0x3037('0x17')][a60_0x3037('0x7')],a60_0x3037('0xf'),_0xba01e9[a60_0x3037('0x1a')]+'ChannelCreate',_0x35817f[a60_0x3037('0x2b')][a60_0x3037('0x2a')],_0xba01e9[a60_0x3037('0x1e')],_0x4cea0f)}})[a60_0x3037('0x6')](()=>{});}if(_0x30b77d['delete']){const _0x32571a=await confirmation_1[a60_0x3037('0x34')](_0x35817f,this['client'][a60_0x3037('0x18')]['getString'](_0x35817f[a60_0x3037('0x31')]['document'][a60_0x3037('0x7')],a60_0x3037('0xf'),a60_0x3037('0x21'),_0x35817f['author'][a60_0x3037('0x2a')],_0x35817f['channel'][a60_0x3037('0x1e')]));return _0x32571a&&await _0x35817f[a60_0x3037('0x37')][a60_0x3037('0x35')](_0x4cea0f),!![];}if(_0x30b77d['rename']&&_0x30b77d[a60_0x3037('0x28')][a60_0x3037('0x20')]){const _0x23e7bc=await _0x35817f['channel'][a60_0x3037('0x36')]({'name':_0x30b77d[a60_0x3037('0x28')]['join']('\x20')});return await _0x35817f[a60_0x3037('0x37')]['send']({'embed':{'color':tesseract_1[a60_0x3037('0x26')][a60_0x3037('0x3a')][a60_0x3037('0x25')],'description':this[a60_0x3037('0xc')]['locale'][a60_0x3037('0x27')](_0x35817f['guild'][a60_0x3037('0x17')][a60_0x3037('0x7')],a60_0x3037('0xf'),a60_0x3037('0x8'),_0x35817f[a60_0x3037('0x2b')][a60_0x3037('0x2a')],_0x23e7bc[a60_0x3037('0x1e')],_0x4cea0f)}})[a60_0x3037('0x6')](()=>{});}throw new errors[(a60_0x3037('0x4'))](errors[a60_0x3037('0x3')][a60_0x3037('0x10')],this[a60_0x3037('0x1e')]);};}};