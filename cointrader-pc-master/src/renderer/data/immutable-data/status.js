export default class Status {
  static checkStatus = {
    WAIT: { name: 'check.wait', value: 'WAIT' },
    PASS: { name: 'check.pass', value: 'PASS' },
    NOT_PASS: { name: 'check.not-pass', value: 'NOT_PASS' },
  }
  
  static assetOpStatus = {
    PROCESSING: { name: 'processing', value: 'PROCESSING' },
    CANCELED: { name: 'canceled', value: 'CANCELED' },
    COMPLETED: { name: 'completed-1', value: 'COMPLETED' },
  }
  
  static orderStatus = {
    BUYING: { name: 'buying', value: 'BUYING' },
    COMPLETED: { name: 'completed', value: 'COMPLETED' },
    CANCELED: { name: 'canceled', value: 'CANCELED' },
  }
  
  static orderType = {
    1: { name: 'sell-1', value: 1 },
    2: { name: 'buy-1', value: 2 },
  }
  
  static cashOrderType = {
    1: { name: 'buy-1', value: 1 },
    2: { name: 'sell-1', value: 2 },
  }
  
  static orderType1 = {
    1: { name: 'exchange.limit', value: 1 },
    2: { name: 'exchange.market', value: 2 },
  }
  
  static cashOrderStatus = {
    1: { name: 'pay.wait', value: 1 },
    2: { name: 'paid', aliasName: 'processing', value: 2 },
    3: { name: 'completed', value: 3 },
    4: { name: 'canceled', value: 4 },
    5: { name: 'checked.once', aliasName: 'processing', value: 5 },
  }
  
  static boundStatus = {
    1: { name: 'bound', value: 1 },
    0: { name: 'unbound', value: 0 },
  }
  
  static setStatus = {
    1: { name: 'beenSet', value: 1 },
    0: { name: 'unset', value: 0 },
  }
  
  static authorizeStatus = {
    0: { name: 'unauthorized', value: 0 },
    1: { name: 'submitted', value: 1 },
    2: { name: 'authorized', value: 2 },
    3: { name: 'authorize.failed', value: 3 },
    4: { name: 'checking', value: 4 },
  }
  
  static withdrawStatus = {
    0: { name: 'submitted', value: 0 },
    1: { name: 'checking', value: 1 },
    2: { name: 'processing', value: 2 },
    3: { name: 'success', value: 3 },
    4: { name: 'failed', value: 4 },
    5: { name: 'canceled', value: 5 },
  }
  
  static securityLevel = {
    1: { name: 'low', value: 1 },
    2: { name: 'middle', value: 2 },
    3: { name: 'high', value: 3 },
  }
  
  static payType = {
    '0': {
      name: 'bank.card',
      value: 'bank',
      icon: require('assets/client/exchange/icon-card.png'),
    },
  }
  
  static levels = {
    1: { name: '一级', value: 1 },
    2: { name: '二级', value: 2 },
    3: { name: '三级', value: 3 },
  }
  
  static footerItems = {
    1: { name: 'about-us', value: 1, alias: 'aboutUs' },
    2: { name: 'help-center', value: 2, alias: 'help' },
    3: { name: 'follow-us', value: 3, alias: 'followUs' },
    4: { name: 'friendly-links', value: 4, alias: 'friendlyLinks' },
  }
  
  static certificateImgTypes = {
    front: 0,
    inhand: 1,
  }
  
  static certificateTypes = {
    fast: 0,
    manual: 1,
  }
}
