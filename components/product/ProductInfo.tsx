import React, { useContext } from 'react'
import { Pressable } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { IMAGE_VARIANTS } from '../../constants/constants'
import { ProductType } from '../../contract/constants'
import { IComboProductInfo, IIndividualProductInfo, IProductInfo } from '../../contract/product'
import { prepareExternalImageUrl } from '../../utils/image'
import ApplicationContext from '../ApplicationContext'
import CoreImage, { ImageSourceType } from '../core/CoreImage'
import CoreText, { CoreTextType } from '../core/CoreText'
import CoreView from '../core/CoreView'

interface IProductInfoProps {
  product: IProductInfo
}

const ProductInfo: React.FC<IProductInfoProps> = props => {
  const { product } = props

  const isComboProduct = product.type === ProductType.COMBO
  const productInfo = isComboProduct ? (product as IComboProductInfo) : (product as IIndividualProductInfo)

  const { name, sku, isActive, images } = productInfo
  const onDiscount = sku.onSale

  const {
    device: { width },
  } = useContext(ApplicationContext)

  const tw = useTailwind()

  return (
    <Pressable style={tw('flex-1')}>
      <CoreView style={tw('flex-1')}>
        <CoreImage
          source={prepareExternalImageUrl(images[0].url, ImageSourceType.CLOUD, IMAGE_VARIANTS.SQUARE_300)}
          style={tw('flex-1 rounded-md')}
        />

        <CoreView
          style={tw('bg-whisper flex-row justify-center py-2 rounded-b-md absolute bottom-0 items-center w-full')}
        >
          <CoreImage source={require('../../assets/images/sale-icon.png')} style={tw('w-5 mr-1')} />
          <CoreText type={CoreTextType.BOLD} style={tw('text-xs text-moodyBlue')}>
            {sku.saleDiscountFlat
              ? `${sku.currency.symbol}${sku.saleDiscountFlat} OFF`
              : `${sku.saleDiscountPercentage}% OFF`}
          </CoreText>
        </CoreView>
      </CoreView>

      <CoreText type={CoreTextType.MEDIUM} numberOfLines={1} style={tw('mt-2')}>
        {name}
      </CoreText>

      <CoreView style={tw('flex-row items-center')}>
        {onDiscount ? (
          <CoreText style={tw('line-through text-xxs mr-1')}>
            {sku.currency.symbol}
            {sku.retailPrice}
          </CoreText>
        ) : null}

        <CoreText type={CoreTextType.BOLD} style={tw('text-primaryTextBold text-xs')}>
          {sku.currency.symbol}
          {sku.salePrice}
        </CoreText>
      </CoreView>
    </Pressable>
  )
}

export default ProductInfo
