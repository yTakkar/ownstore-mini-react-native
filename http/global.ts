import { ISectionInfo } from '../contract/section'
import { httpClient } from './httpClient'

export const getSectionInfo = async (sectionId: number): Promise<ISectionInfo> => {
  const result = await httpClient.get<ISectionInfo>(`/section/info/${sectionId}`, {})
  return result
}
