import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import ApplicationContext from '../../components/ApplicationContext'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'
import ProductInfo from '../../components/product/ProductInfo'
import { HOME_SECTION_ID } from '../../constants/constants'
import { SectionType } from '../../contract/constants'
import { IProductSectionInfo, ISectionInfo, ISectionInfoProducts } from '../../contract/section'
import { getSectionInfo } from '../../http/global'

const HomeScreen: React.FC = props => {
  const [sectionProducts, setSectionProducts] = useState<IProductSectionInfo[]>([])
  const [showLoader, toggleLoader] = useState(false)

  const {
    dispatch,
    device: { width },
  } = useContext(ApplicationContext)

  const tw = useTailwind()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    toggleLoader(true)

    getSectionInfo(HOME_SECTION_ID)
      .then(resp => {
        let products: IProductSectionInfo[] = []

        if (resp.type === SectionType.PRODUCTS) {
          products = (resp as ISectionInfoProducts).products
        }

        setSectionProducts(products.filter(product => product.isActive))
      })
      .finally(() => {
        toggleLoader(false)
      })
  }

  const renderLoader = () => {
    return (
      <CoreView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="blue" />
      </CoreView>
    )
  }

  const renderContent = () => {
    return (
      <CoreView style={tw('flex-1 flex-row flex-wrap')}>
        <FlatList
          data={sectionProducts}
          keyExtractor={item => `${item.id}`}
          horizontal={false}
          numColumns={2}
          refreshControl={<RefreshControl refreshing={showLoader} onRefresh={() => fetchData()} />}
          renderItem={({ item }) => {
            return (
              <CoreView
                style={{
                  width: width / 2,
                  height: width / 2 + 40,
                  ...tw('px-2 pb-5'),
                }}
              >
                <ProductInfo product={item.productInfo} />
              </CoreView>
            )
          }}
        />
      </CoreView>
    )
  }

  return (
    <CoreView style={tw('flex-1')}>
      <Header />
      {showLoader ? renderLoader() : renderContent()}
    </CoreView>
  )
}

export default HomeScreen
