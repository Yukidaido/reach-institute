"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/siteConfig";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href="#home" onClick={closeMenu}>
          <Image className="wordmark__mark" src="/images/reach-mark.svg" alt="" width={34} height={34} priority />
          <span className="wordmark__divider" aria-hidden="true" />
          <span className="wordmark__text"><span className="wordmark__name">REACH</span><span className="wordmark__sub">Institute Thinktank【学生団体】</span></span>
        </Link>

        <nav id="main-navigation" className={`site-nav${isOpen ? " site-nav--open" : ""}`} aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href={siteConfig.contactFormUrl}>
          お問い合わせ
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}