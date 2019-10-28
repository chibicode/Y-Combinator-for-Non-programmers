import locale from 'src/lib/locale'
import { DateTime } from 'luxon'

export const date = {
  jp: DateTime.fromISO('2019-09-09T00:00:00Z'),
  en: DateTime.fromISO('2019-10-31T12:00:00Z')
}[locale]

export const dateString = {
  jp: date
    .setLocale('ja')
    .setZone('Asia/Tokyo')
    .toFormat('yyyy年LL月dd日'),
  en: date
    .setLocale('en')
    .setZone('America/Los_Angeles')
    .toFormat('LLL d, yyyy')
}[locale]

export const dateSchemaString = {
  jp: date.setZone('Asia/Tokyo').toISO(),
  en: date.setZone('America/Los_Angeles').toISO()
}[locale]
