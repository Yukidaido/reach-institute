import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPolicy() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="privacy-page">
        <div className="container privacy-content">
          <p className="eyebrow">Privacy Policy</p>
          <h1>プライバシーポリシー</h1>
          <p>Reach Institute Thinktank【学生団体】（以下「当団体」）は、お問い合わせに際して取得する情報を、以下の方針に基づき適切に取り扱います。</p>
          <h2>1. 取得する情報</h2>
          <p>Googleフォームを通じて、氏名、メールアドレス、お問い合わせ内容などをご提供いただく場合があります。</p>
          <h2>2. 利用目的</h2>
          <p>取得した情報は、お問い合わせへの対応、活動に関する必要な連絡、当団体の活動案内のために利用します。目的の範囲を超えて利用することはありません。</p>
          <h2>3. 管理と第三者提供</h2>
          <p>取得した情報は適切に管理し、本人の同意なく第三者へ提供しません。ただし、法令に基づく場合を除きます。</p>
          <h2>4. 内容の見直し</h2>
          <p>本ポリシーは、活動内容やGoogleフォームの取得項目、運用方法に応じて見直す場合があります。</p>
          <Link className="privacy-back" href="/">← トップページへ戻る</Link>
        </div>
      </main>
    </div>
  );
}