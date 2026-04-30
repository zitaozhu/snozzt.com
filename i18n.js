// Client-side i18n for snozzt.com
// On load: detect the user's preferred language from navigator.languages,
// match against the supported set, and swap [data-i18n] strings.
// User can override with the language switcher; choice persists in localStorage.

const SUPPORTED = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko'];
const STORAGE_KEY = 'snozzt-lang';

const T = {
  en: {
    page_title: 'Snozzt — Private Sleep Tracking',
    nav_features: 'Features',
    nav_privacy: 'Privacy',
    nav_download: 'Download',
    nav_support: 'Support',
    hero_title: 'Sleep tracking that respects your privacy.',
    hero_sub: 'Snozzt records overnight, classifies what it hears on-device, and never sends a single byte of audio anywhere.',
    cta_get: 'Get Snozzt',
    cta_support: 'Support my work',
    cta_how: 'How it works',
    privacy_title: 'Your audio stays on your phone.',
    privacy_body: 'Sound analysis runs in real time using Apple\'s on-device Neural Engine. Snozzt only stores event metadata — timestamp, what was detected, how confident the model was. No recordings. No uploads. No cloud.',
    features_title: 'What Snozzt detects, tracks, and shows you.',
    f1_title: 'On-device sound classification',
    f1_body: 'Snoring, sleep talking, coughs, breathing, sirens, alarms, barking — all classified locally. No round-trip to a server.',
    f2_title: 'Sleep score & weekly trends',
    f2_body: 'Every session gets a 0–100 score from duration, restfulness, snoring, and disruptions. Charts show how your nights compare.',
    f3_title: 'Smart wake-up',
    f3_body: 'A time-sensitive alarm cuts through Sleep Focus, and a chime plays in-app when you\'re already up. Background recording keeps going even with the screen locked.',
    f4_title: 'Detailed event timeline',
    f4_body: 'Each session detail shows every detected sound on a chart, colored by class, with timestamps and confidence — so you can spot what woke you and when.',
    f5_title: 'Five languages, zero accounts',
    f5_body: 'English, Simplified & Traditional Chinese, Japanese, Korean. Sign in with Apple is the only login — no email lists, no tracking pixels.',
    f6_title: 'Optimized for overnight',
    f6_body: 'Voice-activity detection, classifier subsampling, and tuned audio buffers keep battery drain in check across an 8-hour session.',
    download_title: 'Get Snozzt',
    download_sub: 'Available soon. Join the beta to try it early.',
    store_app_status: 'Coming soon',
    store_app_top: 'Download on the',
    store_tf_status: 'Open beta',
    store_tf_top: 'Join the beta on',
    store_play_status: 'Planned',
    store_play_top: 'Get it on',
    download_note: 'The TestFlight link above is live now. App Store and Google Play will go live as each platform\'s review completes.',
    support_title: 'Support my work',
    support_sub: 'Snozzt is a personal project, built and maintained in spare hours. If it helps you sleep a little better, a small contribution genuinely helps it keep going.',
    support_aif_top: '用爱发电 · 支持作者',
    support_bmac_top: 'Tip a coffee',
    support_note: 'Both platforms are external — clicking opens their site in a new tab. Snozzt itself never charges for the free tier.',
    footer_copy: '© 2026 Snozzt. Built with care for sleep and privacy.',
    footer_privacy: 'Privacy',
    footer_support: 'Support',
  },

  'zh-Hans': {
    page_title: 'Snozzt — 私密睡眠追踪',
    nav_features: '功能',
    nav_privacy: '隐私',
    nav_download: '下载',
    nav_support: '支持',
    hero_title: '尊重您隐私的睡眠追踪。',
    hero_sub: 'Snozzt 整夜记录,在设备本地分析所听到的声音,绝不会发送任何音频数据。',
    cta_get: '获取 Snozzt',
    cta_support: '支持我',
    cta_how: '工作原理',
    privacy_title: '音频留在您的手机上。',
    privacy_body: '声音分析使用 Apple 设备上的神经网络引擎实时运行。Snozzt 只存储事件元数据 —— 时间戳、检测到的内容、模型的置信度。不录音。不上传。不上云。',
    features_title: 'Snozzt 检测、追踪和呈现的内容。',
    f1_title: '设备端声音分类',
    f1_body: '打鼾、梦话、咳嗽、呼吸、警报、闹钟、狗叫 —— 全部在本地分类。无需往返服务器。',
    f2_title: '睡眠评分与周度趋势',
    f2_body: '每次睡眠都会获得 0–100 分,基于时长、安宁度、打鼾和干扰。图表展示您的睡眠对比。',
    f3_title: '智能唤醒',
    f3_body: '时间敏感型闹钟可穿透「睡眠专注」,在应用内播放铃声唤醒您。即使锁屏,后台录音也持续进行。',
    f4_title: '详细的事件时间线',
    f4_body: '每次睡眠详情都会以图表形式展示所有检测到的声音,按类别上色,带时间戳和置信度 —— 让您看清何时被什么吵醒。',
    f5_title: '五种语言,无需账号',
    f5_body: '英语、简体中文、繁体中文、日语、韩语。仅使用「通过 Apple 登录」—— 没有邮件列表,没有追踪像素。',
    f6_title: '为整夜使用而优化',
    f6_body: '语音活动检测、分类器降采样和优化的音频缓冲让 8 小时录制下电量消耗保持在合理范围。',
    download_title: '获取 Snozzt',
    download_sub: '即将上线。加入 Beta 抢先体验。',
    store_app_status: '即将推出',
    store_app_top: '在以下平台下载',
    store_tf_status: '公开测试',
    store_tf_top: '在以下平台加入测试',
    store_play_status: '规划中',
    store_play_top: '在以下平台获取',
    download_note: '上方的 TestFlight 链接现已开放。App Store 和 Google Play 将在各自审核通过后上线。',
    support_title: '支持我的工作',
    support_sub: 'Snozzt 是我利用业余时间开发和维护的个人项目。如果它帮助您睡得更好,一点点支持都会真心实意地推动它继续前进。',
    support_aif_top: '用爱发电 · 支持作者',
    support_bmac_top: '请我喝杯咖啡',
    support_note: '两个平台都是外部链接 —— 点击会在新标签页打开它们的网站。Snozzt 免费版本身永远不收费。',
    footer_copy: '© 2026 Snozzt。用心打造,守护您的睡眠与隐私。',
    footer_privacy: '隐私',
    footer_support: '支持',
  },

  'zh-Hant': {
    page_title: 'Snozzt — 私密睡眠追蹤',
    nav_features: '功能',
    nav_privacy: '隱私',
    nav_download: '下載',
    nav_support: '支援',
    hero_title: '尊重您隱私的睡眠追蹤。',
    hero_sub: 'Snozzt 整夜記錄,在裝置本機分析所聽到的聲音,絕不會傳送任何音訊資料。',
    cta_get: '取得 Snozzt',
    cta_support: '支援作者',
    cta_how: '運作原理',
    privacy_title: '音訊保留在您的手機上。',
    privacy_body: '聲音分析使用 Apple 裝置上的神經網路引擎即時執行。Snozzt 只儲存事件中繼資料 —— 時間戳記、偵測到的內容、模型的可信度。不錄音。不上傳。不上雲端。',
    features_title: 'Snozzt 偵測、追蹤並呈現的內容。',
    f1_title: '裝置端聲音分類',
    f1_body: '打鼾、夢話、咳嗽、呼吸、警報、鬧鐘、狗叫 —— 全部在本機分類。無需往返伺服器。',
    f2_title: '睡眠評分與週度趨勢',
    f2_body: '每次睡眠都會獲得 0–100 分,基於時長、安寧度、打鼾與干擾。圖表展示您的睡眠對比。',
    f3_title: '智慧喚醒',
    f3_body: '時間敏感型鬧鐘可穿透「睡眠專注」,在應用程式內播放鈴聲喚醒您。即使鎖定螢幕,背景錄音也持續進行。',
    f4_title: '詳細的事件時間線',
    f4_body: '每次睡眠詳情都會以圖表形式展示所有偵測到的聲音,依類別上色,帶時間戳記與可信度 —— 讓您看清何時被什麼吵醒。',
    f5_title: '五種語言,無需帳號',
    f5_body: '英文、簡體中文、繁體中文、日文、韓文。僅使用「使用 Apple 登入」—— 沒有電子郵件列表,沒有追蹤像素。',
    f6_title: '為整夜使用而最佳化',
    f6_body: '語音活動偵測、分類器降採樣與調校過的音訊緩衝,讓 8 小時錄製下的電量消耗保持在合理範圍。',
    download_title: '取得 Snozzt',
    download_sub: '即將上線。加入 Beta 搶先體驗。',
    store_app_status: '即將推出',
    store_app_top: '於以下平台下載',
    store_tf_status: '公開測試',
    store_tf_top: '於以下平台加入測試',
    store_play_status: '規劃中',
    store_play_top: '於以下平台取得',
    download_note: '上方的 TestFlight 連結現已開放。App Store 與 Google Play 將在各自審核通過後上線。',
    support_title: '支援我的工作',
    support_sub: 'Snozzt 是我利用業餘時間開發與維護的個人專案。如果它幫助您睡得更好,一點點支援都會真心實意地推動它繼續前進。',
    support_aif_top: '用愛發電 · 支援作者',
    support_bmac_top: '請我喝杯咖啡',
    support_note: '兩個平台都是外部連結 —— 點擊會在新分頁開啟它們的網站。Snozzt 免費版本身永遠不收費。',
    footer_copy: '© 2026 Snozzt。用心打造,守護您的睡眠與隱私。',
    footer_privacy: '隱私',
    footer_support: '支援',
  },

  ja: {
    page_title: 'Snozzt — プライベートな睡眠トラッキング',
    nav_features: '機能',
    nav_privacy: 'プライバシー',
    nav_download: 'ダウンロード',
    nav_support: 'サポート',
    hero_title: 'プライバシーを尊重する睡眠トラッキング。',
    hero_sub: 'Snozzt は夜間に記録し、デバイス上で音を分析します。音声データはどこにも送信されません。',
    cta_get: 'Snozzt を入手',
    cta_support: '応援する',
    cta_how: '仕組み',
    privacy_title: '音声はあなたの端末から出ません。',
    privacy_body: '音の分析は Apple のオンデバイス Neural Engine を使ってリアルタイムで実行されます。Snozzt が保存するのはイベントのメタデータ(タイムスタンプ・検出内容・モデルの確信度)だけです。録音なし、アップロードなし、クラウドなし。',
    features_title: 'Snozzt が検出・追跡・表示するもの。',
    f1_title: 'オンデバイスの音声分類',
    f1_body: 'いびき、寝言、咳、呼吸、サイレン、目覚まし、犬の鳴き声 —— すべて端末内で分類。サーバーへの往復はありません。',
    f2_title: '睡眠スコアと週間トレンド',
    f2_body: '各セッションは継続時間・安らかさ・いびき・中断から 0〜100 点で採点されます。チャートで夜ごとの違いが見えます。',
    f3_title: 'スマート目覚まし',
    f3_body: 'Time Sensitive アラームは「睡眠フォーカス」を貫通し、起床時にはアプリ内でチャイムが鳴ります。画面ロック中もバックグラウンドで記録は続きます。',
    f4_title: '詳細なイベントタイムライン',
    f4_body: '各セッションの詳細では、検出されたすべての音をクラス別に色分けしてチャート表示。タイムスタンプと確信度付きで、何時に何で目覚めたかが分かります。',
    f5_title: '5 言語対応、アカウント不要',
    f5_body: '英語・簡体字中国語・繁体字中国語・日本語・韓国語。ログインは「Apple でサインイン」のみ —— メーリングリストもトラッキングピクセルもありません。',
    f6_title: '夜通しの使用に最適化',
    f6_body: '音声アクティビティ検出、分類器のサブサンプリング、調整済みオーディオバッファにより、8 時間のセッションでもバッテリー消費を抑えます。',
    download_title: 'Snozzt を入手',
    download_sub: 'まもなく公開。ベータでひと足先にお試しください。',
    store_app_status: '近日公開',
    store_app_top: '以下からダウンロード',
    store_tf_status: '公開ベータ',
    store_tf_top: 'ベータに参加',
    store_play_status: '計画中',
    store_play_top: '以下から入手',
    download_note: '上の TestFlight リンクは現在公開中です。App Store と Google Play は各プラットフォームの審査完了後に公開予定です。',
    support_title: '応援する',
    support_sub: 'Snozzt は空き時間で作っている個人プロジェクトです。もし睡眠の改善に少しでも役立っていたら、ささやかなサポートが開発を続ける励みになります。',
    support_aif_top: '用爱发电で応援する',
    support_bmac_top: 'コーヒーを一杯おごる',
    support_note: 'どちらも外部プラットフォームです —— クリックすると新しいタブでそれぞれのサイトが開きます。Snozzt の無料プラン自体は決して課金しません。',
    footer_copy: '© 2026 Snozzt. 睡眠とプライバシーを大切にして作りました。',
    footer_privacy: 'プライバシー',
    footer_support: 'サポート',
  },

  ko: {
    page_title: 'Snozzt — 프라이빗 수면 추적',
    nav_features: '기능',
    nav_privacy: '개인정보',
    nav_download: '다운로드',
    nav_support: '지원',
    hero_title: '당신의 프라이버시를 존중하는 수면 추적.',
    hero_sub: 'Snozzt는 밤새 기록하고, 기기 안에서 들리는 소리를 분류하며, 오디오를 어디로도 전송하지 않습니다.',
    cta_get: 'Snozzt 받기',
    cta_support: '후원하기',
    cta_how: '작동 방식',
    privacy_title: '오디오는 기기 안에 머뭅니다.',
    privacy_body: '소리 분석은 Apple의 기기 내 Neural Engine을 사용해 실시간으로 실행됩니다. Snozzt는 이벤트 메타데이터(타임스탬프, 감지된 내용, 모델 신뢰도)만 저장합니다. 녹음 없음. 업로드 없음. 클라우드 없음.',
    features_title: 'Snozzt가 감지하고 추적하고 보여주는 것들.',
    f1_title: '기기 내 사운드 분류',
    f1_body: '코골이, 잠꼬대, 기침, 호흡, 사이렌, 알람, 개 짖는 소리 —— 모두 기기 내에서 분류됩니다. 서버 왕복 없음.',
    f2_title: '수면 점수 및 주간 추세',
    f2_body: '각 세션은 지속 시간, 안락함, 코골이, 방해 요소를 기반으로 0–100점을 받습니다. 차트로 밤마다의 차이를 볼 수 있습니다.',
    f3_title: '스마트 기상',
    f3_body: '시간 민감 알람은 수면 집중 모드를 뚫고 울리며, 깨어있을 때는 앱 내 차임이 울립니다. 화면이 잠겨도 백그라운드 녹음은 계속됩니다.',
    f4_title: '세부 이벤트 타임라인',
    f4_body: '각 세션 상세 화면에는 감지된 모든 소리가 클래스별로 색이 칠해진 차트로 표시되며, 타임스탬프와 신뢰도가 함께 나옵니다 —— 무엇이 언제 당신을 깨웠는지 한눈에 볼 수 있습니다.',
    f5_title: '5개 언어, 계정 불필요',
    f5_body: '영어, 간체중국어, 번체중국어, 일본어, 한국어. 로그인은 "Apple로 로그인"뿐 —— 이메일 목록도, 추적 픽셀도 없습니다.',
    f6_title: '밤새 사용에 최적화',
    f6_body: '음성 활동 감지, 분류기 서브샘플링, 조정된 오디오 버퍼로 8시간 세션에서도 배터리 소모를 합리적으로 유지합니다.',
    download_title: 'Snozzt 받기',
    download_sub: '곧 출시됩니다. 베타에 참여해 미리 체험하세요.',
    store_app_status: '곧 출시',
    store_app_top: '다운로드',
    store_tf_status: '공개 베타',
    store_tf_top: '베타 참여',
    store_play_status: '계획 중',
    store_play_top: '받기',
    download_note: '위의 TestFlight 링크는 현재 공개되어 있습니다. App Store와 Google Play는 각 플랫폼의 심사가 완료되는 대로 공개됩니다.',
    support_title: '후원하기',
    support_sub: 'Snozzt는 여가 시간에 만들고 유지하는 개인 프로젝트입니다. 더 잘 자는 데 도움이 된다면, 작은 후원이 프로젝트를 계속할 수 있게 해줍니다.',
    support_aif_top: '용아이파전으로 후원',
    support_bmac_top: '커피 한 잔 사주기',
    support_note: '두 플랫폼 모두 외부 사이트입니다 —— 클릭 시 새 탭에서 해당 사이트가 열립니다. Snozzt 무료 등급 자체는 절대 과금하지 않습니다.',
    footer_copy: '© 2026 Snozzt. 당신의 수면과 프라이버시를 위해 정성스럽게 만들었습니다.',
    footer_privacy: '개인정보',
    footer_support: '지원',
  },
};

function detectLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;

  const prefs = navigator.languages || [navigator.language || 'en'];
  for (const raw of prefs) {
    const pref = raw.toLowerCase();
    if (pref === 'zh-hans' || pref === 'zh-cn' || pref === 'zh-sg') return 'zh-Hans';
    if (pref === 'zh-hant' || pref === 'zh-tw' || pref === 'zh-hk' || pref === 'zh-mo') return 'zh-Hant';
    if (pref.startsWith('zh-hans') || pref.startsWith('zh-cn')) return 'zh-Hans';
    if (pref.startsWith('zh-hant') || pref.startsWith('zh-tw') || pref.startsWith('zh-hk')) return 'zh-Hant';
    if (pref.startsWith('zh')) return 'zh-Hans';
    if (pref.startsWith('ja')) return 'ja';
    if (pref.startsWith('ko')) return 'ko';
    if (pref.startsWith('en')) return 'en';
  }
  return 'en';
}

function applyLanguage(lang) {
  const dict = T[lang] || T.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value === undefined) return;
    if (el.tagName === 'TITLE') {
      document.title = value;
    } else {
      el.textContent = value;
    }
  });
}

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'en';
  localStorage.setItem(STORAGE_KEY, lang);
  applyLanguage(lang);
  const switcher = document.getElementById('lang-switcher');
  if (switcher) switcher.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const initial = detectLanguage();
  applyLanguage(initial);
  const switcher = document.getElementById('lang-switcher');
  if (switcher) {
    switcher.value = initial;
    switcher.addEventListener('change', e => setLanguage(e.target.value));
  }
});
