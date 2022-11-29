import { withInstall } from '../utils'
import _MinConfigProvider from './ConfigProvider'

export const MinConfigProvider = withInstall(_MinConfigProvider)
export default MinConfigProvider
export { configProviderProps } from './ConfigProvider'
