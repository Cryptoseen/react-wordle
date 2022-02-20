export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['YA ZEKİSİN, YA KOPYACI, YA MALIÇLI!', 'AFERİN LA!', 'EH İŞTE BİLDİN EN AZINDAN!']
export const GAME_COPIED_MESSAGE = 'Kopyalandı hadi paylaş arkadaşlarınla'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Harf sayısı yetersiz aganin'
export const WORD_NOT_FOUND_MESSAGE = 'Bu kelime bulunamadı ama hatırlatırsan ekleriz.'
export const HARD_MODE_ALERT_MESSAGE =
  'Zor Mod yalnızca başlangıçta etkinleştirilebilir!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Kelime şu idi ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Tamam'
export const DELETE_TEXT = 'Sil'
export const STATISTICS_TITLE = 'İstatistik'
export const GUESS_DISTRIBUTION_TEXT = 'Tahmin Dağılımı'
export const NEW_WORD_TEXT = 'Yeni kelime için'
export const SHARE_TEXT = 'Paylaş'
export const TOTAL_TRIES_TEXT = 'Toplam deneme'
export const SUCCESS_RATE_TEXT = 'Başarı Oranı'
export const CURRENT_STREAK_TEXT = 'Mevcut galibiyet'
export const BEST_STREAK_TEXT = 'En iyi galibiyet'
