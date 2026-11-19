// vibeBMS site: languages, platform detection, nightly build info, screenshots.
// No dependencies. Everything here is an enhancement: without it the page is
// English and every link works.
'use strict';

const T = {
  en: {
    docTitle: 'vibeBMS: a cross-platform BMS player',
    docDesc: 'vibeBMS is a cross-platform BMS player written in Rust. Play it in your browser, or get nightly builds for Windows, macOS, Linux, Android and iOS.',
    skip: 'Skip to content',
    navLabel: 'Sections', ghLabel: 'vibeBMS on GitHub', navFeatures: 'Features', navShots: 'Screenshots', navDownload: 'Download', navProjects: 'Projects',
    langLabel: 'Language',
    tagline: 'A cross-platform BMS player for Windows, macOS, Linux, Android, iOS and the web.',
    status: 'Early development (0.1)',
    statusNote: 'Builds of the latest commit, published every night.',
    playBrowser: 'Play in browser',
    download: 'Download',
    downloadFor: 'Download for {os}',
    allPlatforms: 'All platforms and files',
    alsoKicker: 'Also from vibeBMS',
    seekerShort: "Finds and downloads the songs a difficulty table lists that your library lacks, and puts separate charts into their songs' folders.",
    openBrowser: 'Open in browser',
    moreInfo: 'Downloads and details',
    featuresTitle: 'Features',
    featuresLead: 'Modelled on Lunatic Rave 2 and beatoraja. Still early (0.1): expect rough edges and changes.',
    f1t: 'Runs almost anywhere',
    f1: 'Windows, macOS and Linux (x64 and ARM), Android, iOS and web browsers (wasm), with an on-screen controller for phones and tablets.',
    f2t: 'BMS and BMSON charts',
    f2: 'BMS/BME/BML/PMS and BMSON: 5, 7, 10, 14 and 9 keys, plus 4, 6 and 8 keys; #RANDOM, BPM changes, STOP, #SCROLL, LN and mines.',
    f3t: 'Familiar judging',
    f3: 'beatoraja, LR2 and IIDX judge presets or your own windows; gauges from ASSIST EASY to HAZARD; RANDOM options, hi-speed types and lane covers.',
    f4t: 'Skins',
    f4: 'Built-in default skins for landscape and portrait, a touch perspective skin, and LR2 (.lr2skin) and beatoraja (JSON, Lua) skins.',
    f5t: 'Difficulty tables and downloads',
    f5: 'bmstable difficulty tables, with the common ones built in; a chart you lack can be downloaded from the links its author and the tables give.',
    f6t: 'Songs in archives',
    f6: '.zip, .7z, .rar, .lzh and .tar song packs are played without unpacking them yourself.',
    f7t: 'Practice, replays and ghosts',
    f7: 'A practice screen per chart, a replay of every play, G-BATTLE against your own best, courses, and IR rankings.',
    f8t: 'No launcher, portable',
    f8: 'It starts at song select and every setting is changed in the game; data lives next to the executable. English, Korean, Japanese and Chinese UI.',
    vibeNote: 'The "vibe" is the music\'s, and the way it is made: nearly all of the code and the default skins were written with an AI coding agent (Claude Code), while a person set the direction and checked the results by playing.',
    shotsTitle: 'Screenshots',
    carouselRole: 'carousel', slideRole: 'slide',
    slideOf: '{n} of {total}',
    s1: 'Song select',
    s1alt: "Song select with the default skin: a list of test charts and the chosen chart's details",
    s2: 'Play (7 keys, single play)',
    s2alt: 'Playing a 7-key chart (single play) with the default skin',
    s3: 'Result',
    s3alt: 'The result screen: clear type, DJ level, score, judgements and graphs',
    s4: 'Touch perspective skin (phone, portrait and landscape)',
    s4alt: 'The touch perspective skin on a phone, in portrait and in landscape, with the touch zones faintly shown',
    s5: 'Settings, all in the game',
    s5alt: 'The settings screen: gameplay, controls, display and audio, skins, library, courses, online and system',
    prev: 'Previous screenshot', next: 'Next screenshot', goTo: 'Screenshot {n}',
    shotsNote: 'Shown with generated test charts and the built-in default skins.',
    dlTitle: 'Download',
    dlLead: 'Nightly builds of the latest commit. They are development builds: settings and records may change between them.',
    buildLoading: 'Reading the latest build from GitHub…',
    buildInfo: 'Latest nightly: {v}, built {date}.',
    buildFail: "Couldn't read the latest build from GitHub (its API may be rate-limited); the links below still work.",
    releaseNotes: 'Release notes and all files',
    detected: 'Your system',
    hWin: 'One executable: put it in a folder with your BMS folders inside and run it. It checks for a newer nightly when it starts.',
    macApp: 'App',
    hMac: 'Drag the app to Applications. It is not notarized: open it the first time with right-click → Open, or in System Settings → Privacy &amp; Security → Open Anyway.',
    otherFiles: 'Other files',
    hMacExe: 'Executables: <code>chmod +x vibebms-*</code> and <code>xattr -d com.apple.quarantine vibebms-*</code>.',
    hLinux: '<code>chmod +x vibebms-*</code>. Needs glibc 2.35 and WebKitGTK 4.1 (<code>libwebkit2gtk-4.1-0</code>, for the download browser).',
    portableFlatpak: 'Portable and Flatpak',
    hPortable: 'Portable: starts with glibc 2.28 and ALSA, without the download browser.',
    hFlatpak: '<code>flatpak install --user vibeBMS-linux-x64.flatpak</code> (the runtime comes from Flathub). It does not update itself: install a newer bundle the same way.',
    hAndroid: 'Download the APK and install it (Android asks to allow installs from your browser or file manager).',
    fdroidTitle: 'Updates through F-Droid',
    fdroidText: 'Add this repository once in F-Droid, Droid-ify or Neo Store, and each nightly is offered as an update of “vibeBMS Nightly”:',
    fdroidFp: 'Its fingerprint and a one-tap link are in <a href="https://github.com/vibeBMS/vibe/releases/download/nightly/fdroid.txt">fdroid.txt</a>.',
    fdroidQrAlt: 'QR code that adds the F-Droid repository',
    copy: 'Copy', copied: 'Copied', copyFail: 'Select and copy',
    unsigned: 'unsigned',
    hIos: 'Unsigned: sideload it, e.g. with AltStore, SideStore or LiveContainer. For updates, add the source in AltStore or SideStore:',
    iosSub: 'AltStore / SideStore',
    addAltstore: 'Add the source (AltStore, SideStore…)',
    webTitle: 'Web browser',
    hWeb: 'Songs you add stay in the browser; nothing is uploaded. The zip: unzip it and serve the folder over HTTP(S).',
    buildYourself: 'Or build it yourself: <code>cargo run --release</code> (see <a href="https://github.com/vibeBMS/vibe/blob/main/docs/BUILDING.md">docs/BUILDING.md</a>).',
    projectsTitle: 'Projects',
    pVibe: 'The BMS player (Rust, wgpu, cpal).',
    source: 'Source', issues: 'Issues',
    pSeeker: "A BMS library tool: it reads difficulty tables, downloads the songs your library lacks from the links their authors and the tables give, unpacks them, and puts separate charts (差分) into their songs' folders. vibe uses it as a library; it also comes as a window (Go), a command-line tool and a web page.",
    seekerBuild: 'Latest nightly: {v}, built {date}.',
    seekerGui: 'Window (with the command-line tool inside)',
    seekerCli: 'Command-line tool',
    hSeeker: 'Linux / macOS: <code>chmod +x bmseeker-*</code>; on macOS also <code>xattr -d com.apple.quarantine bmseeker-*</code>. Linux needs glibc 2.35. Web build: <a href="https://github.com/vibeBMS/BMSeeker/releases/download/nightly/bmseeker-web.zip">bmseeker-web.zip</a>.',
    seekerDisclaimer: 'Before turning on third-party sources, read <a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>.',
    pBms: 'The BMS event mirror: event entries kept so they stay downloadable after the links posted during the event go away, each archive as its author published it.',
    footPolicy: 'vibeBMS hosts no songs or charts and is not affiliated with the sites songs are downloaded from. Where downloads come from and how BMSeeker treats those sites: <a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>.',
    footOptOut: 'Site operators who want BMSeeker not to use their site, or to use it differently, and authors who want a work removed from the event mirror, can say so in the issue trackers: <a href="https://github.com/vibeBMS/BMSeeker/issues">BMSeeker</a>, <a href="https://github.com/vibeBMS/vibe/issues">vibe</a>, <a href="https://github.com/vibeBMS/BMS/issues">BMS</a>.',
    footLicense: 'vibe and BMSeeker are licensed under MIT OR Apache-2.0. <a href="https://github.com/vibeBMS">github.com/vibeBMS</a>',
    os: { windows: 'Windows', macos: 'macOS', linux: 'Linux', android: 'Android', ios: 'iOS' },
  },

  ko: {
    docTitle: 'vibeBMS: 크로스 플랫폼 BMS 플레이어',
    docDesc: 'vibeBMS는 Rust로 만든 크로스 플랫폼 BMS 플레이어입니다. 브라우저에서 바로 플레이하거나 Windows, macOS, Linux, Android, iOS용 나이틀리 빌드를 받으세요.',
    skip: '본문으로 건너뛰기',
    navLabel: '섹션', ghLabel: 'GitHub의 vibeBMS', navFeatures: '기능', navShots: '스크린샷', navDownload: '다운로드', navProjects: '프로젝트',
    langLabel: '언어',
    tagline: 'Windows, macOS, Linux, Android, iOS와 웹에서 돌아가는 BMS 플레이어.',
    status: '초기 개발 단계 (0.1)',
    statusNote: '최신 커밋의 빌드를 매일 밤 공개합니다.',
    playBrowser: '브라우저에서 플레이',
    download: '다운로드',
    downloadFor: '{os}용 다운로드',
    allPlatforms: '모든 플랫폼과 파일',
    alsoKicker: 'vibeBMS의 다른 프로젝트',
    seekerShort: '난이도표에 실린 곡 중 라이브러리에 없는 곡을 찾아 다운로드하고, 차분은 원곡 폴더에 넣어 줍니다.',
    openBrowser: '브라우저에서 열기',
    moreInfo: '다운로드와 자세한 정보',
    featuresTitle: '기능',
    featuresLead: 'Lunatic Rave 2와 beatoraja를 본떠 만들었습니다. 아직 초기 단계(0.1)라 거친 부분이 있고 계속 바뀝니다.',
    f1t: '거의 모든 곳에서 실행',
    f1: 'Windows, macOS, Linux(x64, ARM), Android, iOS, 웹 브라우저(wasm). 스마트폰과 태블릿용 화면 컨트롤러가 있습니다.',
    f2t: 'BMS와 BMSON 채보',
    f2: 'BMS/BME/BML/PMS와 BMSON: 5, 7, 10, 14, 9키와 4, 6, 8키. #RANDOM, BPM 변화, STOP, #SCROLL, 롱노트, 지뢰.',
    f3t: '익숙한 판정',
    f3: 'beatoraja, LR2, IIDX 판정 프리셋 또는 직접 정한 판정 범위. ASSIST EASY부터 HAZARD까지의 게이지, 랜덤 옵션, 하이스피드 방식, 레인 커버.',
    f4t: '스킨',
    f4: '가로·세로 화면용 기본 스킨, 터치용 원근 스킨, LR2(.lr2skin)와 beatoraja(JSON, Lua) 스킨.',
    f5t: '난이도표와 다운로드',
    f5: 'bmstable 형식의 난이도표(주요 난이도표 내장). 없는 채보는 작가와 난이도표가 알려 주는 링크에서 다운로드할 수 있습니다.',
    f6t: '압축 파일 속 곡',
    f6: '.zip, .7z, .rar, .lzh, .tar 곡 팩을 직접 풀지 않고 그대로 플레이합니다.',
    f7t: '연습, 리플레이, 고스트',
    f7: '채보별 연습 화면, 모든 플레이의 리플레이, 자신의 베스트와 겨루는 G-BATTLE, 코스, IR 랭킹.',
    f8t: '런처 없음, 포터블',
    f8: '선곡 화면에서 바로 시작하고 모든 설정은 게임 안에서 바꿉니다. 데이터는 실행 파일 옆에 저장됩니다. 영어, 한국어, 일본어, 중국어 UI.',
    vibeNote: '이름의 "vibe"는 음악의 바이브이자 만든 방식이기도 합니다. 코드와 기본 스킨은 거의 모두 AI 코딩 에이전트(Claude Code)와 함께 작성했고, 방향을 정하고 직접 플레이하며 결과를 확인한 것은 사람입니다.',
    shotsTitle: '스크린샷',
    carouselRole: '캐러셀', slideRole: '슬라이드',
    slideOf: '{total}장 중 {n}번째',
    s1: '선곡 화면',
    s1alt: '기본 스킨의 선곡 화면: 테스트 채보 목록과 선택한 채보의 정보',
    s2: '플레이 (7키, 싱글 플레이)',
    s2alt: '기본 스킨으로 7키 채보를 싱글 플레이하는 화면',
    s3: '결과 화면',
    s3alt: '결과 화면: 클리어 타입, DJ 레벨, 점수, 판정, 그래프',
    s4: '터치 원근 스킨 (스마트폰, 세로와 가로)',
    s4alt: '스마트폰에서 세로와 가로로 본 터치 원근 스킨. 터치 영역이 옅게 보입니다',
    s5: '모든 설정은 게임 안에서',
    s5alt: '설정 화면: 게임플레이, 조작, 화면과 소리, 스킨, 라이브러리, 코스, 온라인, 시스템',
    prev: '이전 스크린샷', next: '다음 스크린샷', goTo: '스크린샷 {n}',
    shotsNote: '자동 생성한 테스트 채보와 내장 기본 스킨으로 찍었습니다.',
    dlTitle: '다운로드',
    dlLead: '최신 커밋의 나이틀리 빌드입니다. 개발 중인 빌드라서 설정과 기록 형식이 바뀔 수 있습니다.',
    buildLoading: 'GitHub에서 최신 빌드 정보를 읽는 중…',
    buildInfo: '최신 나이틀리: {v}, 빌드 {date}.',
    buildFail: 'GitHub에서 최신 빌드 정보를 읽지 못했습니다(API 요청 한도일 수 있습니다). 아래 링크는 그대로 쓸 수 있습니다.',
    releaseNotes: '릴리스 노트와 모든 파일',
    detected: '내 시스템',
    hWin: '실행 파일 하나입니다. BMS 폴더를 넣은 폴더에 두고 실행하세요. 시작할 때 새 나이틀리가 있는지 확인합니다.',
    macApp: '앱',
    hMac: '앱을 응용 프로그램 폴더로 끌어 놓으세요. 공증되지 않은 앱이라 처음에는 오른쪽 클릭 → 열기, 또는 시스템 설정 → 개인정보 보호 및 보안 → 그래도 열기로 여세요.',
    otherFiles: '다른 파일',
    hMacExe: '실행 파일: <code>chmod +x vibebms-*</code>, <code>xattr -d com.apple.quarantine vibebms-*</code>.',
    hLinux: '<code>chmod +x vibebms-*</code>. glibc 2.35와 WebKitGTK 4.1(<code>libwebkit2gtk-4.1-0</code>, 다운로드 브라우저용)이 필요합니다.',
    portableFlatpak: '포터블과 Flatpak',
    hPortable: '포터블: glibc 2.28과 ALSA로 실행되며, 다운로드 브라우저는 없습니다.',
    hFlatpak: '<code>flatpak install --user vibeBMS-linux-x64.flatpak</code> (런타임은 Flathub에서 받습니다). 자동 업데이트는 없으니 새 번들을 같은 방법으로 설치하세요.',
    hAndroid: 'APK를 받아 설치하세요(브라우저나 파일 관리자에서의 설치를 허용할지 Android가 묻습니다).',
    fdroidTitle: 'F-Droid로 업데이트',
    fdroidText: 'F-Droid, Droid-ify, Neo Store에 이 저장소를 한 번 추가하면 새 나이틀리가 “vibeBMS Nightly”의 업데이트로 표시됩니다:',
    fdroidFp: '지문과 한 번에 추가하는 링크는 <a href="https://github.com/vibeBMS/vibe/releases/download/nightly/fdroid.txt">fdroid.txt</a>에 있습니다.',
    fdroidQrAlt: 'F-Droid 저장소를 추가하는 QR 코드',
    copy: '복사', copied: '복사됨', copyFail: '선택해서 복사하세요',
    unsigned: '서명 없음',
    hIos: '서명되지 않은 IPA입니다. AltStore, SideStore, LiveContainer 등으로 사이드로드하세요. 업데이트를 받으려면 AltStore나 SideStore에 소스를 추가하세요:',
    iosSub: 'AltStore / SideStore',
    addAltstore: '소스 추가 (AltStore, SideStore 등)',
    webTitle: '웹 브라우저',
    hWeb: '추가한 곡은 브라우저 안에 보관되며 어디에도 업로드되지 않습니다. zip은 압축을 풀고 폴더를 HTTP(S)로 제공하면 됩니다.',
    buildYourself: '직접 빌드할 수도 있습니다: <code>cargo run --release</code> (<a href="https://github.com/vibeBMS/vibe/blob/main/docs/BUILDING.md">docs/BUILDING.md</a> 참고).',
    projectsTitle: '프로젝트',
    pVibe: 'BMS 플레이어 (Rust, wgpu, cpal).',
    source: '소스', issues: '이슈',
    pSeeker: 'BMS 라이브러리 도구: 난이도표를 읽고, 라이브러리에 없는 곡을 작가와 난이도표가 알려 주는 링크에서 다운로드해 압축을 풀고, 차분(差分)을 원곡 폴더에 넣습니다. vibe가 라이브러리로 쓰며, 창(Go), 명령줄 도구, 웹 페이지로도 제공됩니다.',
    seekerBuild: '최신 나이틀리: {v}, 빌드 {date}.',
    seekerGui: '창 (명령줄 도구 포함)',
    seekerCli: '명령줄 도구',
    hSeeker: 'Linux / macOS: <code>chmod +x bmseeker-*</code>. macOS에서는 <code>xattr -d com.apple.quarantine bmseeker-*</code>도 실행하세요. Linux는 glibc 2.35가 필요합니다. 웹 빌드: <a href="https://github.com/vibeBMS/BMSeeker/releases/download/nightly/bmseeker-web.zip">bmseeker-web.zip</a>.',
    seekerDisclaimer: '서드파티 소스를 켜기 전에 <a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>(영어)를 읽어 주세요.',
    pBms: 'BMS 이벤트 미러: 이벤트 기간에 올라온 링크가 사라진 뒤에도 받을 수 있도록 이벤트 작품을 보관합니다. 각 아카이브는 작가가 공개한 그대로입니다.',
    footPolicy: 'vibeBMS는 곡이나 채보를 호스팅하지 않으며, 곡을 받아 오는 사이트와 관계가 없습니다. 다운로드 출처와 BMSeeker가 그 사이트들을 대하는 방식: <a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>(영어).',
    footOptOut: 'BMSeeker가 자신의 사이트를 쓰지 않거나 다르게 쓰기를 원하는 사이트 운영자, 이벤트 미러에서 작품을 내리고 싶은 작가는 이슈 트래커에 알려 주세요: <a href="https://github.com/vibeBMS/BMSeeker/issues">BMSeeker</a>, <a href="https://github.com/vibeBMS/vibe/issues">vibe</a>, <a href="https://github.com/vibeBMS/BMS/issues">BMS</a>.',
    footLicense: 'vibe와 BMSeeker의 라이선스는 MIT OR Apache-2.0입니다. <a href="https://github.com/vibeBMS">github.com/vibeBMS</a>',
    os: { windows: 'Windows', macos: 'macOS', linux: 'Linux', android: 'Android', ios: 'iOS' },
  },

  ja: {
    docTitle: 'vibeBMS: クロスプラットフォームの BMS プレイヤー',
    docDesc: 'vibeBMS は Rust で書かれたクロスプラットフォームの BMS プレイヤーです。ブラウザですぐに遊べるほか、Windows・macOS・Linux・Android・iOS 向けのナイトリービルドがあります。',
    skip: '本文へスキップ',
    navLabel: 'セクション', ghLabel: 'GitHub の vibeBMS', navFeatures: '機能', navShots: 'スクリーンショット', navDownload: 'ダウンロード', navProjects: 'プロジェクト',
    langLabel: '言語',
    tagline: 'Windows・macOS・Linux・Android・iOS とウェブで動く BMS プレイヤー。',
    status: '開発初期（0.1）',
    statusNote: '最新コミットのビルドを毎晩公開しています。',
    playBrowser: 'ブラウザで遊ぶ',
    download: 'ダウンロード',
    downloadFor: '{os} 版をダウンロード',
    allPlatforms: 'すべてのプラットフォームとファイル',
    alsoKicker: 'vibeBMS のもうひとつのプロジェクト',
    seekerShort: '難易度表に載っている曲のうちライブラリにないものを探してダウンロードし、差分を本体の曲フォルダに入れます。',
    openBrowser: 'ブラウザで開く',
    moreInfo: 'ダウンロードと詳細',
    featuresTitle: '機能',
    featuresLead: 'Lunatic Rave 2 と beatoraja を手本にしています。まだ開発初期（0.1）なので、粗い部分や変更があります。',
    f1t: 'ほぼどこでも動く',
    f1: 'Windows・macOS・Linux（x64 と ARM）、Android、iOS、ウェブブラウザ（wasm）。スマートフォンやタブレット向けの画面上コントローラーがあります。',
    f2t: 'BMS と BMSON',
    f2: 'BMS/BME/BML/PMS と BMSON：5・7・10・14・9 鍵、さらに 4・6・8 鍵。#RANDOM、BPM 変化、STOP、#SCROLL、LN、地雷。',
    f3t: 'なじみのある判定',
    f3: 'beatoraja・LR2・IIDX の判定プリセットか独自の判定幅。ASSIST EASY から HAZARD までのゲージ、RANDOM 系オプション、ハイスピードの種類、レーンカバー。',
    f4t: 'スキン',
    f4: '横画面・縦画面用の標準スキン、タッチ用のパースペクティブスキン、LR2（.lr2skin）と beatoraja（JSON、Lua）のスキン。',
    f5t: '難易度表とダウンロード',
    f5: 'bmstable 形式の難易度表（主要なものは最初から入っています）。持っていない譜面は、作者と難易度表が示すリンクからダウンロードできます。',
    f6t: 'アーカイブのままプレイ',
    f6: '.zip・.7z・.rar・.lzh・.tar の曲パックを、自分で展開せずにそのまま遊べます。',
    f7t: '練習・リプレイ・ゴースト',
    f7: '譜面ごとの練習画面、すべてのプレイのリプレイ、自己ベストと戦う G-BATTLE、コース、IR ランキング。',
    f8t: 'ランチャーなし・ポータブル',
    f8: '選曲画面から始まり、設定はすべてゲーム内で変更します。データは実行ファイルの隣に保存。英語・韓国語・日本語・中国語の UI。',
    vibeNote: '名前の「vibe」は音楽のノリと、作り方のことです。コードと標準スキンのほぼすべては AI コーディングエージェント（Claude Code）とともに書かれ、方向を決めて実際に遊んで確かめたのは人間です。',
    shotsTitle: 'スクリーンショット',
    carouselRole: 'カルーセル', slideRole: 'スライド',
    slideOf: '{n} / {total}',
    s1: '選曲画面',
    s1alt: '標準スキンの選曲画面：テスト譜面の一覧と選んだ譜面の情報',
    s2: 'プレイ画面（7 鍵、シングルプレイ）',
    s2alt: '標準スキンで 7 鍵の譜面をシングルプレイしている画面',
    s3: 'リザルト画面',
    s3alt: 'リザルト画面：クリアタイプ、DJ LEVEL、スコア、判定、グラフ',
    s4: 'タッチ用パースペクティブスキン（スマートフォン、縦と横）',
    s4alt: 'スマートフォンの縦画面と横画面で表示したタッチ用パースペクティブスキン。タッチ領域がうっすら見えています',
    s5: '設定はすべてゲーム内で',
    s5alt: '設定画面：ゲームプレイ、操作、画面と音、スキン、ライブラリ、コース、オンライン、システム',
    prev: '前のスクリーンショット', next: '次のスクリーンショット', goTo: 'スクリーンショット {n}',
    shotsNote: '自動生成したテスト譜面と内蔵の標準スキンで撮影しています。',
    dlTitle: 'ダウンロード',
    dlLead: '最新コミットのナイトリービルドです。開発版なので、設定や記録の形式が変わることがあります。',
    buildLoading: 'GitHub から最新ビルドの情報を読み込み中…',
    buildInfo: '最新ナイトリー：{v}（ビルド {date}）。',
    buildFail: 'GitHub から最新ビルドの情報を読み込めませんでした（API の回数制限かもしれません）。下のリンクはそのまま使えます。',
    releaseNotes: 'リリースノートとすべてのファイル',
    detected: 'お使いのシステム',
    hWin: '実行ファイルひとつです。BMS フォルダを入れたフォルダに置いて起動してください。起動時に新しいナイトリーがないか確認します。',
    macApp: 'アプリ',
    hMac: 'アプリを「アプリケーション」へドラッグしてください。公証されていないため、初回は右クリック → 開く、または システム設定 → プライバシーとセキュリティ → 「このまま開く」で開きます。',
    otherFiles: 'その他のファイル',
    hMacExe: '実行ファイル：<code>chmod +x vibebms-*</code> と <code>xattr -d com.apple.quarantine vibebms-*</code>。',
    hLinux: '<code>chmod +x vibebms-*</code>。glibc 2.35 と WebKitGTK 4.1（<code>libwebkit2gtk-4.1-0</code>、ダウンロード用ブラウザに使用）が必要です。',
    portableFlatpak: 'ポータブル版と Flatpak',
    hPortable: 'ポータブル版：glibc 2.28 と ALSA で動きます。ダウンロード用ブラウザはありません。',
    hFlatpak: '<code>flatpak install --user vibeBMS-linux-x64.flatpak</code>（ランタイムは Flathub から取得）。自動更新はしないので、新しいバンドルを同じ方法でインストールしてください。',
    hAndroid: 'APK をダウンロードしてインストールしてください（ブラウザやファイルマネージャーからのインストールを許可するか Android が尋ねます）。',
    fdroidTitle: 'F-Droid で更新',
    fdroidText: 'F-Droid、Droid-ify、Neo Store にこのリポジトリを一度追加すると、新しいナイトリーが「vibeBMS Nightly」の更新として届きます：',
    fdroidFp: 'フィンガープリントとワンタップで追加できるリンクは <a href="https://github.com/vibeBMS/vibe/releases/download/nightly/fdroid.txt">fdroid.txt</a> にあります。',
    fdroidQrAlt: 'F-Droid リポジトリを追加する QR コード',
    copy: 'コピー', copied: 'コピーしました', copyFail: '選択してコピーしてください',
    unsigned: '未署名',
    hIos: '未署名の IPA です。AltStore、SideStore、LiveContainer などでサイドロードしてください。更新を受け取るには AltStore か SideStore にソースを追加します：',
    iosSub: 'AltStore / SideStore',
    addAltstore: 'ソースを追加（AltStore、SideStore など）',
    webTitle: 'ウェブブラウザ',
    hWeb: '追加した曲はブラウザ内に保存され、どこにもアップロードされません。zip は展開してフォルダを HTTP(S) で配信してください。',
    buildYourself: '自分でビルドすることもできます：<code>cargo run --release</code>（<a href="https://github.com/vibeBMS/vibe/blob/main/docs/BUILDING.md">docs/BUILDING.md</a> を参照）。',
    projectsTitle: 'プロジェクト',
    pVibe: 'BMS プレイヤー（Rust、wgpu、cpal）。',
    source: 'ソース', issues: 'Issue',
    pSeeker: 'BMS ライブラリツール：難易度表を読み、ライブラリにない曲を作者と難易度表が示すリンクからダウンロードして展開し、差分を本体の曲フォルダに入れます。vibe がライブラリとして使っているほか、ウィンドウ版（Go）、コマンドラインツール、ウェブページとしても使えます。',
    seekerBuild: '最新ナイトリー：{v}（ビルド {date}）。',
    seekerGui: 'ウィンドウ版（コマンドラインツール入り）',
    seekerCli: 'コマンドラインツール',
    hSeeker: 'Linux / macOS：<code>chmod +x bmseeker-*</code>。macOS では <code>xattr -d com.apple.quarantine bmseeker-*</code> も。Linux は glibc 2.35 が必要です。ウェブ版：<a href="https://github.com/vibeBMS/BMSeeker/releases/download/nightly/bmseeker-web.zip">bmseeker-web.zip</a>。',
    seekerDisclaimer: 'サードパーティのソースを有効にする前に <a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>（英語）をお読みください。',
    pBms: 'BMS イベントミラー：イベント中に投稿されたリンクが消えた後もダウンロードできるよう、イベント作品を保管しています。各アーカイブは作者が公開したままの状態です。',
    footPolicy: 'vibeBMS は曲や譜面をホストしておらず、曲のダウンロード元のサイトとは関係がありません。ダウンロード元と、BMSeeker がそれらのサイトをどう扱うかについて：<a href="https://github.com/vibeBMS/BMSeeker#third-party-sources-and-disclaimer">Third-party sources and disclaimer</a>（英語）。',
    footOptOut: 'BMSeeker に自分のサイトを使ってほしくない、または使い方を変えてほしいサイト運営者の方、イベントミラーから作品を削除してほしい作者の方は、Issue トラッカーでお知らせください：<a href="https://github.com/vibeBMS/BMSeeker/issues">BMSeeker</a>、<a href="https://github.com/vibeBMS/vibe/issues">vibe</a>、<a href="https://github.com/vibeBMS/BMS/issues">BMS</a>。',
    footLicense: 'vibe と BMSeeker のライセンスは MIT OR Apache-2.0 です。<a href="https://github.com/vibeBMS">github.com/vibeBMS</a>',
    os: { windows: 'Windows', macos: 'macOS', linux: 'Linux', android: 'Android', ios: 'iOS' },
  },
};

