const a172_0x96a0=['_id','map','get','catch','Suggestion\x20','attachments','roles','emoji','bot','url','footer','exports','parseEmoji','announcementsChannelId','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','has','Auto\x20Removed\x20via\x20Reaction\x20Roles','default','suggestionsChannelId','member','starboardChannelId','messageReactionAdd','value','@bastion/tesseract','Source','Listener','animated','YELLOW','includes','Added\x20via\x20Reaction\x20Roles','starboard','handleReactionRoles','fetch','user','handleStarboard','height','findOne','\x20announced\x20via\x20Announcement\x20Pinnning.','../utils/memcache','RED','message','Rejected','Constants','color','content','constructor','tag','guild','startsWith','displayAvatarURL','users','remove','title','push','add','length','edit','channels','COLORS','MANAGE_CHANNELS','exclusive','INDIGO','handleReactionPinning','LISTENER_MODE','send','text','cache','values','getDocument','MANAGE_MESSAGES','GREEN','partial','handleSuggestions','exec','name','channel','MANAGE_GUILD','permissionsFor','embeds'];(function(_0x307ad7,_0x96a0ad){const _0x141764=function(_0x3d5afb){while(--_0x3d5afb){_0x307ad7['push'](_0x307ad7['shift']());}},_0xcdc064=function(){const _0xb9af24={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x59c488,_0xd4436d,_0x471bf3,_0xaedeb6){_0xaedeb6=_0xaedeb6||{};let _0x4b614d=_0xd4436d+'='+_0x471bf3,_0xc128a6=0x0;for(let _0x58df51=0x0,_0x12bd04=_0x59c488['length'];_0x58df51<_0x12bd04;_0x58df51++){const _0x63d176=_0x59c488[_0x58df51];_0x4b614d+=';\x20'+_0x63d176;const _0x4cdb33=_0x59c488[_0x63d176];_0x59c488['push'](_0x4cdb33),_0x12bd04=_0x59c488['length'],_0x4cdb33!==!![]&&(_0x4b614d+='='+_0x4cdb33);}_0xaedeb6['cookie']=_0x4b614d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3f4e76,_0x4ee3ea){_0x3f4e76=_0x3f4e76||function(_0x449669){return _0x449669;};const _0x4d37d0=_0x3f4e76(new RegExp('(?:^|;\x20)'+_0x4ee3ea['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x54dc5f=function(_0x309378,_0x155c33){_0x309378(++_0x155c33);};return _0x54dc5f(_0x141764,_0x96a0ad),_0x4d37d0?decodeURIComponent(_0x4d37d0[0x1]):undefined;}},_0xbf2381=function(){const _0x9fd6ca=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9fd6ca['test'](_0xb9af24['removeCookie']['toString']());};_0xb9af24['updateCookie']=_0xbf2381;let _0x1036f9='';const _0x303e81=_0xb9af24['updateCookie']();if(!_0x303e81)_0xb9af24['setCookie'](['*'],'counter',0x1);else _0x303e81?_0x1036f9=_0xb9af24['getCookie'](null,'counter'):_0xb9af24['removeCookie']();};_0xcdc064();}(a172_0x96a0,0x12f));const a172_0x1417=function(_0x307ad7,_0x96a0ad){_0x307ad7=_0x307ad7-0x0;let _0x141764=a172_0x96a0[_0x307ad7];return _0x141764;};const a172_0x471bf3=function(){let _0x4af7f8=!![];return function(_0x308251,_0x1858aa){const _0x23a6de=_0x4af7f8?function(){if(_0x1858aa){const _0x4e45ef=_0x1858aa['apply'](_0x308251,arguments);return _0x1858aa=null,_0x4e45ef;}}:function(){};return _0x4af7f8=![],_0x23a6de;};}(),a172_0xd4436d=a172_0x471bf3(this,function(){const _0xa62e45=function(){const _0x25fc84=_0xa62e45[a172_0x1417('0x3f')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a172_0x1417('0x3f')](a172_0x1417('0x20'));return!_0x25fc84['test'](a172_0xd4436d);};return _0xa62e45();});a172_0xd4436d();'use strict';const tesseract_1=require(a172_0x1417('0x29')),ReactionRoleGroup_1=require('../models/ReactionRoleGroup'),Role_1=require('../models/Role'),emojis=require('../utils/emojis'),memcache_1=require(a172_0x1417('0x38'));module[a172_0x1417('0x1c')]=class MessageReactionAddListener extends tesseract_1[a172_0x1417('0x2b')]{constructor(){super(a172_0x1417('0x27'),{'mode':tesseract_1[a172_0x1417('0x3c')][a172_0x1417('0x1')]['ON']}),this[a172_0x1417('0xa')]=async(_0x42a9bc,_0x1804b4)=>{if(_0x1804b4[a172_0x1417('0x33')][a172_0x1417('0x19')])return;if(!['✅','❎'][a172_0x1417('0x2e')](_0x42a9bc[a172_0x1417('0x18')]['name']))return;if(!_0x42a9bc[a172_0x1417('0x3a')][a172_0x1417('0xd')][a172_0x1417('0xf')](_0x1804b4)[a172_0x1417('0x21')](a172_0x1417('0x4d')))return;const _0x458d2c=_0x42a9bc[a172_0x1417('0x3a')],_0x10302c=_0x458d2c[a172_0x1417('0x10')][0x0];if(!_0x10302c)return;if(!_0x10302c[a172_0x1417('0x46')][a172_0x1417('0x42')]('Suggestion'))return;_0x10302c[a172_0x1417('0x3d')]=_0x42a9bc[a172_0x1417('0x18')]['name']==='✅'?tesseract_1[a172_0x1417('0x3c')][a172_0x1417('0x4c')][a172_0x1417('0x8')]:_0x42a9bc[a172_0x1417('0x18')][a172_0x1417('0xc')]==='❎'?tesseract_1[a172_0x1417('0x3c')]['COLORS'][a172_0x1417('0x39')]:tesseract_1['Constants'][a172_0x1417('0x4c')][a172_0x1417('0x4f')],_0x10302c[a172_0x1417('0x46')]=a172_0x1417('0x15')+(_0x42a9bc['emoji'][a172_0x1417('0xc')]==='✅'?'Accepted':_0x42a9bc[a172_0x1417('0x18')][a172_0x1417('0xc')]==='❎'?a172_0x1417('0x3b'):''),await _0x458d2c[a172_0x1417('0x4a')]({'embed':_0x10302c});},this['handleStarboard']=async(_0x1ce713,_0x5bfbd3,_0x13e2ad)=>{if(!['🌠','🌟','⭐'][a172_0x1417('0x2e')](_0x1ce713['emoji'][a172_0x1417('0xc')]))return;if(_0x5bfbd3['roles'][a172_0x1417('0x4')]['size']<=0x1)return;if(_0x1ce713['message'][a172_0x1417('0x1f')]['id']===_0x5bfbd3[a172_0x1417('0x33')]['id'])return;const _0x2fb688=_0x1ce713[a172_0x1417('0x3a')][a172_0x1417('0x16')]['filter'](_0x55c58d=>Boolean(_0x55c58d[a172_0x1417('0x35')]&&_0x55c58d['width'])),_0x11e02d=_0x2fb688['first']();if(!_0x1ce713[a172_0x1417('0x3a')]['content']&&!_0x11e02d)return;const _0x33916b=memcache_1['default'][a172_0x1417('0x13')](a172_0x1417('0x30'));if(_0x33916b&&_0x33916b instanceof Array&&_0x33916b[a172_0x1417('0x2e')](_0x1ce713['message']['id']))return;await _0x13e2ad[a172_0x1417('0x2')]({'embed':{'color':tesseract_1[a172_0x1417('0x3c')][a172_0x1417('0x4c')][a172_0x1417('0x2d')],'author':{'name':_0x1ce713[a172_0x1417('0x3a')][a172_0x1417('0x1f')][a172_0x1417('0x40')],'iconURL':_0x1ce713['message']['author'][a172_0x1417('0x43')]({'dynamic':!![],'size':0x40})},'description':_0x1ce713[a172_0x1417('0x3a')][a172_0x1417('0x3e')],'fields':[{'name':a172_0x1417('0x2a'),'value':'[Click\x20here\x20to\x20Jump\x20to\x20the\x20Message.]('+_0x1ce713['message']['url']+')','inline':!![]}],'image':{'url':_0x11e02d?_0x11e02d[a172_0x1417('0x1a')]:null},'footer':{'text':'Starboard'}}}),_0x33916b&&_0x33916b instanceof Array&&_0x33916b[a172_0x1417('0x47')](_0x1ce713[a172_0x1417('0x3a')]['id']),memcache_1['default']['set'](a172_0x1417('0x30'),_0x33916b?_0x33916b:[_0x1ce713[a172_0x1417('0x3a')]['id']]);},this['handleReactionAnnouncement']=async(_0x1f1383,_0x4e2377,_0x1d58ef)=>{if(!['📣','📢'][a172_0x1417('0x2e')](_0x1f1383['emoji']['name']))return;if(!_0x4e2377['permissions'][a172_0x1417('0x21')](a172_0x1417('0xe')))return;const _0x52e4a7=_0x4e2377[a172_0x1417('0x33')][a172_0x1417('0x40')]+a172_0x1417('0x37'),_0xff12d=_0x1f1383[a172_0x1417('0x3a')]['embeds']&&_0x1f1383[a172_0x1417('0x3a')][a172_0x1417('0x10')][a172_0x1417('0x49')]?_0x1f1383[a172_0x1417('0x3a')][a172_0x1417('0x10')][0x0]:{};_0xff12d[a172_0x1417('0x1b')]={..._0xff12d[a172_0x1417('0x1b')],'text':_0xff12d[a172_0x1417('0x1b')]&&_0xff12d[a172_0x1417('0x1b')][a172_0x1417('0x3')]?_0x52e4a7+'\x20•\x20'+_0xff12d[a172_0x1417('0x1b')][a172_0x1417('0x3')]:_0x52e4a7},await _0x1d58ef[a172_0x1417('0x2')](_0x1f1383[a172_0x1417('0x3a')][a172_0x1417('0x3e')],{'embed':_0xff12d,'files':[..._0x1f1383[a172_0x1417('0x3a')][a172_0x1417('0x16')][a172_0x1417('0x5')]()]});},this[a172_0x1417('0x0')]=async(_0x89f411,_0x535f0a)=>{if(!['📌','📍'][a172_0x1417('0x2e')](_0x89f411[a172_0x1417('0x18')][a172_0x1417('0xc')]))return;if(!_0x89f411[a172_0x1417('0x3a')][a172_0x1417('0xd')][a172_0x1417('0xf')](_0x535f0a)[a172_0x1417('0x21')](a172_0x1417('0x7')))return;await _0x89f411['message']['pin']();},this['handleReactionRoles']=async(_0x1cb99d,_0x29cbbe)=>{if(_0x29cbbe[a172_0x1417('0x33')][a172_0x1417('0x19')])return;const _0x58984c=await ReactionRoleGroup_1[a172_0x1417('0x23')]['findById'](_0x1cb99d[a172_0x1417('0x3a')]['id']);if(!_0x58984c)return;const _0x3e5353=_0x1cb99d[a172_0x1417('0x18')]['id']?'<'+(_0x1cb99d[a172_0x1417('0x18')][a172_0x1417('0x2c')]?'a':'')+':'+_0x1cb99d['emoji'][a172_0x1417('0xc')]+':'+_0x1cb99d[a172_0x1417('0x18')]['id']+'>':_0x1cb99d[a172_0x1417('0x18')][a172_0x1417('0xc')],_0x4bb89b=emojis[a172_0x1417('0x1d')](_0x3e5353);if(_0x4bb89b){const _0x50c67c=await Role_1[a172_0x1417('0x23')][a172_0x1417('0x36')]({'$or':_0x58984c[a172_0x1417('0x17')][a172_0x1417('0x12')](_0x59b4d8=>({'_id':_0x59b4d8})),'guild':_0x1cb99d[a172_0x1417('0x3a')][a172_0x1417('0x41')]['id'],'emoji':_0x4bb89b[a172_0x1417('0x28')]});if(!_0x50c67c)return;if(_0x58984c[a172_0x1417('0x4e')]){for(const _0x21918c of _0x1cb99d['message']['reactions']['cache']['filter'](_0x5681e7=>_0x5681e7[a172_0x1417('0x44')][a172_0x1417('0x4')][a172_0x1417('0x21')](_0x29cbbe[a172_0x1417('0x33')]['id'])&&_0x5681e7[a172_0x1417('0x18')][a172_0x1417('0xc')]!==_0x1cb99d[a172_0x1417('0x18')][a172_0x1417('0xc')])['values']()){await _0x21918c[a172_0x1417('0x44')][a172_0x1417('0x45')](_0x29cbbe)[a172_0x1417('0x14')](()=>{});}await _0x29cbbe[a172_0x1417('0x17')][a172_0x1417('0x45')](_0x58984c[a172_0x1417('0x17')],a172_0x1417('0x22'));}await _0x29cbbe[a172_0x1417('0x17')][a172_0x1417('0x48')](_0x50c67c[a172_0x1417('0x11')],a172_0x1417('0x2f'));}},this[a172_0x1417('0xb')]=async(_0x2aa148,_0x2ca4a3)=>{_0x2aa148[a172_0x1417('0x9')]&&(_0x2aa148=await _0x2aa148['fetch']());_0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x9')]&&(_0x2aa148[a172_0x1417('0x3a')]=await _0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x32')]());if(!_0x2aa148['message']['guild'])return;const _0x591e86=_0x2aa148[a172_0x1417('0x3a')]['guild'][a172_0x1417('0x25')](_0x2ca4a3);this[a172_0x1417('0x31')](_0x2aa148,_0x591e86)['catch'](()=>{});const _0x4df2b2=await _0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x41')][a172_0x1417('0x6')]();_0x4df2b2[a172_0x1417('0x24')]&&_0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0xd')]['id']===_0x4df2b2[a172_0x1417('0x24')]&&this[a172_0x1417('0xa')](_0x2aa148,_0x591e86)['catch'](()=>{}),_0x4df2b2[a172_0x1417('0x26')]&&_0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x41')]['channels'][a172_0x1417('0x4')]['has'](_0x4df2b2['starboardChannelId'])&&this[a172_0x1417('0x34')](_0x2aa148,_0x591e86,_0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x41')][a172_0x1417('0x4b')][a172_0x1417('0x4')][a172_0x1417('0x13')](_0x4df2b2[a172_0x1417('0x26')]))[a172_0x1417('0x14')](()=>{}),_0x4df2b2['reactionAnnouncements']&&_0x2aa148[a172_0x1417('0x3a')][a172_0x1417('0x41')]['channels'][a172_0x1417('0x4')][a172_0x1417('0x21')](_0x4df2b2[a172_0x1417('0x1e')])&&this['handleReactionAnnouncement'](_0x2aa148,_0x591e86,_0x2aa148[a172_0x1417('0x3a')]['guild']['channels']['cache']['get'](_0x4df2b2['announcementsChannelId']))[a172_0x1417('0x14')](()=>{}),_0x4df2b2['reactionPinning']&&this[a172_0x1417('0x0')](_0x2aa148,_0x591e86)[a172_0x1417('0x14')](()=>{});};}};