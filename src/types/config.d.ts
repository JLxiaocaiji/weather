import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '@/enums/menuEnum'
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum
} from '@/enums/appEnum'

import { CacheTypeEnum } from '@/enums/cacheEnum'

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko'

export interface MenuSetting {
  // bgColor: string
  fixed: boolean
  collapsed: boolean
  canDrag: boolean
  show: boolean
  hidden: boolean
  split: boolean
  menuWidth: number
  mode: MenuModeEnum
  type: MenuTypeEnum
  theme: ThemeEnum
  topMenuAlign: 'start' | 'center' | 'end'
  trigger: TriggerEnum
  accordion: boolean
  closeMixSidebarOnChange: boolean
  collapsedShowTitle: boolean
  mixSideTrigger: MixSidebarTriggerEnum
  mixSideFixed: boolean
}

export interface MultiTabsSetting {
  cache: boolean
  show: boolean
  showQuick: boolean
  canDrag: boolean
  showRedo: boolean
  showFold: boolean
  theme: string
}

export interface HeaderSetting {
  // bgColor: string
  fixed: boolean
  show: boolean
  theme: ThemeEnum
  // Turn on full screen
  showFullScreen: boolean
  // Whether to show the lock screen
  useLockPage: boolean
  // Show document button
  showDoc: boolean
  // Show message center button
  showNotice: boolean
  showSearch: boolean
}

export interface LocaleSetting {
  showPicker: boolean
  // Current language
  locale: LocaleType
  // default language
  fallback: LocaleType
  // available Locales
  availableLocales: LocaleType[]
}

export interface TransitionSetting {
  //  Whether to open the page switching animation  是否打开页面切换动画
  enable: boolean
  // Route basic switching animation    路由基本切换动画
  basicTransition: RouterTransitionEnum
  // Whether to open page switching loading 是否打开页面切换加载
  openPageLoading: boolean
  // Whether to open the top progress bar 是否打开顶部进度条
  openNProgress: boolean
}

// 系统配置
export interface ProjectConfig {
  // Storage location of permission related information 权限相关信息的存储位置
  permissionCacheType: CacheTypeEnum
  // Whether to show the configuration button 是否显示配置按钮
  showSettingButton: boolean
  // Whether to show the theme switch button 是否显示主题切换按钮
  showDarkModeToggle: boolean
  // Configure where the button is displayed    配置按钮的显示位置
  settingButtonPosition: SettingButtonPositionEnum
  // Permission mode    权限模式
  permissionMode: PermissionModeEnum
  // Session timeout processing     会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum
  // Website gray mode, open for possible mourning dates    网站灰色模式，开放可能的哀悼日期
  grayMode: boolean
  // Whether to turn on the color weak mode 是否开启颜色弱模式
  colorWeak: boolean
  // Theme color
  themeColor: string

  // The main interface is displayed in full screen, the menu is not displayed, and the top 全屏显示主界面，不显示菜单，顶部显示
  fullContent: boolean
  // content width  内容宽度
  contentMode: ContentEnum
  // Whether to display the logo    是否显示logo
  showLogo: boolean
  // Whether to show the global footer 是否显示全局页脚
  showFooter: boolean
  // menuType: MenuTypeEnum;
  headerSetting: HeaderSetting
  // menuSetting
  menuSetting: MenuSetting
  // Multi-tab settings
  multiTabsSetting: MultiTabsSetting
  // Animation configuration    动画配置
  transitionSetting: TransitionSetting
  // pageLayout whether to enable keep-alive
  openKeepAlive: boolean
  // Lock screen time   锁定屏幕时间
  lockTime: number
  // Show breadcrumbs   显示面包屑
  showBreadCrumb: boolean
  // Show breadcrumb icon 显示面包屑icon
  showBreadCrumbIcon: boolean
  // Use error-handler-plugin
  useErrorHandle: boolean
  // Whether to open back to top
  useOpenBackTop: boolean
  // Is it possible to embed iframe pages
  canEmbedIFramePage: boolean
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: boolean
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  removeAllHttpPending: boolean
}

export interface GlobConfig {
  // Site title
  title: string
  // Service interface url
  apiUrl: string
  domainUrl: string
  // Upload url (作废)
  uploadUrl?: string
  openSso?: string
  openQianKun?: string
  casBaseUrl?: string
  // onlineview url
  viewUrl?: string
  //  Service interface url prefix
  urlPrefix?: string
  // Project abbreviation
  shortName: string
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string
  // Service interface url
  VITE_GLOB_API_URL: string
  VITE_USE_MOCK: string
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string
  //是否开启单点登录
  VITE_GLOB_APP_OPEN_SSO: string
  //是否开启微应用模式
  VITE_GLOB_APP_OPEN_QIANKUN: string
  //单点服务端地址
  VITE_GLOB_APP_CAS_BASE_URL: string
  VITE_GLOB_DOMAIN_URL: string
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string
  // view url
  VITE_GLOB_ONLINE_VIEW_URL?: string
}
