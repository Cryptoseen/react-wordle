import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Nasıl Oyanır?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Nasıl oynayacağını bal gibi biliyorsun. Metro vs yaz ve hemen bil. İddaa gibi işte salla tuttu de.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="S" />
        <Cell value="A" />
        <Cell value="İ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       M harfi kelimede ve doğru yerde olduğunda bu renk olur. Engin çoğu zaman bunu kullanır. Muratta iyi alıştı :)
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        T harfi kelimede var ama yanlış yerde olduğunda bu renk olur.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="Ü" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="Ş" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E harfi kelimede yok böyle olduğunda bu renk olur ve ayvayı yedin uğraştırır.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        LA HER GÜN OYANDIĞIMIZ OYUNUN BİZE ÖZEL VERİSYONUNU YAPTIM İŞTE SEVGİ İLE {' '}
      </p>
    </BaseModal>
  )
}
