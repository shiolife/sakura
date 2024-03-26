import{_ as l}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-CvYlJ7WM.js";import{j as f,p as r,o as c,b as u,w as t,e as g,l as e,h as o,i as p}from"./app-LoprukbN.js";const h=o("p",null,"3dmigoto可能出现的bug及解决方法收录",-1),_=o("p",null,"引言：本文旨在收录在3dm与mod皆正确安装情况下所出现过的各种问题，以及验证可行的解决方式。因安装错误、路径错误等原因导致的问题不会收录在内。",-1),b=o("p",null,"BUG 1.游戏启动后立即闪退 Bug描述：在开启3dm的情况下无法启动原神，不开启3dm则可以正常启动。此bug多出现在游戏闪退后。 Bug原因： 3dmigoto/mods文件夹下存在异常文件。 解决方法： ⦁ 检查最近安装的mod，禁用或去除部分mod后尝试启动游戏，以此确认剩余的mod内是否存在问题文件。在此基础上用二分法定位出现问题的mod或文件，并将其删除。 ⦁ 如果尝试了以上方法仍无法启动，重新解压并配置一个新的可正常使用的3dm，然后将原本的mod文件逐个转移到新的3dm内。",-1),$=o("p",null,"BUG 2.游戏画面卡死 Bug描述：游戏画面卡死，有时会有一小块区域能正常显示。但除此以外游戏没有其他问题，能进行操作，声音也正常。按“F6”禁用所有mod后游戏恢复正常。 Bug原因：具体原因未知，可能是电脑内存、运存被占满导致的画面卡死。 具体可能导致此类现象的原因有：电脑性能较低；后台程序过多；mod冲突导致异常。 解决方法：重启电脑，清理后台程序并重新尝试启动游戏，如果还是卡死，采用二分法检查所安装的mod（具体同bug1）直至找到导致冲突的mod。 目前已经出现的此类mod有“芙宁娜-待机动画泡泡改王座”mod，该mod会导致仙灵的模型异常，并且在玩家或同房间的其他玩家装备仙灵时有概率导致画面卡死。",-1),v=o("figure",null,[o("img",{src:"https://s1.imagehub.cc/images/2024/02/28/c3df2ae10f81ff447e3d47a35395ca2f.th.png",alt:`（图例：模型异常的仙灵）
`,loading:"lazy",decoding:"async"})],-1),B=o("p",null,[p("​ "),o("p",{style:{"text-align":"right",color:"red"}},"2024.2.27"),o("p",{style:{"text-align":"right",color:"red"}},"马克图布")],-1),y=o("figure",null,[o("img",{src:"https://s1.imagehub.cc/images/2024/02/14/fd0f5df21faac5b72ce1b147319f418c.png",alt:"我很可爱，请给我钱",loading:"lazy",decoding:"async"})],-1),V={__name:"9534",setup(k,{expose:d}){const s=JSON.parse('{"title":"3dm可能出现的bug及解决方法 -马克图布","description":"","frontmatter":{"title":"3dm可能出现的bug及解决方法 -马克图布","date":"2024-02-27T18:32:03.000Z","tags":null},"headers":[],"relativePath":"pages/posts/9534.md","path":"/home/runner/work/sakura/sakura/pages/posts/9534.md","lastUpdated":1711412314000}'),m=f(),n=s.frontmatter||{};return m.meta.frontmatter=Object.assign(m.meta.frontmatter||{},s.frontmatter||{}),r("pageData",s),r("valaxy:frontmatter",n),globalThis.$frontmatter=n,d({frontmatter:{title:"3dm可能出现的bug及解决方法 -马克图布",date:"2024-02-27T18:32:03.000Z",tags:null}}),(a,w)=>{const i=l;return c(),u(i,{frontmatter:g(n)},{"main-content-md":t(()=>[h,_,b,$,v,B,y]),"main-header":t(()=>[e(a.$slots,"main-header")]),"main-header-after":t(()=>[e(a.$slots,"main-header-after")]),"main-nav":t(()=>[e(a.$slots,"main-nav")]),"main-content":t(()=>[e(a.$slots,"main-content")]),"main-content-after":t(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[e(a.$slots,"main-nav-after")]),comment:t(()=>[e(a.$slots,"comment")]),footer:t(()=>[e(a.$slots,"footer")]),aside:t(()=>[e(a.$slots,"aside")]),"aside-custom":t(()=>[e(a.$slots,"aside-custom")]),default:t(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{V as default};
