// imnpm install @types/node --save-dev

import * as fs from "fs";

// import * as fs from "file-system";

/**
 * 存取外部 API 資料及 localStorage
 */



interface configManagementSettingInterface {
  /** 預設路徑 */
  extsDir: string
  /** 操作者: human, schedule */
  user: string
}

export class configManagement {

  /** {configManagementSetting} 設定 */
  setting: configManagementSettingInterface;
  constructor(option: configManagementSettingInterface) {

    this.setting = option;
  }

  getConfigs() {

    // TODO 解決載入 fs 問題
    fs.readdir(this.setting.extsDir, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });

  }

}
