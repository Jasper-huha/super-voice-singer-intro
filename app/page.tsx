const leagueFacts = [
  {
    number: "01",
    title: "四支固定戰隊",
    copy: "由隊長帶領正式選手參賽，讓每位歌手擁有清楚的團隊身分。",
  },
  {
    number: "02",
    title: "每年一個完整賽季",
    copy: "從例行賽、戰績排名、季後賽，一路走向年度總冠軍戰。",
  },
  {
    number: "03",
    title: "多元的計分評審方式",
    copy: "專業評審、現場觀眾與線上觀眾共同為每一位選手評分。",
  },
  {
    number: "04",
    title: "每場演唱都能累積",
    copy: "比賽會留下戰績、排名、作品、內容、觀眾支持與市場反應。",
  },
  {
    number: "05",
    title: "戰隊也是音樂團體",
    copy: "除了參賽，也能發表歌曲、製作內容、巡迴演出與承接合作。",
  },
];

const developmentPaths = [
  {
    title: "正式賽事",
    copy: "每一次演唱都形成正式分數與戰績，讓能力與成長有清楚紀錄。",
  },
  {
    title: "造勢曝光",
    copy: "完整演唱、賽事精華、人物故事與短影音，讓歌手持續被看見。",
  },
  {
    title: "音樂作品",
    copy: "參與聯盟原創、AI協作、戰隊歌曲及個人作品的錄音與演出。",
  },
  {
    title: "巡迴演出",
    copy: "走進城市節慶、觀光景點、校園、商場、Live House與各式舞台。",
  },
  {
    title: "產業合作",
    copy: "連接平台、唱片公司、品牌、活動單位、地方政府與教育夥伴。",
  },
];

