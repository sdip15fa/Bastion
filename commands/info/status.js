const a58_0x96e2=['Bot\x20Owners','send','Environment','getConstant','Resolved','Shards','size','RED','Discord\x20Status','platform','version','IRIS','@bastion/tesseract','status\x20--discord','locale','GET','concat','constructor','default','indicator','\x20Servers\x0a','memberCount','Bot\x20ID','author.url','shard','guild','\x20•\x20','name','none','exports','channel','Bastion\x20v','humanize','bastion.website','client','then','application/json','catch','It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.\x20You\x20can\x20also\x20see\x20a\x20summary\x20of\x20Discord\x27s\x20status.','Shard\x20','https://status.discord.com','owners','apply','Uptime','process.memoryUsage().rss','/status','/premium)','\x20/\x20','ids','impact','Constants','../../package.json','this.guilds.cache.size','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','emoji','user','test','credentials','memoryUsage','status\x20--shard','BASTION_BOOT_TIME','stats','Unresolved','isPublicBastion','Developer','prefixes','ORANGE','Memory\x20Usage','description','Bastion\x20(Discord\x20Bot;\x20https://bastion.traction.one)','parseInt','discord','resolved_at','arch','status','map','Node\x20','json','toUpperCase','broadcastEval','reduce','toString','Presence','Command','COLORS','../../utils/durations','info','\x20on\x20','ownerID','env','join','toFixed','ping','displayAvatarURL','guilds','GREEN','minor','cache','../../utils/constants'];(function(_0x278d99,_0x96e244){const _0x2c0e51=function(_0x493afb){while(--_0x493afb){_0x278d99['push'](_0x278d99['shift']());}},_0x2d487d=function(){const _0x5a8091={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4cbcb8,_0x4c0cc9,_0x2318f1,_0x127de4){_0x127de4=_0x127de4||{};let _0xae3bd2=_0x4c0cc9+'='+_0x2318f1,_0x4fc414=0x0;for(let _0x4a6926=0x0,_0x46c0c3=_0x4cbcb8['length'];_0x4a6926<_0x46c0c3;_0x4a6926++){const _0x4cd0aa=_0x4cbcb8[_0x4a6926];_0xae3bd2+=';\x20'+_0x4cd0aa;const _0x39207e=_0x4cbcb8[_0x4cd0aa];_0x4cbcb8['push'](_0x39207e),_0x46c0c3=_0x4cbcb8['length'],_0x39207e!==!![]&&(_0xae3bd2+='='+_0x39207e);}_0x127de4['cookie']=_0xae3bd2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x24e388,_0x598c89){_0x24e388=_0x24e388||function(_0x48b28d){return _0x48b28d;};const _0x4aedf2=_0x24e388(new RegExp('(?:^|;\x20)'+_0x598c89['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2ca826=function(_0x1fdd15,_0x9d339e){_0x1fdd15(++_0x9d339e);};return _0x2ca826(_0x2c0e51,_0x96e244),_0x4aedf2?decodeURIComponent(_0x4aedf2[0x1]):undefined;}},_0x37cdee=function(){const _0x13a56e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x13a56e['test'](_0x5a8091['removeCookie']['toString']());};_0x5a8091['updateCookie']=_0x37cdee;let _0x42ee5b='';const _0x3689f8=_0x5a8091['updateCookie']();if(!_0x3689f8)_0x5a8091['setCookie'](['*'],'counter',0x1);else _0x3689f8?_0x42ee5b=_0x5a8091['getCookie'](null,'counter'):_0x5a8091['removeCookie']();};_0x2d487d();}(a58_0x96e2,0x10a));const a58_0x2c0e=function(_0x278d99,_0x96e244){_0x278d99=_0x278d99-0x0;let _0x2c0e51=a58_0x96e2[_0x278d99];return _0x2c0e51;};const a58_0x2318f1=function(){let _0x1301cc=!![];return function(_0x16edb0,_0x3c03d8){const _0x3408ab=_0x1301cc?function(){if(_0x3c03d8){const _0x19b2f7=_0x3c03d8[a58_0x2c0e('0x49')](_0x16edb0,arguments);return _0x3c03d8=null,_0x19b2f7;}}:function(){};return _0x1301cc=![],_0x3408ab;};}(),a58_0x4c0cc9=a58_0x2318f1(this,function(){const _0x3af100=function(){const _0x35aa6a=_0x3af100['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a58_0x2c0e('0x30')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x35aa6a[a58_0x2c0e('0x57')](a58_0x4c0cc9);};return _0x3af100();});a58_0x4c0cc9();'use strict';const tesseract_1=require(a58_0x2c0e('0x2b')),node_fetch_1=require('node-fetch'),constants=require(a58_0x2c0e('0x1e')),duration=require(a58_0x2c0e('0x11')),badges=require('../../utils/badges'),package_json_1=require(a58_0x2c0e('0x52'));module[a58_0x2c0e('0x3c')]=class StatusCommand extends tesseract_1[a58_0x2c0e('0xf')]{constructor(){super(a58_0x2c0e('0x6'),{'description':a58_0x2c0e('0x45'),'triggers':[a58_0x2c0e('0x5c'),a58_0x2c0e('0x12')],'arguments':{'boolean':[a58_0x2c0e('0x3'),a58_0x2c0e('0x37')]},'scope':a58_0x2c0e('0x38'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a58_0x2c0e('0x6'),a58_0x2c0e('0x5a'),a58_0x2c0e('0x2c')]}),this['exec']=async(_0x3c816c,_0x43a53e)=>{if(_0x43a53e[a58_0x2c0e('0x3')]){const _0x2fb0ce=await node_fetch_1[a58_0x2c0e('0x31')]('https://srhpyqt94yxb.statuspage.io/api/v2/summary.json',{'method':a58_0x2c0e('0x2e'),'headers':{'Accepts':a58_0x2c0e('0x43'),'Content-Type':a58_0x2c0e('0x43'),'User-Agent':a58_0x2c0e('0x1')}}),_0x2a89b3=await _0x2fb0ce[a58_0x2c0e('0x9')]();return await _0x3c816c[a58_0x2c0e('0x3d')][a58_0x2c0e('0x20')]({'embed':{'color':_0x2a89b3[a58_0x2c0e('0x6')][a58_0x2c0e('0x32')]===a58_0x2c0e('0x3b')?tesseract_1[a58_0x2c0e('0x51')]['COLORS'][a58_0x2c0e('0x1b')]:_0x2a89b3[a58_0x2c0e('0x6')]['indicator']===a58_0x2c0e('0x1c')?tesseract_1['Constants'][a58_0x2c0e('0x10')][a58_0x2c0e('0x61')]:tesseract_1[a58_0x2c0e('0x51')]['COLORS'][a58_0x2c0e('0x26')],'author':{'name':a58_0x2c0e('0x27'),'url':a58_0x2c0e('0x47')},'title':_0x2a89b3[a58_0x2c0e('0x6')][a58_0x2c0e('0x0')],'description':_0x2a89b3[a58_0x2c0e('0x6')][a58_0x2c0e('0x32')][a58_0x2c0e('0xa')](),'url':a58_0x2c0e('0x47'),'fields':_0x2a89b3['incidents'][a58_0x2c0e('0x7')](_0x3dd01a=>({'name':_0x3dd01a[a58_0x2c0e('0x3a')],'value':_0x3dd01a[a58_0x2c0e('0x6')]+a58_0x2c0e('0x4e')+_0x3dd01a[a58_0x2c0e('0x50')]+a58_0x2c0e('0x4e')+(_0x3dd01a[a58_0x2c0e('0x4')]?a58_0x2c0e('0x23'):a58_0x2c0e('0x5d'))+'\x0a'+new Date(_0x3dd01a['created_at'])['toLocaleString']()})),'timestamp':new Date()}})[a58_0x2c0e('0x44')](()=>{});}const _0x41558e=constants[a58_0x2c0e('0x5e')](this[a58_0x2c0e('0x41')][a58_0x2c0e('0x56')])&&await badges['fetchBadges'](_0x3c816c[a58_0x2c0e('0x38')][a58_0x2c0e('0x14')],_0x3c816c['guild']['id'])[a58_0x2c0e('0x42')](_0x4c2ce5=>_0x4c2ce5[a58_0x2c0e('0x9')]())[a58_0x2c0e('0x44')](()=>{}),_0x4ba32d=badges['getMembership'](_0x41558e?_0x41558e['badgeValue']:0x0),_0x1ec0ef=await this[a58_0x2c0e('0x41')][a58_0x2c0e('0x37')]['broadcastEval'](a58_0x2c0e('0x53')),_0x2fa36e=_0x43a53e[a58_0x2c0e('0x37')]?this[a58_0x2c0e('0x41')]['guilds'][a58_0x2c0e('0x1d')][a58_0x2c0e('0x25')]:_0x1ec0ef[a58_0x2c0e('0xc')]((_0x32c2ec,_0x4b15e6)=>_0x32c2ec+_0x4b15e6,0x0),_0x4c2114=_0x43a53e[a58_0x2c0e('0x37')]?this[a58_0x2c0e('0x41')][a58_0x2c0e('0x1a')][a58_0x2c0e('0x1d')]['map'](_0x525516=>_0x525516[a58_0x2c0e('0x34')]):await this[a58_0x2c0e('0x41')][a58_0x2c0e('0x37')][a58_0x2c0e('0xb')]('this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)'),_0x1525df=_0x4c2114[a58_0x2c0e('0xc')]((_0x5d7a1a,_0x40bfc5)=>_0x5d7a1a+_0x40bfc5,0x0),_0x5834e7=await this[a58_0x2c0e('0x41')]['shard']['broadcastEval'](a58_0x2c0e('0x4b')),_0x384f6c=_0x43a53e[a58_0x2c0e('0x37')]?process[a58_0x2c0e('0x59')]()['rss']:_0x5834e7[a58_0x2c0e('0xc')]((_0x25d5bf,_0x48c3ce)=>_0x25d5bf+_0x48c3ce,0x0),_0x15d654=[{'name':a58_0x2c0e('0x5f'),'value':'['+this[a58_0x2c0e('0x41')]['locale'][a58_0x2c0e('0x22')]('author.username')+']('+this[a58_0x2c0e('0x41')][a58_0x2c0e('0x2d')]['getConstant'](a58_0x2c0e('0x36'))+')','inline':!![]},{'name':a58_0x2c0e('0x35'),'value':this[a58_0x2c0e('0x41')]['user']['id'],'inline':!![]},{'name':a58_0x2c0e('0x1f'),'value':this[a58_0x2c0e('0x41')][a58_0x2c0e('0x58')][a58_0x2c0e('0x48')]['join']('\x0a')||'-','inline':!![]},{'name':'Default\x20Prefixes','value':this[a58_0x2c0e('0x41')]['configurations'][a58_0x2c0e('0x60')][a58_0x2c0e('0x16')]('\x20'),'inline':!![]},{'name':a58_0x2c0e('0x24'),'value':this['client'][a58_0x2c0e('0x37')]['count'][a58_0x2c0e('0xd')](),'inline':!![]}],_0x57b6ea=[{'name':a58_0x2c0e('0xe'),'value':_0x2fa36e+a58_0x2c0e('0x33')+_0x1525df+'\x20Users','inline':!![]},{'name':a58_0x2c0e('0x4a'),'value':duration[a58_0x2c0e('0x3f')](duration['between'](Date['now'](),Number[a58_0x2c0e('0x2')](process[a58_0x2c0e('0x15')][a58_0x2c0e('0x5b')]))),'inline':!![]},{'name':a58_0x2c0e('0x62'),'value':(_0x384f6c/0x400/0x400)[a58_0x2c0e('0x17')](0x2)+'MB','inline':!![]},{'name':a58_0x2c0e('0x21'),'value':a58_0x2c0e('0x8')+process['version']+a58_0x2c0e('0x13')+process[a58_0x2c0e('0x28')]+'\x20'+process[a58_0x2c0e('0x5')]+'.\x20'+(constants[a58_0x2c0e('0x5e')](this[a58_0x2c0e('0x41')]['user'])?'Connected\x20via\x20Starlink.':''),'inline':!![]}];return await _0x3c816c[a58_0x2c0e('0x3d')][a58_0x2c0e('0x20')]({'embed':{'color':_0x4ba32d?_0x4ba32d['color']:tesseract_1[a58_0x2c0e('0x51')][a58_0x2c0e('0x10')][a58_0x2c0e('0x2a')],'author':{'name':a58_0x2c0e('0x3e')+package_json_1[a58_0x2c0e('0x29')],'url':this[a58_0x2c0e('0x41')]['locale']['getConstant'](a58_0x2c0e('0x40'))},'title':(_0x43a53e[a58_0x2c0e('0x37')]?a58_0x2c0e('0x46')+this[a58_0x2c0e('0x41')][a58_0x2c0e('0x37')][a58_0x2c0e('0x4f')][a58_0x2c0e('0x16')]('\x20/\x20'):'')+'\x20Status','description':_0x4ba32d?_0x4ba32d[a58_0x2c0e('0x55')]+'\x20'+_0x4ba32d['name']:a58_0x2c0e('0x54')+this[a58_0x2c0e('0x41')][a58_0x2c0e('0x2d')][a58_0x2c0e('0x22')](a58_0x2c0e('0x40'))+a58_0x2c0e('0x4d'),'url':this[a58_0x2c0e('0x41')][a58_0x2c0e('0x2d')][a58_0x2c0e('0x22')](a58_0x2c0e('0x40'))+a58_0x2c0e('0x4c'),'thumbnail':{'url':this[a58_0x2c0e('0x41')][a58_0x2c0e('0x56')][a58_0x2c0e('0x19')]({'dynamic':!![],'size':0x200})},'fields':_0x43a53e['shard']?_0x57b6ea:_0x15d654[a58_0x2c0e('0x2f')](_0x57b6ea),'footer':{'text':(_0x43a53e[a58_0x2c0e('0x37')]?'':'Shard\x20'+this[a58_0x2c0e('0x41')][a58_0x2c0e('0x37')]['ids'][a58_0x2c0e('0x16')](a58_0x2c0e('0x4e'))+a58_0x2c0e('0x39'))+this['client']['ws'][a58_0x2c0e('0x18')]+'ms'},'timestamp':new Date()}});};}};