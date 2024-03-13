import { defineValaxyConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-sakura'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',

  themeConfig: {
    banner: {
      urls: [
        'https://s1.imagehub.cc/images/2024/03/13/f2df262865468251812b0e2c41bd021e.png',
        'https://s1.imagehub.cc/images/2024/03/03/9d0e3b5a0f4c02b5b74edd689de279b3.jpeg',
        'https://wrxinyue-images.s3.bitiful.net/wallpaper/Genshin%20Impact%20-%20Yae%20Miko%20(4)%20Cybust%20PC.mp4'
      ],
      title: 'Hello, shiroka',
      motto: 'nothing',
      style: '',
    },


    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    navbar: [{
      text: 'string',
      link: 'https://baidu.com',
    },],
    navbarTitle: [
      'Shiroka',
      '💮',
      '1205',

    ],


    footer: {
      since: 2024,
      powered: false,
      beian: {
        enable: true,
        icp: '',
      },

    },
  },

  unocss: { safelist },
})

