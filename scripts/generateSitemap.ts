import fs from 'fs'
import path from 'path'
import sm from 'sitemap'
import { finalEpisodeNumber } from 'src/lib/episodeCategories'
import { baseUrl } from 'src/lib/meta'

const sitemap = sm.createSitemap({
  hostname: baseUrl,
  urls: [
    ...[...Array(finalEpisodeNumber + 1).keys()].slice(1).map(x => ({
      url: `/${x}`
    })),
    {
      url: ''
    }
  ]
})

fs.writeFileSync(path.join('dist', `sitemap.xml`), sitemap.toString())
