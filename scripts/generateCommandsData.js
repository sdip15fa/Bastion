const a203_0x3080=['__esModule','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','path','owner','stringify','writeFileSync','syntax','isDirectory','./locales/en_us/commands.yaml','clientPermission','endsWith','unsafe','triggers','apply','./assets/commands.json','scope','userPermissions','utf-8','yaml','readdirSync','constructor','name','existsSync','test','cooldown','.js','relative','description','resolve','filter','ratelimit','nsfw','./commands/','typing','schedulable'];(function(_0x33d769,_0x308092){const _0x41dff7=function(_0x6ea007){while(--_0x6ea007){_0x33d769['push'](_0x33d769['shift']());}},_0x383cd0=function(){const _0x577ec1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xdb4339,_0x32f16b,_0x1cdebb,_0x450d70){_0x450d70=_0x450d70||{};let _0x4033c3=_0x32f16b+'='+_0x1cdebb,_0x32f4b9=0x0;for(let _0x22afb0=0x0,_0x193c5e=_0xdb4339['length'];_0x22afb0<_0x193c5e;_0x22afb0++){const _0x3ae0d1=_0xdb4339[_0x22afb0];_0x4033c3+=';\x20'+_0x3ae0d1;const _0x43200c=_0xdb4339[_0x3ae0d1];_0xdb4339['push'](_0x43200c),_0x193c5e=_0xdb4339['length'],_0x43200c!==!![]&&(_0x4033c3+='='+_0x43200c);}_0x450d70['cookie']=_0x4033c3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5223b8,_0xd7cb49){_0x5223b8=_0x5223b8||function(_0x12c64e){return _0x12c64e;};const _0x1f0e46=_0x5223b8(new RegExp('(?:^|;\x20)'+_0xd7cb49['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3f5bc0=function(_0x4bff37,_0x4cc09c){_0x4bff37(++_0x4cc09c);};return _0x3f5bc0(_0x41dff7,_0x308092),_0x1f0e46?decodeURIComponent(_0x1f0e46[0x1]):undefined;}},_0x22e27a=function(){const _0x2536cd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2536cd['test'](_0x577ec1['removeCookie']['toString']());};_0x577ec1['updateCookie']=_0x22e27a;let _0x569796='';const _0x4ae37e=_0x577ec1['updateCookie']();if(!_0x4ae37e)_0x577ec1['setCookie'](['*'],'counter',0x1);else _0x4ae37e?_0x569796=_0x577ec1['getCookie'](null,'counter'):_0x577ec1['removeCookie']();};_0x383cd0();}(a203_0x3080,0x13d));const a203_0x41df=function(_0x33d769,_0x308092){_0x33d769=_0x33d769-0x0;let _0x41dff7=a203_0x3080[_0x33d769];return _0x41dff7;};const a203_0x1cdebb=function(){let _0x4fe61f=!![];return function(_0x533aa3,_0x252e7b){const _0x4f4f71=_0x4fe61f?function(){if(_0x252e7b){const _0x42734e=_0x252e7b[a203_0x41df('0x15')](_0x533aa3,arguments);return _0x252e7b=null,_0x42734e;}}:function(){};return _0x4fe61f=![],_0x4f4f71;};}(),a203_0x32f16b=a203_0x1cdebb(this,function(){const _0x3c7951=function(){const _0x57af83=_0x3c7951[a203_0x41df('0x1c')](a203_0x41df('0x9'))()[a203_0x41df('0x1c')](a203_0x41df('0x8'));return!_0x57af83[a203_0x41df('0x1f')](a203_0x32f16b);};return _0x3c7951();});a203_0x32f16b();'use strict';Object['defineProperty'](exports,a203_0x41df('0x7'),{'value':!![]});const fs=require('fs'),path=require(a203_0x41df('0xa')),yaml=require(a203_0x41df('0x1a')),walkDirectory=_0x301f40=>{const _0x4bc743=[];return function _0x229efc(_0x2bffe2){const _0x2bb7f7=fs[a203_0x41df('0x1b')](_0x2bffe2);for(const _0xca814b of _0x2bb7f7){const _0x5a7f4f=path['join'](_0x2bffe2,_0xca814b);if(fs['statSync'](_0x5a7f4f)[a203_0x41df('0xf')]())_0x229efc(_0x5a7f4f);else _0x4bc743['push'](_0x5a7f4f);}}(_0x301f40),_0x4bc743;},commandsDirectory=path[a203_0x41df('0x0')](a203_0x41df('0x4'));if(fs[a203_0x41df('0x1e')](commandsDirectory)){const files=walkDirectory(commandsDirectory),commandStrings={},commands={};for(const file of files[a203_0x41df('0x1')](_0x2577c6=>_0x2577c6[a203_0x41df('0x12')](a203_0x41df('0x21')))){const Command=require(file),command=new Command(),commandCategory=path['dirname'](path[a203_0x41df('0x22')](commandsDirectory,file));commandStrings[command[a203_0x41df('0x1d')]]=command[a203_0x41df('0x23')],commandCategory in commands?commands[commandCategory]['push']({'name':command[a203_0x41df('0x1d')],'description':command[a203_0x41df('0x23')],'triggers':command['triggers'],'scope':command['scope'],'owner':command[a203_0x41df('0xb')],'typing':command[a203_0x41df('0x5')],'schedulable':command[a203_0x41df('0x6')],'unsafe':command[a203_0x41df('0x13')],'nsfw':command[a203_0x41df('0x3')],'cooldown':command[a203_0x41df('0x20')],'ratelimit':command[a203_0x41df('0x2')],'clientPermission':command['clientPermission'],'userPermissions':command[a203_0x41df('0x18')],'syntax':command[a203_0x41df('0xe')]}):commands[commandCategory]=[{'name':command[a203_0x41df('0x1d')],'description':command['description'],'triggers':command[a203_0x41df('0x14')],'scope':command[a203_0x41df('0x17')],'owner':command[a203_0x41df('0xb')],'typing':command['typing'],'schedulable':command[a203_0x41df('0x6')],'unsafe':command[a203_0x41df('0x13')],'nsfw':command[a203_0x41df('0x3')],'cooldown':command['cooldown'],'ratelimit':command['ratelimit'],'clientPermission':command[a203_0x41df('0x11')],'userPermissions':command[a203_0x41df('0x18')],'syntax':command[a203_0x41df('0xe')]}];}fs[a203_0x41df('0xd')](a203_0x41df('0x10'),yaml['stringify'](commandStrings),{'encoding':a203_0x41df('0x19')}),fs['writeFileSync'](a203_0x41df('0x16'),JSON[a203_0x41df('0xc')](commands),{'encoding':a203_0x41df('0x19')});}