const LANGS = ['en', 'ko', 'ja'];
const LANG_KEY = 'vibebms-site-lang';
const VIBE_API = 'https://api.github.com/repos/vibeBMS/vibe/releases/tags/nightly';
const SEEKER_API = 'https://api.github.com/repos/vibeBMS/BMSeeker/releases/tags/nightly';
const VIBE_DL = 'https://github.com/vibeBMS/vibe/releases/download/nightly/';
const CACHE_MS = 15 * 60 * 1000;

let lang = 'en';
const state = { vibe: null, vibeFailed: false, seeker: null, seekerFailed: false, platform: null };

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const t = (key, vars) => {
  let s = (T[lang] && T[lang][key]) ?? T.en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split('{' + k + '}').join(v);
  return s;
};
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode etc. */ } },
};

// ---- language ----
function pickLang() {
  const saved = store.get(LANG_KEY);
  if (LANGS.includes(saved)) return saved;
  const prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (const p of prefs) {
    const base = String(p).toLowerCase().split('-')[0];
    if (LANGS.includes(base)) return base;
  }
  return 'en';
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('docTitle');
  const desc = $('meta[name="description"]');
  if (desc) desc.content = t('docDesc');
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderPlatform();
  renderBuild();
  renderSeeker();
  carousel && carousel.relabel();
}

