const a62_0x39ab=['countDocuments','locale','COLORS','@bastion/tesseract','../../utils/omnic','giveaway\x20--winners\x20NUMBER\x20--\x20ITEM','user','giveaway\x20--timeout\x20HOURS\x20--\x20ITEM','isPublicBastion','name','../../models/Giveaway','GIVEAWAY!','errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','default','language','exports','GOLD','now','../../utils/errors','React\x20to\x20this\x20message\x20with\x20','send','premiumGiveawayTimeout','number','Constants','floor','LIMITS','defaultTimeout','react','GIVEAWAYS','join','\x20to\x20participate\x20in\x20the\x20giveaway\x20for\x20a\x20chance\x20to\x20win.','IRIS','INVALID_COMMAND_SYNTAX','BASTION_ERROR_TYPE','guild','clamp','defaultWinners','membershipLimitGiveawayTimeout','timeout','PREMIUM_MEMBERSHIP_REQUIRED','catch','create','client','apply','PLATINUM','constructor','premiumGiveaways','membershipLimitGiveaways','fetchPremiumTier','MANAGE_CHANNELS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','\x20Winners\x20•\x20Ends','../../utils/numbers','LIMITED_PREMIUM_MEMBERSHIP','exec','document','getString','\x20or\x20','winners','channel','length','PremiumTier','DiscordError','reactions','giveaway','giveaway\x20--\x20ITEM','../../utils/constants','GIVEAWAY_TIMEOUT','Command','MAX_SAFE_INTEGER'];(function(_0x4e523a,_0x39ab21){const _0xce2b6e=function(_0x40886b){while(--_0x40886b){_0x4e523a['push'](_0x4e523a['shift']());}},_0x15717d=function(){const _0x4ce5d1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1b5e8e,_0x8dc7fd,_0x5aab3e,_0x12a9f5){_0x12a9f5=_0x12a9f5||{};let _0x420820=_0x8dc7fd+'='+_0x5aab3e,_0x2baa0d=0x0;for(let _0x200cf5=0x0,_0x498aaa=_0x1b5e8e['length'];_0x200cf5<_0x498aaa;_0x200cf5++){const _0xf39ee2=_0x1b5e8e[_0x200cf5];_0x420820+=';\x20'+_0xf39ee2;const _0x29f4e9=_0x1b5e8e[_0xf39ee2];_0x1b5e8e['push'](_0x29f4e9),_0x498aaa=_0x1b5e8e['length'],_0x29f4e9!==!![]&&(_0x420820+='='+_0x29f4e9);}_0x12a9f5['cookie']=_0x420820;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2b830d,_0x337821){_0x2b830d=_0x2b830d||function(_0x3a4344){return _0x3a4344;};const _0x2bfa2e=_0x2b830d(new RegExp('(?:^|;\x20)'+_0x337821['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2f573a=function(_0x2ac77b,_0x200006){_0x2ac77b(++_0x200006);};return _0x2f573a(_0xce2b6e,_0x39ab21),_0x2bfa2e?decodeURIComponent(_0x2bfa2e[0x1]):undefined;}},_0x28099d=function(){const _0x3dc2ec=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3dc2ec['test'](_0x4ce5d1['removeCookie']['toString']());};_0x4ce5d1['updateCookie']=_0x28099d;let _0x1b6577='';const _0x3eff1d=_0x4ce5d1['updateCookie']();if(!_0x3eff1d)_0x4ce5d1['setCookie'](['*'],'counter',0x1);else _0x3eff1d?_0x1b6577=_0x4ce5d1['getCookie'](null,'counter'):_0x4ce5d1['removeCookie']();};_0x15717d();}(a62_0x39ab,0x1ad));const a62_0xce2b=function(_0x4e523a,_0x39ab21){_0x4e523a=_0x4e523a-0x0;let _0xce2b6e=a62_0x39ab[_0x4e523a];return _0xce2b6e;};const a62_0x5aab3e=function(){let _0x543e27=!![];return function(_0x41c528,_0xe794fd){const _0x5122ea=_0x543e27?function(){if(_0xe794fd){const _0x11944b=_0xe794fd[a62_0xce2b('0x2f')](_0x41c528,arguments);return _0xe794fd=null,_0x11944b;}}:function(){};return _0x543e27=![],_0x5122ea;};}(),a62_0x8dc7fd=a62_0x5aab3e(this,function(){const _0x370551=function(){const _0x5ab3f0=_0x370551[a62_0xce2b('0x31')](a62_0xce2b('0x36'))()['constructor'](a62_0xce2b('0x10'));return!_0x5ab3f0[a62_0xce2b('0x37')](a62_0x8dc7fd);};return _0x370551();});a62_0x8dc7fd();'use strict';const tesseract_1=require(a62_0xce2b('0x6')),Giveaway_1=require(a62_0xce2b('0xd')),constants=require(a62_0xce2b('0x47')),errors=require(a62_0xce2b('0x16')),numbers=require(a62_0xce2b('0x39')),omnic=require(a62_0xce2b('0x7'));module[a62_0xce2b('0x13')]=class GiveawayCommand extends tesseract_1[a62_0xce2b('0x1')]{constructor(){super(a62_0xce2b('0x45'),{'description':'It\x20allows\x20you\x20to\x20run\x20giveaway\x20events\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20any\x20number\x20of\x20winners\x20for\x20the\x20event.\x20And\x20it\x20also\x20allows\x20you\x20to\x20reroll\x20the\x20winners,\x20if\x20need\x20be,\x20after\x20the\x20end\x20of\x20the\x20event.','triggers':[],'arguments':{'alias':{'timeout':['t'],'winners':['w']},'number':[a62_0xce2b('0x2a'),a62_0xce2b('0x3f')],'coerce':{'timeout':_0x1dad0d=>typeof _0x1dad0d===a62_0xce2b('0x1a')&&numbers[a62_0xce2b('0x27')](_0x1dad0d,0x1,0x2d0),'winners':_0x489ba3=>typeof _0x489ba3===a62_0xce2b('0x1a')&&Math[a62_0xce2b('0x1c')](numbers[a62_0xce2b('0x27')](_0x489ba3,0x1,Number[a62_0xce2b('0x2')]))},'default':{'timeout':0x3,'winners':0x1}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a62_0xce2b('0x35')],'syntax':[a62_0xce2b('0x46'),a62_0xce2b('0x8'),a62_0xce2b('0xa')]}),this[a62_0xce2b('0x3b')]=async(_0x4b68a4,_0x32bd17)=>{if(!_0x32bd17['_'][a62_0xce2b('0x41')])throw new errors[(a62_0xce2b('0x43'))](errors[a62_0xce2b('0x25')][a62_0xce2b('0x24')],this[a62_0xce2b('0xc')]);const _0x199833=_0x32bd17['_']['join']('\x20'),_0x2e37f8=_0x32bd17[a62_0xce2b('0x2a')]?_0x32bd17[a62_0xce2b('0x2a')]:this[a62_0xce2b('0x1e')],_0x305377=_0x32bd17['winners']?_0x32bd17['winners']:this['defaultWinners'];if(constants[a62_0xce2b('0xb')](this[a62_0xce2b('0x2e')][a62_0xce2b('0x9')])){const _0x376483=await omnic[a62_0xce2b('0x34')](_0x4b68a4[a62_0xce2b('0x26')])[a62_0xce2b('0x2c')](()=>{});if(_0x376483){if(_0x376483===omnic['PremiumTier']['GOLD']&&_0x2e37f8>constants[a62_0xce2b('0x1d')][a62_0xce2b('0x14')][a62_0xce2b('0x0')])throw new errors[(a62_0xce2b('0x43'))](errors[a62_0xce2b('0x25')][a62_0xce2b('0x3a')],this[a62_0xce2b('0x2e')][a62_0xce2b('0x4')][a62_0xce2b('0x3d')](_0x4b68a4[a62_0xce2b('0x26')]['document'][a62_0xce2b('0x12')],a62_0xce2b('0xf'),a62_0xce2b('0x29'),constants[a62_0xce2b('0x1d')]['GOLD'][a62_0xce2b('0x0')]));else{if(_0x376483===omnic['PremiumTier'][a62_0xce2b('0x30')]&&_0x2e37f8>constants[a62_0xce2b('0x1d')][a62_0xce2b('0x30')][a62_0xce2b('0x0')])throw new errors['DiscordError'](errors[a62_0xce2b('0x25')][a62_0xce2b('0x3a')],this[a62_0xce2b('0x2e')][a62_0xce2b('0x4')][a62_0xce2b('0x3d')](_0x4b68a4[a62_0xce2b('0x26')][a62_0xce2b('0x3c')][a62_0xce2b('0x12')],a62_0xce2b('0xf'),a62_0xce2b('0x29'),constants[a62_0xce2b('0x1d')][a62_0xce2b('0x30')]['GIVEAWAY_TIMEOUT']));}}else{if(_0x2e37f8>constants[a62_0xce2b('0x1d')]['GIVEAWAY_TIMEOUT'])throw new errors[(a62_0xce2b('0x43'))](errors[a62_0xce2b('0x25')][a62_0xce2b('0x2b')],this[a62_0xce2b('0x2e')][a62_0xce2b('0x4')][a62_0xce2b('0x3d')](_0x4b68a4[a62_0xce2b('0x26')]['document'][a62_0xce2b('0x12')],a62_0xce2b('0xf'),a62_0xce2b('0x19'),constants[a62_0xce2b('0x1d')][a62_0xce2b('0x0')]));}const _0x4a21c6=await Giveaway_1[a62_0xce2b('0x11')][a62_0xce2b('0x3')]({'guild':_0x4b68a4['guild']['id'],'ends':{'$gte':new Date()}});if(_0x376483){if(_0x376483===omnic[a62_0xce2b('0x42')][a62_0xce2b('0x14')]&&_0x4a21c6>=constants['LIMITS'][a62_0xce2b('0x14')][a62_0xce2b('0x20')])throw new errors[(a62_0xce2b('0x43'))](errors['BASTION_ERROR_TYPE'][a62_0xce2b('0x3a')],this[a62_0xce2b('0x2e')][a62_0xce2b('0x4')][a62_0xce2b('0x3d')](_0x4b68a4[a62_0xce2b('0x26')][a62_0xce2b('0x3c')][a62_0xce2b('0x12')],a62_0xce2b('0xf'),'membershipLimitGiveaways',constants[a62_0xce2b('0x1d')][a62_0xce2b('0x14')][a62_0xce2b('0x20')]));else{if(_0x376483===omnic[a62_0xce2b('0x42')]['PLATINUM']&&_0x4a21c6>=constants[a62_0xce2b('0x1d')][a62_0xce2b('0x30')][a62_0xce2b('0x20')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this['client']['locale']['getString'](_0x4b68a4['guild'][a62_0xce2b('0x3c')]['language'],'errors',a62_0xce2b('0x33'),constants['LIMITS'][a62_0xce2b('0x30')][a62_0xce2b('0x20')]));}}else{if(_0x4a21c6>=constants['LIMITS']['GIVEAWAYS'])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a62_0xce2b('0x2b')],this[a62_0xce2b('0x2e')][a62_0xce2b('0x4')][a62_0xce2b('0x3d')](_0x4b68a4['guild'][a62_0xce2b('0x3c')][a62_0xce2b('0x12')],a62_0xce2b('0xf'),a62_0xce2b('0x32'),constants['LIMITS'][a62_0xce2b('0x20')]));}}const _0x10288d=new Date(Date[a62_0xce2b('0x15')]()+_0x2e37f8*0x36ee80),_0x42faa2=await _0x4b68a4['channel'][a62_0xce2b('0x18')]({'embed':{'color':tesseract_1[a62_0xce2b('0x1b')][a62_0xce2b('0x5')][a62_0xce2b('0x23')],'author':{'name':a62_0xce2b('0xe')},'title':_0x199833,'description':a62_0xce2b('0x17')+this[a62_0xce2b('0x44')][a62_0xce2b('0x21')](a62_0xce2b('0x3e'))+a62_0xce2b('0x22'),'footer':{'text':_0x305377+a62_0xce2b('0x38')},'timestamp':_0x10288d}});await Giveaway_1['default'][a62_0xce2b('0x2d')]({'_id':_0x42faa2['id'],'channel':_0x42faa2[a62_0xce2b('0x40')]['id'],'guild':_0x42faa2[a62_0xce2b('0x26')]['id'],'winners':_0x305377,'ends':_0x10288d});for(const _0x2db126 of this[a62_0xce2b('0x44')]){await _0x42faa2[a62_0xce2b('0x1f')](_0x2db126)[a62_0xce2b('0x2c')](()=>{});}},this[a62_0xce2b('0x44')]=['🎊','🎉'],this['defaultTimeout']=0x3,this[a62_0xce2b('0x28')]=0x1;}};