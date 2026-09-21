"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { members } from "@/data/members";
import { newsItems } from "@/data/news";
import { navigation, siteConfig } from "@/data/siteConfig";

const principles = [
  "将来の主権者としての自覚と教養を育む",
  "政治に関心を持つきっかけをつくる",
  "学生や若者の声を社会へ届ける",
  "埋もれがちな意見を丁寧に拾い上げる",
];

const timeline = [
  "大学生未来会議で出会う",
  "同じチームで政策提言に取り組む",
  "学生の声を社会へ届ける必要性を共有する",
  "Reach Institute Thinktank【学生団体】を立ち上げる",
];

const activities = [
  {
    title: "政策・社会課題のリサーチ",
    body: "教育、若者の政治参加、地域、社会制度など、学生の生活と未来に関わる課題を調べます。アンケートや資料調査を通じて、学生の声を政策提言の原案へつなげます。",
  },
  {
    title: "アンケートと意見収集",
    body: "学生や若者が日常で感じている疑問、不安、提案を集めます。数値だけでは捉えきれない声にも目を向け、多様な意見を丁寧に整理します。",
  },
  {
    title: "議員・関係者へのヒアリング",
    body: "政策形成の現場で活動する議員や関係者へのヒアリングを通じ、社会課題への理解を深め、学生の声を提言へつなげます。",
  },
  {
    title: "政策提言と発信",
    body: "調査と対話から得られた考えを、提言、レポート、イベント、SNSなどを通じて社会へ発信します。",
  },
];

const goals = [
  {
    title: "世界中で使われるプラットフォームをつくる",
    body: "国や地域、年齢を越えて、多様な若者が社会課題について意見を交わし、声を届けられる仕組みを目指します。",
  },
  {
    title: "新しい形の主権者教育を広げる",
    body: "知識を一方的に学ぶだけではなく、自ら考え、対話し、社会に関わる実践的な学びを届けます。",
  },
  {
    title: "中高生の意見を政治家や社会へ届ける仕組みをつくる",
    body: "選挙権の有無にかかわらず、中高生が社会の一員として意見を表明し、政策や社会の議論に参加できる機会を広げます。",
  },
];