function setLang(l) {
  if (!LANGS.includes(l)) return;
  lang = l;
  store.set(LANG_KEY, l);
  applyLang();
}

// ---- platform ----
async function detectPlatform() {
  const ua = navigator.userAgent || '';
  const uad = navigator.userAgentData;
  const plat = (uad && uad.platform) || navigator.platform || '';
  let os = null, arch = null;
  if (/android/i.test(ua) || /android/i.test(plat)) os = 'android';
  else if (/iPhone|iPad|iPod/.test(ua) || (/Mac/.test(plat + ua) && navigator.maxTouchPoints > 1)) os = 'ios';
  else if (/Win/.test(plat) || /Windows/.test(ua)) os = 'windows';
  else if (/Mac/.test(plat) || /Mac OS X/.test(ua)) os = 'macos';
  else if (/CrOS/.test(ua)) os = null; // ChromeOS: the web build fits best
  else if (/Linux|X11/.test(plat + ua)) os = 'linux';

  if (os === 'windows' || os === 'linux') {
    arch = /aarch64|arm64|armv8/i.test(ua + ' ' + plat) ? 'arm64' : 'x64';
    if (uad && uad.getHighEntropyValues) {
      try {
        const v = await uad.getHighEntropyValues(['architecture', 'bitness']);
        if (v.architecture === 'arm') arch = 'arm64';
        else if (v.architecture === 'x86') arch = 'x64';
      } catch (e) { /* keep the guess */ }
    }
  }
  return { os, arch };
}

