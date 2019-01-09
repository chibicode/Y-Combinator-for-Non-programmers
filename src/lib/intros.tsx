import { Em, P, Strong } from 'src/components/ContentTags'
import locale from 'src/lib/locale'
import t from 'src/lib/titles'

export const allIntros = {
  ycIntro: {
    en: 'Y Combinator for Non-Programmers',
    jp: (
      <>
        <P>
          こんにちは。
          <Em>
            <Strong>CSmoji</Strong>
          </Em>
          では、
          <Em>絵文字</Em>を使った<Em>コンピューターサイエンス(CS)</Em>
          の教科書を無料で配布しています。
        </P>
        <P>
          <Em>コードは一切出てきません。</Em>
          プログラミング未経験の方でも、プログラミング的な思考方法を身につけることができます。
        </P>
        <P>
          そんな教科書の第1弾が、この「
          <Em>
            <Strong>{t('ycTitle')}</Strong>
          </Em>
          」です。ぜひお楽しみください！
        </P>
      </>
    )
  },
  ycEpisode1: {
    en: 'The Bento Boxes',
    jp: 'これっくらいの、お弁当箱に…'
  },
  ycEpisode2: {
    en: 'The Middle Item',
    jp: '真ん中の料理'
  },
  ycEpisode3: {
    en: '“Eat Later” List',
    jp: 'あとで食べるものリスト'
  },
  ycEpisode4: {
    en: 'Priorities, Part 1',
    jp: '順序その1'
  },
  ycEpisode5: {
    en: 'Priorities, Part 2',
    jp: '順序その2'
  },
  ycEpisode6: {
    en: 'Shuffle Time',
    jp: 'シャッフルタイム'
  },
  ycEpisode7: {
    en: 'Secret Code',
    jp: '弁当箱の暗号'
  },
  ycEpisode8: {
    en: 'Plus One',
    jp: '1を足す'
  },
  ycEpisode9: {
    en: 'Addition and Multiplication',
    jp: '足し算と掛け算'
  },
  ycEpisode10: {
    en: 'Secret Boolean Code',
    jp: '弁当箱の二択暗号'
  },
  ycEpisode11: {
    en: 'Both Yes?',
    jp: '両方とも「はい」？'
  },
  ycEpisode12: {
    en: 'If, Then, Else',
    jp: '「はい」ならこうする、「いいえ」ならこうする'
  }
}

const h = (x: keyof typeof allIntros) => allIntros[x][locale]

export default h
