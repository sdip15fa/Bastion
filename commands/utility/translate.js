const a139_0x125d=['@bastion/tesseract','length','BASTION_ERROR_TYPE','language','exports','../../utils/errors','It\x20allows\x20you\x20to\x20translate\x20the\x20specified\x20text\x20from\x20one\x20language\x20to\x20another.','Command','guild','toLowerCase','COLORS','iso','name','Translation','toUpperCase','from','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','translate\x20--to\x20LANGUAGE\x20--\x20TEXT','join','text','Source\x20Language','test','translate','apply','@k3rn31p4nic/google-translate-api','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','DiscordError','auto','translate\x20--\x20TEXT','Target\x20Language','channel'];(function(_0x20f38e,_0x125d34){const _0x580983=function(_0x44e042){while(--_0x44e042){_0x20f38e['push'](_0x20f38e['shift']());}},_0x142ce9=function(){const _0x41a7cf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2f4934,_0x56def6,_0x51a1ad,_0x2db8a6){_0x2db8a6=_0x2db8a6||{};let _0x7acd8f=_0x56def6+'='+_0x51a1ad,_0x35508c=0x0;for(let _0xbfe06a=0x0,_0x9b9ec8=_0x2f4934['length'];_0xbfe06a<_0x9b9ec8;_0xbfe06a++){const _0x111249=_0x2f4934[_0xbfe06a];_0x7acd8f+=';\x20'+_0x111249;const _0x32fa38=_0x2f4934[_0x111249];_0x2f4934['push'](_0x32fa38),_0x9b9ec8=_0x2f4934['length'],_0x32fa38!==!![]&&(_0x7acd8f+='='+_0x32fa38);}_0x2db8a6['cookie']=_0x7acd8f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11dddb,_0x264897){_0x11dddb=_0x11dddb||function(_0x665e82){return _0x665e82;};const _0xb38130=_0x11dddb(new RegExp('(?:^|;\x20)'+_0x264897['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2e9196=function(_0x669a88,_0x2c6680){_0x669a88(++_0x2c6680);};return _0x2e9196(_0x580983,_0x125d34),_0xb38130?decodeURIComponent(_0xb38130[0x1]):undefined;}},_0x2985eb=function(){const _0x168d92=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x168d92['test'](_0x41a7cf['removeCookie']['toString']());};_0x41a7cf['updateCookie']=_0x2985eb;let _0x216b57='';const _0x2a9cb0=_0x41a7cf['updateCookie']();if(!_0x2a9cb0)_0x41a7cf['setCookie'](['*'],'counter',0x1);else _0x2a9cb0?_0x216b57=_0x41a7cf['getCookie'](null,'counter'):_0x41a7cf['removeCookie']();};_0x142ce9();}(a139_0x125d,0xee));const a139_0x5809=function(_0x20f38e,_0x125d34){_0x20f38e=_0x20f38e-0x0;let _0x580983=a139_0x125d[_0x20f38e];return _0x580983;};const a139_0x51a1ad=function(){let _0x15aa18=!![];return function(_0x2ac7e3,_0x538e05){const _0x40efe3=_0x15aa18?function(){if(_0x538e05){const _0x4fc87f=_0x538e05[a139_0x5809('0x18')](_0x2ac7e3,arguments);return _0x538e05=null,_0x4fc87f;}}:function(){};return _0x15aa18=![],_0x40efe3;};}(),a139_0x56def6=a139_0x51a1ad(this,function(){const _0x32cea9=function(){const _0x34171a=_0x32cea9[a139_0x5809('0x1a')](a139_0x5809('0x1b'))()[a139_0x5809('0x1a')](a139_0x5809('0x10'));return!_0x34171a[a139_0x5809('0x16')](a139_0x56def6);};return _0x32cea9();});a139_0x56def6();'use strict';const tesseract_1=require(a139_0x5809('0x0')),translate=require(a139_0x5809('0x19')),errors=require(a139_0x5809('0x5'));module[a139_0x5809('0x4')]=class TranslateCommand extends tesseract_1[a139_0x5809('0x7')]{constructor(){super(a139_0x5809('0x17'),{'description':a139_0x5809('0x6'),'triggers':[],'arguments':{},'scope':a139_0x5809('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a139_0x5809('0x1f'),a139_0x5809('0x12'),'translate\x20--from\x20LANGUAGE\x20--to\x20LANGUAGE\x20--\x20TEXT']}),this['exec']=async(_0x25e387,_0x157e40)=>{if(!_0x157e40['_'][a139_0x5809('0x1')])throw new errors[(a139_0x5809('0x1d'))](errors[a139_0x5809('0x2')]['INVALID_COMMAND_SYNTAX'],this[a139_0x5809('0xc')]);const _0x1b5475=_0x157e40['_'][a139_0x5809('0x13')]('\x20'),_0x373007=_0x157e40[a139_0x5809('0xf')]?_0x157e40[a139_0x5809('0xf')][a139_0x5809('0x9')]():a139_0x5809('0x1e'),_0x5afe3e=_0x157e40['to']?_0x157e40['to'][a139_0x5809('0x9')]():'en',_0x29a44e=await translate(_0x1b5475,{'from':_0x373007,'to':_0x5afe3e});await _0x25e387[a139_0x5809('0x21')][a139_0x5809('0x1c')]({'embed':{'color':tesseract_1['Constants'][a139_0x5809('0xa')][a139_0x5809('0x11')],'title':a139_0x5809('0xd'),'description':_0x29a44e[a139_0x5809('0x14')],'fields':[{'name':a139_0x5809('0x15'),'value':_0x29a44e['from'][a139_0x5809('0x3')][a139_0x5809('0xb')][a139_0x5809('0xe')](),'inline':!![]},{'name':a139_0x5809('0x20'),'value':_0x5afe3e['toUpperCase'](),'inline':!![]}],'footer':{'text':'Powered\x20by\x20Google'}}});};}};