const ASSET_FOR = {
  windows: a => `vibebms-windows-${a}.exe`,
  macos: () => 'vibeBMS-macos-universal.dmg',
  linux: a => `vibebms-linux-${a}`,
  android: () => 'vibeBMS.apk',
};

function fmtSize(bytes) {
  if (!bytes) return '';
  const mb = bytes / 1048576;
  return new Intl.NumberFormat(lang, { maximumFractionDigits: mb < 10 ? 1 : 0 }).format(mb) + ' MB';
}
function assetSize(rel, name) {
  if (!rel || !rel.assets) return 0;
  const a = rel.assets.find(x => x.name === name);
  return a ? a.size : 0;
}

function renderPlatform() {
  const p = state.platform;
  const btn = $('#hero-dl'), label = $('#hero-dl-label'), sub = $('#hero-dl-sub');
  if (!btn) return;
  $$('.card .badge').forEach(b => b.remove());
  $$('.card').forEach(c => c.classList.remove('mine'));
  if (!p || !p.os) {
    btn.href = '#download';
    label.textContent = t('download');
    sub.textContent = '';
    return;
  }
  const osName = t('os')[p.os] || p.os;
  label.textContent = t('downloadFor', { os: osName });
  if (p.os === 'ios') {
    btn.href = '#dl-ios';
    sub.textContent = t('iosSub');
  } else {
    const name = ASSET_FOR[p.os](p.arch);
    btn.href = VIBE_DL + name;
    const bits = [];
    if (p.arch) bits.push(p.arch === 'arm64' ? 'ARM64' : 'x64');
    if (name.includes('.')) bits.push(name.slice(name.lastIndexOf('.')));
    const size = fmtSize(assetSize(state.vibe, name));
    if (size) bits.push(size);
    sub.textContent = bits.filter(Boolean).join(' · ');
  }
  const card = $('#dl-' + p.os);
  if (card) {
    card.classList.add('mine');
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = t('detected');
    $('h3', card).append(' ', badge);
  }
}