export default function Home() {
  const [openMember, setOpenMember] = useState<string | null>(null);

  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero__grid" aria-hidden="true" />
          <div className="container hero__inner">
            <p className="hero__kicker">Reach Institute Thinktank</p>
            <h1>新たな民主主義を作る</h1>
            <p className="hero__copy">Reach Institute Thinktank【学生団体】は、学生が政治と政策を学び、調査し、考え、社会へ提言するための学生シンクタンクです。</p>
            <p className="hero__note">全国の学生の声を集め、関東を拠点に、よりよい社会のあり方を考えます。</p>
            <div className="hero__actions">
              <a className="button button--light" href="#principles">私たちの理念を見る <span aria-hidden="true">↓</span></a>
              <a className="button button--outline" href="#activities">活動について知る <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="keyword-strip" aria-label="Reachの3つのキーワード">
          <div className="container keyword-grid">
            <div className="keyword"><h2 className="keyword__title">Research</h2><p>社会課題を調査し、根拠をもって考える</p></div>
            <div className="keyword"><h2 className="keyword__title">Dialogue</h2><p>異なる意見に耳を傾け、対話する</p></div>
            <div className="keyword"><h2 className="keyword__title">Reach</h2><p>学生の声を社会へ届ける</p></div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="container">
            <div className="split-heading">
              <div><p className="eyebrow">Our Principles</p><h2 className="section-title">理念</h2></div>
              <div className="prose">
                <p>日本には、政策を調査・研究し、社会へ提言するシンクタンクの役割が、学生世代まで十分に開かれているとはいえません。Reach Institute Thinktank【学生団体】は、学生の立場から政策や社会課題を学び、調べ、議論し、提言する文化を広げることを目指します。</p>
                <p>現在の学生は未来の主権者です。しかし、選挙権を持たない、あるいは社会的な発言力を持ちにくい中高生を含む若者の声は、政治や政策形成の過程で十分に届いているとはいえません。</p>
                <p>私たちは、学生一人ひとりの疑問、不安、提案を丁寧に受け止めます。既存のSNSでは流れてしまい、埋もれやすい声を、調査、対話、提言を通して社会へつなげます。</p>
                <p>学生が将来の主権者として必要な自覚と教養を身につけ、政治を遠いものではなく、自らの生活と未来に関わるものとして考えられる社会を目指します。</p>
              </div>
            </div>
            <div className="principle-grid">
              {principles.map((principle, index) => <div className="principle" key={principle}><span className="principle__number">0{index + 1}</span><h3>{principle}</h3></div>)}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="split-heading">
              <div><p className="eyebrow">Our Beginning</p><h2 className="section-title">創設の経緯</h2></div>
              <div className="prose"><p>Reach Institute Thinktank【学生団体】は、大学生未来会議で出会ったメンバーが、同じチームで政策提言に取り組んだことをきっかけに生まれました。</p><p>対話や共同作業を重ねるなかで、学生自身が政策を学び、考え、社会に提案する場の必要性を共有しました。学校や地域、年齢の違いを越えて学生が協働し、多様な声を社会へつなげるために、Reach Institute Thinktankを立ち上げました。</p></div>
            </div>
            <div className="timeline">
              {timeline.map((item, index) => <div className="timeline__item" key={item}><h3><span className="principle__number">0{index + 1}</span><br />{item}</h3></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="activities">
          <div className="container">
            <p className="eyebrow">What We Do</p><h2 className="section-title">やっていること</h2>
            <p className="section-lead">学生や若者の声を起点に、調査、対話、提言を一つの流れとして積み重ねます。</p>
            <div className="activity-grid">{activities.map((activity, index) => <article className="activity" key={activity.title}><span className="activity__number">0{index + 1}</span><h3>{activity.title}</h3><p>{activity.body}</p></article>)}</div>
            <p className="notice">現在、一部の活動は準備・開発段階にあります。進捗は順次、活動報告とInstagramでお知らせします。</p>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="container platform__layout">
            <div>
              <p className="eyebrow">In Development</p>
              <h2 className="section-title">学生の声を届ける<br />プラットフォームReachを<br />開発中です。</h2>
              <div className="platform__badge">DEVELOPMENT IN PROGRESS</div>
              <div className="platform__preview" aria-label="Reachアプリのモバイル画面イメージ">
                <Image
                  src="/images/reach-platform-preview.png"
                  alt="Reachアプリの開発中画面"
                  width={760}
                  height={760}
                  priority
                  className="platform__image"
                />
              </div>
            </div>
            <div className="prose">
              <p>Reachは、学生をはじめとした国民が感じた「困った」「不安」「要望」を、政策提言として形にして届けるためのプラットフォームです。</p>
              <p>投稿された声は、AIで整理され、争点にされ、提言へとつながります。同じ課題を抱える人の意見が集まることで、個人の声が社会に届きやすくなり、議員や関係者への提出と、返ってきた回答の共有まで一連の流れをつくります。</p>
              <ul className="feature-list"><li>学生の声を投稿</li><li>AIで整理・争点化</li><li>提言の作成</li><li>議員や社会への提出と回答の可視化</li></ul>
              <p className="notice">Reachは現在開発中です。声を集めて、争点にして、提言にして、議員に届けて、回答をもらう流れを目指しています。</p>
            </div>
          </div>
        </section>

        <section className="section" id="goals">
          <div className="container"><p className="eyebrow">Our Goals</p><h2 className="section-title">目標</h2><div className="goals">{goals.map((goal, index) => <article className="goal" key={goal.title}><span className="goal__number">0{index + 1}</span><h3>{goal.title}</h3><p>{goal.body}</p></article>)}</div></div>
        </section>

        <section className="section section--tint" id="members">
          <div className="container"><p className="eyebrow">Members</p><h2 className="section-title">メンバー</h2><p className="section-lead">学生の視点と責任を持って、Reachの活動を運営しています。</p><div className="member-grid">{members.map((member) => {
            const isOpen = openMember === member.name;
            const hasComment = Boolean(member.comment && member.comment.trim().length > 0);

            return (
              <article className={`member${isOpen ? " member--open" : ""}`} key={`${member.role}-${member.name}`}>
                <div className="member__photo" role="img" aria-label={`${member.role}の写真プレースホルダー`}><span>COMING<br />SOON</span></div>
                <div className="member__body">
                  <div className="member__header-row">
                    <div>
                      <span className="member__role">{member.role}</span>
                      <h3>{member.name}</h3>
                      <p className="member__year">{member.year}</p>
                    </div>
                    {hasComment ? (
                      <button type="button" className="member__toggle" onClick={() => setOpenMember(isOpen ? null : member.name)} aria-expanded={isOpen} aria-controls={`member-comment-${member.name}`}>
                        {isOpen ? "閉じる" : "もっと見る"}
                      </button>
                    ) : null}
                  </div>
                  {hasComment ? (
                    <div id={`member-comment-${member.name}`} className={`member__comment-wrap${isOpen ? " is-open" : ""}`}>
                      <p className="member__comment">{member.comment}</p>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}</div></div>
        </section>

        <section className="section" id="news">
          <div className="container"><p className="eyebrow">News & Reports</p><h2 className="section-title">ニュース・活動報告</h2><div className="news-list">{newsItems.map((item) => <article className="news-item" key={item.title}><span className="news-item__date">{item.date}</span><span className="news-item__category">{item.category}</span><h3 className="news-item__title">{item.title}</h3></article>)}</div></div>
        </section>

        <section className="section section--tint" id="instagram">
          <div className="container instagram-layout"><div><p className="eyebrow">Instagram</p><h2 className="section-title">Instagram</h2><p className="section-lead">活動の進捗、リサーチ、政策・社会課題に関する情報をInstagramで発信します。</p><p className="prose">最新の活動報告やイベント情報を公式Instagramで発信しています。</p></div><a className="button" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagramを開く <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="section contact-band" id="contact">
          <div className="container contact-layout"><div><p className="eyebrow">Contact</p><h2 className="section-title">お問い合わせ</h2><p className="section-lead">取材、協働、イベント、リサーチ、活動に関するお問い合わせは、Googleフォームよりご連絡ください。</p></div><a className="button" href={siteConfig.contactFormUrl} target="_blank" rel="noreferrer">お問い合わせフォームへ <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container"><div className="footer-top"><div><div className="footer-brand"><Image src="/images/reach-mark.svg" alt="" width={42} height={42} /><div><div className="footer-wordmark">REACH</div><p className="wordmark__sub">Institute Thinktank【学生団体】</p></div></div><p className="footer-tagline">新たな民主主義を作る</p></div><nav className="footer-nav" aria-label="フッターナビゲーション">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/privacy-policy">プライバシーポリシー</Link><a href={siteConfig.instagramUrl}>Instagram</a></nav></div><div className="footer-bottom"><span>Copyright © 2026 Reach Institute Thinktank【学生団体】. All rights reserved.</span><span>Official site</span></div></div>
      </footer>
    </div>
  );
}
