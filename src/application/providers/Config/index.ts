declare const getAppConfig: () => any

class ConfigProvider {
  get (): any {
    return getAppConfig()
  }
}

const configProvider: ConfigProvider = new ConfigProvider()

export default configProvider
