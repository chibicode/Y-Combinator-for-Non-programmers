import {
  Em,
  Hr,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'

export default () => (
  <>
    <P>
      <Strong>クイズです。</Strong>「
      <Strong>
        <Em>Yコンビネーター</Em>
      </Strong>
      」という単語の意味として正しいのはどれでしょう？
    </P>
    <Ol>
      <OlLi>
        スタートアップ企業に投資し育成する、シリコンバレー発の
        <Em>スタートアップ養成スクール</Em>。
      </OlLi>
      <OlLi>
        <Em>再帰関数を定義する手段</Em>
        のひとつ。
      </OlLi>
      <OlLi>
        <Em>不動点コンビネータ</Em>
        の一種。
      </OlLi>
    </Ol>
    <Hr />
  </>
)