const singerProfile = [
  "年滿18歲，熱愛歌唱並希望持續發展",
  "具備聲音特色、演唱能力、舞台魅力或成長潛力",
  "可以是職業歌手、表演工作者，也可以是尚未出道的新聲音",
  "願意接受比賽、訓練、團隊合作與不同舞台的挑戰",
  "希望累積作品、觀眾、演出經驗與更完整的音樂發展機會",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳至主要內容
      </a>

      <header className="site-header" aria-label="主要導覽">
        <a className="brand" href="#top" aria-label="決戰超強音首頁">
          <span className="brand-mark" aria-hidden="true">戰</span>
          <span className="brand-copy">
            <strong>決戰超強音</strong>
          </span>
        </a>
        <nav>
          <a href="#league">計畫概念</a>
          <a href="#growth">歌手發展</a>
          <a href="#path">發展道路</a>
          <a className="nav-cta" href="#invitation">第一季邀請</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/hero-stage.webp"
            alt="歌手站在大型音樂競技舞台中央，面向滿場觀眾與四組戰隊燈光"
          />
          <div className="hero-shade" aria-hidden="true" />
          <h1 id="hero-title" className="visually-hidden">
            決戰超強音｜歌手合作計畫
          </h1>
        </section>

        <section className="origin section-space">
          <div className="page-shell origin-grid">
            <div className="origin-title-stack">
              <p className="section-kicker">全新的歌唱競技時代</p>
              <h2>決戰超強音</h2>
              <p className="origin-positioning">音樂職業賽事聯盟</p>
            </div>
            <div className="origin-copy">
              <p className="origin-highlight">
                歌唱比賽長久以來都是深受大眾喜愛的娛樂內容。每一位歌手站上舞台，都能以聲音、情感與人生故事打動觀眾；每一次演出與勝負，也都能凝聚關注、支持與期待。
              </p>
              <p>
                在這份深厚的大眾基礎之上，我們進一步提出一種更具發展性的全新模式：將歌唱競技導入職業賽事制度，讓歌手擁有正式的選手身分，讓戰隊累積戰績與支持，讓觀眾實際參與評分，並讓一場場演出彼此銜接，形成可以逐年延續的完整賽季。
              </p>
              <p>
                當賽事、戰隊、歌手、作品、觀眾與商業合作開始持續累積，歌唱比賽便能發展成一套完整的音樂職業體系。這個全新的產業概念，叫做<strong>「音樂職業賽事聯盟」</strong>。
              </p>
            </div>
          </div>
          <div className="page-shell league-definition">
            <div className="league-monogram" aria-hidden="true">CPML</div>
            <div>
              <p>Chinese Professional Music League</p>
              <h3>華人音樂職業賽事聯盟</h3>
            </div>
            <p className="definition-copy">
              由天合國際娛樂發起；《決戰超強音》是聯盟面向觀眾與市場推出的核心職業賽事。
            </p>
          </div>
        </section>

        <section className="league section-space" id="league" aria-labelledby="league-title">
          <div className="page-shell">
            <div className="section-heading">
              <p className="section-kicker">THE LEAGUE IN MOTION</p>
              <h2 id="league-title">決戰超強音 一個永續發展的職業賽事</h2>
              <p>固定戰隊、完整賽季、共同評分、音樂作品、影音內容與巡迴演出，共同構成一套可以持續累積的音樂職業賽事體系。</p>
            </div>
            <div className="fact-grid">
              {leagueFacts.map((fact) => (
                <article className="fact-card" key={fact.number}>
                  <div className="fact-number">{fact.number}</div>
                  <h3>{fact.title}</h3>
                  <p>{fact.copy}</p>
                </article>
              ))}
            </div>
            <blockquote className="league-quote">
              加入《決戰超強音》，就是加入一套結合賽事、戰隊、作品、影音內容、現場演出與歌手發展的音樂職業體系。
            </blockquote>
          </div>
        </section>

        <section className="scoring section-space" aria-label="賽事評分現場">
          <div className="page-shell scoring-grid">
            <figure className="image-frame scoring-image">
              <img
                src="/images/audience-scoring.webp"
                alt="歌手演唱時，現場觀眾透過手機共同參與評分，後方設有專業評審席"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="growth section-space" id="growth" aria-labelledby="growth-title">
          <div className="page-shell">
            <div className="section-heading wide-heading">
              <p className="section-kicker">A CAREER BUILT TO LAST</p>
              <h2 id="growth-title">多元發展的職業賽事</h2>
              <p>《決戰超強音》以職業賽事為起點，將作品製作、戰隊經營、影音曝光、巡迴演出與產業合作串聯成一套完整的歌手發展體系。歌手的演唱能力、舞台經驗、音樂作品、觀眾支持與市場價值，將隨著每一次參與及每一個賽季持續累積，逐步建立可以長期經營的演藝生涯。</p>
            </div>

            <div className="development-grid">
              {developmentPaths.map((item, index) => (
                <article className="development-card" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="tour-feature">
              <img
                src="/images/city-tour.webp"
                alt="多位聯盟歌手在城市戶外舞台共同演出，觀眾在近距離欣賞"
                loading="lazy"
              />
              <div className="tour-overlay">
                <p className="tour-kicker">FROM THE LEAGUE TO EVERY STAGE</p>
                <h3>為選手開拓更多的表演舞台</h3>
                <p className="tour-body">
                  聯盟將賽事所累積的歌手、戰隊與內容能量，延伸至地方政府、觀光景點、城市節慶、商場、校園、企業、品牌、Pub、音樂餐廳、Live House及各類室內外舞台。一軍、二軍與三軍選手，都將依照不同階段的發展安排，參與適合的演出與內容計畫，在一次次現場實戰中累積觀眾、經驗與市場連結，逐步拓展跨城市及多元場域的演出機會。
                </p>
              </div>
            </div>

            <div className="works-callout">
              <p className="section-kicker">SONGS BECOME ASSETS</p>
              <h3>創造多元發展</h3>
              <p>
                聯盟將發展原創歌曲、AI協作歌曲、戰隊歌曲與個人作品，並推動錄音、發行與舞台演出。歌曲所形成的內容與權利資產，可在後續賽季、影音平台、演出及商業合作中持續發揮效益；同時也將爭取與華納、滾石等大型唱片公司及音樂產業夥伴合作。
              </p>
            </div>
          </div>
        </section>

        <section className="path section-space" id="path" aria-labelledby="path-title">
          <div className="page-shell">
            <div className="section-heading">
              <p className="section-kicker">YOUR WAY UP</p>
              <h2 id="path-title">明確的選手的分級制度</h2>
              <p>一軍、二軍、三軍，是一條持續向上的發展道路。</p>
            </div>

            <div className="path-steps">
              <article>
                <span>ENTRY</span>
                <h3>超音盃與各類徵選</h3>
                <p>從公開賽事、教育合作與發掘計畫，持續尋找新的聲音。</p>
              </article>
              <article>
                <span>03</span>
                <h3>三軍｜發掘與培育</h3>
                <p>進入聯盟基礎選手池，累積訓練、內容拍攝、作品與舞台經驗。</p>
              </article>
              <article>
                <span>02</span>
                <h3>二軍｜正式發展</h3>
                <p>持續接受訓練、作品規劃與舞台實戰，爭取進入一軍。</p>
              </article>
              <article className="path-premier">
                <span>01</span>
                <h3>一軍｜固定戰隊</h3>
                <p>參與主要賽事與重要演出，累積正式戰績、作品與市場影響力。</p>
              </article>
            </div>

            <div className="destination-strip">
              <span>正式賽季</span><i>→</i>
              <span>音樂作品</span><i>→</i>
              <span>巡迴演出</span><i>→</i>
              <span>商業合作</span>
            </div>
          </div>
        </section>

        <section className="profile section-space" aria-labelledby="profile-title">
          <div className="page-shell profile-grid">
            <div className="profile-heading">
              <p className="section-kicker">WHO WE ARE LOOKING FOR</p>
              <h2 id="profile-title">戰隊職業選手強力募集中</h2>
              <p>
                我們珍視每位歌手獨特的音色、情感、個性、故事與發展潛力。不同的聲音，都有機會在聯盟中找到適合自己的歌曲、戰隊與舞台。
              </p>
            </div>
            <ol className="profile-list">
              {singerProfile.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="invitation section-space" id="invitation" aria-labelledby="invitation-title">
          <div className="invitation-glow" aria-hidden="true" />
          <div className="page-shell invitation-content">
            <p className="section-kicker">THE FIRST CHAPTER</p>
            <p className="invitation-season">第一季</p>
            <h2 id="invitation-title">共同建立聯盟的第一段歷史。</h2>
            <p>
              第一季將產生第一批聯盟歌手、第一批四支固定戰隊、第一批正式戰績、第一批聯盟歌曲，以及第一場年度總冠軍戰。
            </p>
            <p>
              現在加入計畫的歌手，有機會成為華人音樂職業賽事聯盟最早被看見、被培育並參與建立制度的一批選手，與隊長、評審及製作團隊一起創造《決戰超強音》的第一段歷史。
            </p>
            <blockquote>
              讓你的聲音被更多人聽見，並持續累積舞台、作品、觀眾與市場價值，我們誠摯邀請您加入決戰超強音。
            </blockquote>
          </div>
        </section>

        <section className="team section-space" aria-labelledby="team-title">
          <div className="page-shell">
            <div className="section-heading compact-heading">
              <p className="section-kicker">ABOUT THE TEAM</p>
              <h2 id="team-title">補充說明｜發起與製作團隊</h2>
            </div>
            <div className="team-grid">
              <article className="team-card company-card">
                <img src="/images/production-team.jpg" alt="天合國際娛樂製作團隊於影視工作空間合影" loading="lazy" />
                <div className="team-card-copy">
                  <p className="team-label">發起單位</p>
                  <h3>天合國際娛樂有限公司</h3>
                  <p>
                    立足台灣、放眼世界的綜合型娛樂公司，業務涵蓋影視製作、音樂製作、藝人經紀、新媒體內容、品牌策劃及大型活動執行，具備從企劃開發、現場製作到後期內容與整合行銷的完整執行能力。
                  </p>
                  <a href="https://starseeker.online/" target="_blank" rel="noreferrer">
                    前往公司網站 <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>

              <article className="team-card jasper-card">
                <img src="/images/jasper-lien.jpg" alt="《決戰超強音》發起人與總製作人連書賢 Jasper Lien" loading="lazy" />
                <div className="team-card-copy">
                  <p className="team-label">發起人／總製作人</p>
                  <h3>連書賢 Jasper Lien</h3>
                  <p>
                    天合國際娛樂執行長／總導演，擁有近30年影視製作資歷，歷任電影製片人、節目製作人與導演。代表經歷包括《突破：三千米的泳氣》聯合製片人、《黑糖瑪奇朵》製作人／導演及《上班這黨事》製作人。
                  </p>
                  <a href="https://jasperlien.zeabur.app/" target="_blank" rel="noreferrer">
                    查看個人作品 <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-inner">
          <div>
            <strong>決戰超強音</strong>
            <span>華人音樂職業賽事聯盟 · 歌手合作計畫</span>
          </div>
          <p>天合國際娛樂有限公司發起</p>
        </div>
      </footer>
    </>
  );
}
