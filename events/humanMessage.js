const a142_0x12b1=['computeLevel','gamification','json','Team','channel','MAX_LEVEL','parseEmoji','constructor','handleLevelRoles','fetchApplication','createDM','handleVotingChannels','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','status','test','response','setTimeout','findOne','react','../utils/gamification','multiplier','replaceMessageVariables','guild','../models/TextChannel','cache','user','@bastion/tesseract','../models/Trigger','client','owner','getString','floor','find','catch','error','_id','enabled','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','content','has','roles','handleInstantResponses','makeRequest','responseReaction','length','responseMessage','bastion.name','DEFAUL_CURRENCY_REWARD_MULTIPLIER','default','tag','Level-up\x20Reward','parse','../utils/emojis','random','handleTriggers','IRIS','Constants','replace','locale','reaction','credit','../utils/variables','level','info','recentUsers','../models/Role','messages','filter','getConstant','discord.js','get','Logger','humanMessage','trigger','/chat/instant?message=','handleDirectMessageRelay','set','author','member','remove','add','reply','handleGamification','../utils/omnic','map','splice','push','document'];(function(_0x1bce1f,_0x12b154){const _0x29e9a6=function(_0x45a0c6){while(--_0x45a0c6){_0x1bce1f['push'](_0x1bce1f['shift']());}},_0x4f0269=function(){const _0x2fb380={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x521045,_0x43dfbf,_0x3d2861,_0x3d82fe){_0x3d82fe=_0x3d82fe||{};let _0x5d9167=_0x43dfbf+'='+_0x3d2861,_0xc2c9f4=0x0;for(let _0x450325=0x0,_0x1d3cf2=_0x521045['length'];_0x450325<_0x1d3cf2;_0x450325++){const _0x16cf25=_0x521045[_0x450325];_0x5d9167+=';\x20'+_0x16cf25;const _0x152e09=_0x521045[_0x16cf25];_0x521045['push'](_0x152e09),_0x1d3cf2=_0x521045['length'],_0x152e09!==!![]&&(_0x5d9167+='='+_0x152e09);}_0x3d82fe['cookie']=_0x5d9167;},'removeCookie':function(){return'dev';},'getCookie':function(_0x33fcc6,_0x351b69){_0x33fcc6=_0x33fcc6||function(_0x1966ee){return _0x1966ee;};const _0x36922b=_0x33fcc6(new RegExp('(?:^|;\x20)'+_0x351b69['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x32106a=function(_0x2942c1,_0x4a536b){_0x2942c1(++_0x4a536b);};return _0x32106a(_0x29e9a6,_0x12b154),_0x36922b?decodeURIComponent(_0x36922b[0x1]):undefined;}},_0x3d0282=function(){const _0x1e0176=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1e0176['test'](_0x2fb380['removeCookie']['toString']());};_0x2fb380['updateCookie']=_0x3d0282;let _0x2c9912='';const _0x328f24=_0x2fb380['updateCookie']();if(!_0x328f24)_0x2fb380['setCookie'](['*'],'counter',0x1);else _0x328f24?_0x2c9912=_0x2fb380['getCookie'](null,'counter'):_0x2fb380['removeCookie']();};_0x4f0269();}(a142_0x12b1,0xd8));const a142_0x29e9=function(_0x1bce1f,_0x12b154){_0x1bce1f=_0x1bce1f-0x0;let _0x29e9a6=a142_0x12b1[_0x1bce1f];return _0x29e9a6;};const a142_0x3d2861=function(){let _0x533e25=!![];return function(_0x5b2654,_0x54362b){const _0x4c4356=_0x533e25?function(){if(_0x54362b){const _0x5ad98c=_0x54362b['apply'](_0x5b2654,arguments);return _0x54362b=null,_0x5ad98c;}}:function(){};return _0x533e25=![],_0x4c4356;};}(),a142_0x43dfbf=a142_0x3d2861(this,function(){const _0xc21a20=function(){const _0x2e0c5b=_0xc21a20[a142_0x29e9('0x3d')](a142_0x29e9('0x43'))()[a142_0x29e9('0x3d')](a142_0x29e9('0x2'));return!_0x2e0c5b[a142_0x29e9('0x45')](a142_0x43dfbf);};return _0xc21a20();});a142_0x43dfbf();'use strict';const tesseract_1=require(a142_0x29e9('0x51')),discord_js_1=require(a142_0x29e9('0x23')),emojis=require(a142_0x29e9('0x12')),gamification=require(a142_0x29e9('0x4a')),omnic=require(a142_0x29e9('0x31')),variables=require(a142_0x29e9('0x1b')),Config_1=require('../models/Config'),Role_1=require(a142_0x29e9('0x1f')),TextChannel_1=require(a142_0x29e9('0x4e')),Trigger_1=require(a142_0x29e9('0x52'));module['exports']=class HumanMessageEvent extends tesseract_1['ModuleManagerEvent']{constructor(){super(a142_0x29e9('0x26')),this['handleLevelRoles']=async(_0x40ab6a,_0x5cea78)=>{const _0x55a72d=await Role_1[a142_0x29e9('0xe')][a142_0x29e9('0x57')]({'guild':_0x40ab6a['guild']['id'],'level':{'$exists':!![]}}),_0x44db37=_0x55a72d[a142_0x29e9('0x21')](_0x5daf22=>_0x5daf22['level']!==_0x5cea78&&_0x40ab6a[a142_0x29e9('0x4d')][a142_0x29e9('0x6')][a142_0x29e9('0x4f')]['has'](_0x5daf22[a142_0x29e9('0x0')])),_0x1368e1=_0x55a72d[a142_0x29e9('0x21')](_0x352711=>_0x352711[a142_0x29e9('0x1c')]===_0x5cea78&&_0x40ab6a[a142_0x29e9('0x4d')]['roles'][a142_0x29e9('0x4f')][a142_0x29e9('0x5')](_0x352711[a142_0x29e9('0x0')]));_0x1368e1[a142_0x29e9('0xa')]&&(await _0x40ab6a[a142_0x29e9('0x2c')][a142_0x29e9('0x6')][a142_0x29e9('0x2e')](_0x1368e1[a142_0x29e9('0x32')](_0x2308b5=>_0x2308b5['_id'])),await _0x40ab6a[a142_0x29e9('0x2c')][a142_0x29e9('0x6')][a142_0x29e9('0x2d')](_0x44db37['map'](_0x1f69ef=>_0x1f69ef['_id'])));},this[a142_0x29e9('0x30')]=async _0x495247=>{const _0x51de8f=this[a142_0x29e9('0x1e')][a142_0x29e9('0x24')](_0x495247[a142_0x29e9('0x4d')]['id'])||[];if(_0x51de8f['includes'](_0x495247[a142_0x29e9('0x2b')]['id']))return;const _0x85d96=_0x495247[a142_0x29e9('0x53')],_0x4108c5=_0x495247[a142_0x29e9('0x4d')],_0x5b0230=_0x495247[a142_0x29e9('0x2c')];if(!_0x4108c5['document'][a142_0x29e9('0x37')]||!_0x4108c5[a142_0x29e9('0x35')]['gamification'][a142_0x29e9('0x1')])return;if(_0x5b0230[a142_0x29e9('0x35')][a142_0x29e9('0x1c')]>=gamification[a142_0x29e9('0x3b')]||_0x5b0230['document']['experience']>=gamification['MAX_EXPERIENCE'](_0x4108c5[a142_0x29e9('0x35')][a142_0x29e9('0x37')][a142_0x29e9('0x4b')]))return;_0x5b0230[a142_0x29e9('0x35')]['experience']+=0x1;const _0x3e014f=gamification[a142_0x29e9('0x36')](_0x5b0230['document']['experience'],_0x4108c5[a142_0x29e9('0x35')][a142_0x29e9('0x37')][a142_0x29e9('0x4b')]);_0x3e014f>_0x5b0230[a142_0x29e9('0x35')][a142_0x29e9('0x1c')]&&(await _0x5b0230[a142_0x29e9('0x1a')](_0x3e014f*gamification[a142_0x29e9('0xd')],a142_0x29e9('0x10'),_0x5b0230[a142_0x29e9('0x35')]),_0x4108c5[a142_0x29e9('0x35')]['gamification'][a142_0x29e9('0x20')]&&_0x495247['channel'][a142_0x29e9('0x3')]({'embed':{'color':tesseract_1[a142_0x29e9('0x16')][a142_0x29e9('0x42')][a142_0x29e9('0x15')],'fields':[{'name':'LEVELED\x20UP!','value':_0x85d96[a142_0x29e9('0x18')][a142_0x29e9('0x55')](_0x4108c5['document']['language'],a142_0x29e9('0x1d'),'levelUp',_0x495247[a142_0x29e9('0x2b')]['tag'],_0x3e014f)}]}})['catch'](()=>{}),this[a142_0x29e9('0x3e')](_0x495247,_0x5b0230[a142_0x29e9('0x35')][a142_0x29e9('0x1c')])['catch'](tesseract_1[a142_0x29e9('0x25')][a142_0x29e9('0x59')])),_0x5b0230[a142_0x29e9('0x35')][a142_0x29e9('0x1c')]=_0x3e014f,await _0x5b0230['document']['save'](),_0x51de8f[a142_0x29e9('0x34')](_0x495247['author']['id']),this[a142_0x29e9('0x1e')][a142_0x29e9('0x2a')](_0x495247[a142_0x29e9('0x4d')]['id'],_0x51de8f),_0x495247[a142_0x29e9('0x53')][a142_0x29e9('0x47')](()=>{const _0x167723=this[a142_0x29e9('0x1e')][a142_0x29e9('0x24')](_0x495247[a142_0x29e9('0x4d')]['id']);_0x167723[a142_0x29e9('0x33')](_0x167723['indexOf'](_0x495247[a142_0x29e9('0x2b')]['id']),0x1),this[a142_0x29e9('0x1e')]['set'](_0x495247[a142_0x29e9('0x4d')]['id'],_0x167723);},0x32c8);},this[a142_0x29e9('0x14')]=async _0x5d8353=>{if(!_0x5d8353[a142_0x29e9('0x4')])return;const _0x4588d5=await Trigger_1['default'][a142_0x29e9('0x57')]({'guild':_0x5d8353[a142_0x29e9('0x4d')]['id']}),_0x2eb156=[],_0x4079eb=[];for(const _0x141947 of _0x4588d5){const _0x1a2ac5=new RegExp(_0x141947[a142_0x29e9('0x27')][a142_0x29e9('0x17')](/\?/g,'.')[a142_0x29e9('0x17')](/\*+/g,'.*'),'ig');if(!_0x1a2ac5[a142_0x29e9('0x45')](_0x5d8353[a142_0x29e9('0x4')]))continue;_0x141947[a142_0x29e9('0xb')]&&_0x2eb156[a142_0x29e9('0x34')](_0x141947[a142_0x29e9('0xb')]);if(_0x141947[a142_0x29e9('0x9')]){const _0x4e6353=emojis[a142_0x29e9('0x3c')](_0x141947[a142_0x29e9('0x9')]);_0x4e6353&&_0x4079eb[a142_0x29e9('0x34')](_0x4e6353[a142_0x29e9('0x19')]);}}_0x2eb156['length']&&_0x5d8353[a142_0x29e9('0x3a')][a142_0x29e9('0x3')]({'embed':{...JSON[a142_0x29e9('0x11')](variables[a142_0x29e9('0x4c')](JSON['stringify'](_0x2eb156[Math[a142_0x29e9('0x56')](Math[a142_0x29e9('0x13')]()*_0x2eb156[a142_0x29e9('0xa')])]),_0x5d8353)),'footer':{'text':_0x5d8353[a142_0x29e9('0x53')][a142_0x29e9('0x18')][a142_0x29e9('0x22')](a142_0x29e9('0xc'))+'\x20Trigger'}}})[a142_0x29e9('0x58')](tesseract_1[a142_0x29e9('0x25')][a142_0x29e9('0x59')]),_0x4079eb[a142_0x29e9('0xa')]&&_0x5d8353['react'](_0x4079eb[Math['floor'](Math[a142_0x29e9('0x13')]()*_0x4079eb['length'])])[a142_0x29e9('0x58')](tesseract_1[a142_0x29e9('0x25')]['error']);},this[a142_0x29e9('0x41')]=async _0x327903=>{const _0x4d7d6f=await TextChannel_1[a142_0x29e9('0xe')][a142_0x29e9('0x48')]({'_id':_0x327903[a142_0x29e9('0x3a')]['id'],'voting':!![]});if(!_0x4d7d6f)return;_0x327903['react']('👍')['catch'](()=>{}),_0x327903[a142_0x29e9('0x49')]('👎')[a142_0x29e9('0x58')](()=>{});},this[a142_0x29e9('0x7')]=async _0x2a5ff9=>{if(!_0x2a5ff9[a142_0x29e9('0x4')])return;const _0x189e80=await omnic[a142_0x29e9('0x8')](a142_0x29e9('0x28')+encodeURIComponent(_0x2a5ff9[a142_0x29e9('0x4')]))['then'](_0x18db8b=>_0x18db8b[a142_0x29e9('0x38')]());if(_0x189e80[a142_0x29e9('0x44')]!=='success')return;const _0x4cf0ef=_0x189e80[a142_0x29e9('0x46')]['reply']instanceof Array?_0x189e80[a142_0x29e9('0x46')][a142_0x29e9('0x2f')]:[_0x189e80[a142_0x29e9('0x46')][a142_0x29e9('0x2f')]];for(const _0x2798fd of _0x4cf0ef){await _0x2a5ff9[a142_0x29e9('0x3a')][a142_0x29e9('0x3')](_0x2798fd)[a142_0x29e9('0x58')](()=>{});}},this[a142_0x29e9('0x29')]=async _0x1abfa3=>{const _0x1dcee7=await Config_1[a142_0x29e9('0xe')]['findById'](_0x1abfa3[a142_0x29e9('0x53')]['user']['id']);if(_0x1dcee7['relayDirectMessages']&&_0x1abfa3[a142_0x29e9('0x4')]){const _0x555261=await _0x1abfa3[a142_0x29e9('0x53')][a142_0x29e9('0x3f')](),_0x215d31=_0x555261['owner']instanceof discord_js_1[a142_0x29e9('0x39')]?_0x555261[a142_0x29e9('0x54')][a142_0x29e9('0x54')][a142_0x29e9('0x50')]:_0x555261[a142_0x29e9('0x54')];if(_0x1abfa3['author']['id']===_0x215d31['id'])return;const _0x5b7cc6=await _0x215d31[a142_0x29e9('0x40')]();await _0x5b7cc6[a142_0x29e9('0x3')]({'embed':{'color':tesseract_1['Constants'][a142_0x29e9('0x42')][a142_0x29e9('0x15')],'author':{'name':_0x1abfa3[a142_0x29e9('0x2b')][a142_0x29e9('0xf')],'iconURL':_0x1abfa3['author']['displayAvatarURL']({'dynamic':!![],'size':0x40})},'description':_0x1abfa3[a142_0x29e9('0x4')],'footer':{'text':_0x1abfa3['author']['id']}}});}},this['exec']=async _0x51ffb6=>{_0x51ffb6[a142_0x29e9('0x4d')]?(this[a142_0x29e9('0x30')](_0x51ffb6)[a142_0x29e9('0x58')](()=>{}),this['handleTriggers'](_0x51ffb6)[a142_0x29e9('0x58')](()=>{}),this['handleVotingChannels'](_0x51ffb6)[a142_0x29e9('0x58')](()=>{})):(this[a142_0x29e9('0x7')](_0x51ffb6)[a142_0x29e9('0x58')](()=>{}),this[a142_0x29e9('0x29')](_0x51ffb6)['catch'](()=>{}));},this[a142_0x29e9('0x1e')]=new Map();}};