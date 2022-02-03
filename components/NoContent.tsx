import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import CoreImage from './core/CoreImage'
import CoreText, { CoreTextType } from './core/CoreText'
import CoreView from './core/CoreView'

interface INoContentProps {
  message?: string
}

const NoContent: React.FC<INoContentProps> = props => {
  const { message = 'No content available!' } = props

  const tw = useTailwind()

  return (
    <CoreView style={tw('px-5 flex items-center justify-center')}>
      <CoreView>
        {/* <CoreView className="w-20 h-20 bg-gray300 mb-4"></CoreView> */}
        <CoreImage source={require('../assets/images/empty-cart-basket.webp')} style={tw('w-80 h-52')} />
        <CoreText style={tw('text-center relative -top-6')} type={CoreTextType.MEDIUM}>
          {message}
        </CoreText>
      </CoreView>
    </CoreView>
  )
}

export default NoContent