// Detected platform's card first; within a card, the detected arch first.
function orderCards() {
  const p = state.platform;
  if (!p || !p.os) return;
  const card = $('#dl-' + p.os);
  if (card && card.parentNode.firstElementChild !== card) card.parentNode.prepend(card);
  if (p.arch && card) {
    const files = $('.files', card);
    const mine = files && $(`[data-arch="${p.arch}"]`, files);
    if (mine) { files.prepend(mine); mine.classList.add('primary-file'); }
  } else if (card) {
    const first = $('.files .btn', card);
    if (first) first.classList.add('primary-file');
  }
}

// ---- GitHub release info ----
async function getRelease(url, key) {
  try {
    const c = JSON.parse(store.get(key) || 'null');
    if (c && Date.now() - c.at < CACHE_MS && c.rel) return c.rel;
  } catch (e) { /* ignore */ }
  const ctl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = ctl && setTimeout(() => ctl.abort(), 10000);
  try {
    const r = await fetch(url, { headers: { Accept: 'application/vnd.github+json' }, signal: ctl && ctl.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json();
    const rel = {
      body: String(j.body || '').slice(0, 400),
      html_url: j.html_url,
      target: j.target_commitish,
      published: j.published_at,
      assets: (j.assets || []).map(a => ({ name: a.name, size: a.size, updated: a.updated_at })),
    };
    store.set(key, JSON.stringify({ at: Date.now(), rel }));
    return rel;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function relVersion(rel) {
  const m = /version\s+([0-9][^\s()]*)/.exec(rel.body || '');
  return m ? m[1].replace(/\.$/, '') : null;
}
function relDate(rel) {
  // the newest file's upload time (the notes' date is in UTC text)
  let d = null;
  for (const a of rel.assets) if (a.updated && (!d || a.updated > d)) d = a.updated;
  d = d || rel.published;
  if (!d) return null;
  try {
    return new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(d));
  } catch (e) { return d.slice(0, 10); }
}

function renderBuild() {
  const el = $('#build-text');
  if (!el) return;
  const rel = state.vibe;
  if (state.vibeFailed) { el.textContent = t('buildFail'); el.parentNode.classList.add('warn'); return; }
  if (!rel) { el.textContent = t('buildLoading'); return; }
  el.parentNode.classList.remove('warn');
  const v = relVersion(rel) || 'nightly';
  el.textContent = t('buildInfo', { v, date: relDate(rel) || '?' });
  // sizes next to the files
  $$('[data-asset]').forEach(a => {
    const size = fmtSize(assetSize(rel, a.dataset.asset));
    let s = $('.size', a);
    if (!size) { if (s) s.remove(); return; }
    if (!s) { s = document.createElement('span'); s.className = 'size'; a.append(s); }
    s.textContent = size;
  });
  // F-Droid only once the release carries its repository
  const names = new Set(rel.assets.map(a => a.name));
  const fd = $('#fdroid');
  if (fd) {
    fd.hidden = !names.has('fdroid.txt');
    const qr = $('#fdroid-qr');
    if (qr && names.has('fdroid-qr.png')) { qr.src = VIBE_DL + 'fdroid-qr.png'; qr.hidden = false; }
  }
}

function renderSeeker() {
  const el = $('#seeker-info');
  if (!el) return;
  const rel = state.seeker;
  if (state.seekerFailed || !rel) { el.textContent = ''; el.hidden = true; return; }
  el.hidden = false;
  el.textContent = t('seekerBuild', { v: relVersion(rel) || 'nightly', date: relDate(rel) || '?' });
  $$('[data-sasset]').forEach(a => {
    const size = fmtSize(assetSize(rel, a.dataset.sasset));
    let s = $('.size', a);
    if (!size) { if (s) s.remove(); return; }
    if (!s) { s = document.createElement('span'); s.className = 'size'; a.append(s); }
    s.textContent = size;
  });
}

// ---- copy buttons ----
function setupCopy() {
  $$('button.copy').forEach(b => b.addEventListener('click', async () => {
    const src = document.getElementById(b.dataset.copy);
    const text = src ? src.textContent.trim() : '';
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) { /* fall back */ }
    if (!ok && src) {
      const r = document.createRange(); r.selectNodeContents(src);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    b.textContent = ok ? t('copied') : t('copyFail');
    clearTimeout(b._t);
    b._t = setTimeout(() => { b.textContent = t('copy'); }, 2000);
  }));
}

// ---- carousel ----
let carousel = null;
function setupCarousel() {
  const root = $('.carousel');
  if (!root) return;
  const slides = $$('.slide', root);
  const dots = $('#car-dots');
  let i = 0;
  root.classList.add('js');
  slides.forEach((s, n) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'dot';
    d.setAttribute('aria-controls', 'slides');
    d.addEventListener('click', () => show(n, true));
    dots.append(d);
  });
  function show(n, focusDot) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.hidden = k !== i; });
    $$('.dot', dots).forEach((d, k) => {
      if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
    // load the next image early
    const nx = slides[(i + 1) % slides.length].querySelector('img');
    if (nx && nx.loading === 'lazy') nx.loading = 'eager';
    if (focusDot) $$('.dot', dots)[i].focus();
  }
  function relabel() {
    slides.forEach((s, k) => s.setAttribute('aria-label', t('slideOf', { n: k + 1, total: slides.length })));
    $$('.dot', dots).forEach((d, k) => d.setAttribute('aria-label', t('goTo', { n: k + 1 })));
  }
  $('#car-prev').addEventListener('click', () => show(i - 1));
  $('#car-next').addEventListener('click', () => show(i + 1));
  root.addEventListener('keydown', e => {
    if (e.target.closest('a')) return;
    if (e.key === 'ArrowLeft') { show(i - 1, e.target.classList.contains('dot')); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { show(i + 1, e.target.classList.contains('dot')); e.preventDefault(); }
  });
  // swipe
  let x0 = null, y0 = null;
  const area = $('#slides');
  area.addEventListener('pointerdown', e => { x0 = e.clientX; y0 = e.clientY; });
  area.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) show(i + (dx < 0 ? 1 : -1));
  });
  area.addEventListener('pointercancel', () => { x0 = null; });
  carousel = { show, relabel };
  relabel();
  show(0);
}

// ---- start ----
document.addEventListener('DOMContentLoaded', async () => {
  lang = pickLang();
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  setupCarousel();
  setupCopy();
  applyLang();

  detectPlatform().then(p => { state.platform = p; orderCards(); renderPlatform(); });

  getRelease(VIBE_API, 'vibebms-site-rel-vibe')
    .then(rel => { state.vibe = rel; })
    .catch(() => { state.vibeFailed = true; })
    .then(() => { renderBuild(); renderPlatform(); });
  getRelease(SEEKER_API, 'vibebms-site-rel-seeker')
    .then(rel => { state.seeker = rel; })
    .catch(() => { state.seekerFailed = true; })
    .then(renderSeeker);
});
